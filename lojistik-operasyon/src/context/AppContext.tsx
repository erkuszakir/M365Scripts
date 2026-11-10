import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ApiError, api, clearLegacyToken } from '../lib/api'
import type { IsEmri, IsEmriDurum, Kullanici } from '../types'

interface YeniIsEmriGirdi {
  baslik: string
  aciklama: string
  tip: IsEmri['tip']
  lokasyon: string
  tarih: string
  atananId: string | null
  arac: string
}

interface AppContextValue {
  hazir: boolean
  yukleniyor: boolean
  hata: string | null
  kullanicilar: Kullanici[]
  isEmirleri: IsEmri[]
  oturum: Kullanici | null
  yenile: () => Promise<void>
  girisYap: (kullaniciAdi: string, sifre: string) => Promise<string | null>
  cikisYap: () => void
  isEmriEkle: (girdi: YeniIsEmriGirdi) => Promise<IsEmri>
  isEmriGuncelle: (
    id: string,
    patch: Partial<
      Pick<
        IsEmri,
        | 'durum'
        | 'atananId'
        | 'notlar'
        | 'arac'
        | 'baslik'
        | 'aciklama'
        | 'lokasyon'
        | 'tarih'
        | 'tip'
      >
    >,
  ) => Promise<void>
  durumGuncelle: (id: string, durum: IsEmriDurum, not?: string) => Promise<void>
  kullaniciBul: (id: string | null) => Kullanici | undefined
  kullaniciEkle: (body: {
    kullaniciAdi: string
    adSoyad: string
    email: string
    sifre: string
    rol: Kullanici['rol']
  }) => Promise<string | null>
  kullaniciGuncelle: (
    id: string,
    body: Partial<{
      adSoyad: string
      email: string
      rol: Kullanici['rol']
      aktif: boolean
      sifre: string
    }>,
  ) => Promise<string | null>
  kullaniciSil: (id: string) => Promise<string | null>
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [hazir, setHazir] = useState(false)
  const [yukleniyor, setYukleniyor] = useState(false)
  const [hata, setHata] = useState<string | null>(null)
  const [kullanicilar, setKullanicilar] = useState<Kullanici[]>([])
  const [isEmirleri, setIsEmirleri] = useState<IsEmri[]>([])
  const [oturum, setOturum] = useState<Kullanici | null>(null)

  const kullaniciBul = useCallback(
    (id: string | null) => (id ? kullanicilar.find((k) => k.id === id) : undefined),
    [kullanicilar],
  )

  const yenile = useCallback(async () => {
    setYukleniyor(true)
    setHata(null)
    try {
      const me = await api.me()
      setOturum(me.kullanici)

      const isRes = await api.isEmirleri()
      setIsEmirleri(isRes.isEmirleri)

      if (me.kullanici.rol === 'admin') {
        const users = await api.kullanicilar()
        setKullanicilar(users.kullanicilar)
      } else {
        setKullanicilar([me.kullanici])
      }
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        setOturum(null)
        setKullanicilar([])
        setIsEmirleri([])
      } else {
        setHata(err instanceof Error ? err.message : 'Veri yüklenemedi.')
      }
    } finally {
      setYukleniyor(false)
    }
  }, [])

  useEffect(() => {
    async function boot() {
      clearLegacyToken()
      try {
        await yenile()
      } finally {
        setHazir(true)
      }
    }
    void boot()
  }, [yenile])

  const girisYap = useCallback(
    async (kullaniciAdi: string, sifre: string) => {
      try {
        const res = await api.login(kullaniciAdi, sifre)
        setOturum(res.kullanici)
        await yenile()
        return null
      } catch (err) {
        return err instanceof Error ? err.message : 'Giriş başarısız.'
      }
    },
    [yenile],
  )

  const cikisYap = useCallback(() => {
    void api.logout().catch(() => undefined)
    clearLegacyToken()
    setOturum(null)
    setKullanicilar([])
    setIsEmirleri([])
  }, [])

  const isEmriEkle = useCallback(async (girdi: YeniIsEmriGirdi) => {
    const res = await api.isEmriEkle(girdi)
    setIsEmirleri((prev) => [res.isEmri, ...prev])
    return res.isEmri
  }, [])

  const isEmriGuncelle = useCallback(
    async (
      id: string,
      patch: Partial<
        Pick<
          IsEmri,
          | 'durum'
          | 'atananId'
          | 'notlar'
          | 'arac'
          | 'baslik'
          | 'aciklama'
          | 'lokasyon'
          | 'tarih'
          | 'tip'
        >
      >,
    ) => {
      const res = await api.isEmriGuncelle(id, patch)
      setIsEmirleri((prev) => prev.map((ie) => (ie.id === id ? res.isEmri : ie)))
    },
    [],
  )

  const durumGuncelle = useCallback(async (id: string, durum: IsEmriDurum, not?: string) => {
    const body: { durum: IsEmriDurum; notlar?: string } = { durum }
    if (not !== undefined) body.notlar = not
    const res = await api.isEmriGuncelle(id, body)
    setIsEmirleri((prev) => prev.map((ie) => (ie.id === id ? res.isEmri : ie)))
  }, [])

  const kullaniciEkle = useCallback(
    async (body: {
      kullaniciAdi: string
      adSoyad: string
      email: string
      sifre: string
      rol: Kullanici['rol']
    }) => {
      try {
        const res = await api.kullaniciEkle(body)
        setKullanicilar((prev) =>
          [...prev, res.kullanici].sort((a, b) => a.adSoyad.localeCompare(b.adSoyad, 'tr')),
        )
        return null
      } catch (err) {
        return err instanceof Error ? err.message : 'Kullanıcı eklenemedi.'
      }
    },
    [],
  )

  const kullaniciGuncelle = useCallback(
    async (
      id: string,
      body: Partial<{
        adSoyad: string
        email: string
        rol: Kullanici['rol']
        aktif: boolean
        sifre: string
      }>,
    ) => {
      try {
        const res = await api.kullaniciGuncelle(id, body)
        setKullanicilar((prev) => prev.map((k) => (k.id === id ? res.kullanici : k)))
        if (oturum?.id === id) setOturum(res.kullanici)
        return null
      } catch (err) {
        return err instanceof Error ? err.message : 'Kullanıcı güncellenemedi.'
      }
    },
    [oturum?.id],
  )

  const kullaniciSil = useCallback(async (id: string) => {
    try {
      await api.kullaniciSil(id)
      setKullanicilar((prev) => prev.filter((k) => k.id !== id))
      setIsEmirleri((prev) =>
        prev.map((ie) => (ie.atananId === id ? { ...ie, atananId: null } : ie)),
      )
      return null
    } catch (err) {
      return err instanceof Error ? err.message : 'Kullanıcı silinemedi.'
    }
  }, [])

  const value = useMemo(
    () => ({
      hazir,
      yukleniyor,
      hata,
      kullanicilar,
      isEmirleri,
      oturum,
      yenile,
      girisYap,
      cikisYap,
      isEmriEkle,
      isEmriGuncelle,
      durumGuncelle,
      kullaniciBul,
      kullaniciEkle,
      kullaniciGuncelle,
      kullaniciSil,
    }),
    [
      hazir,
      yukleniyor,
      hata,
      kullanicilar,
      isEmirleri,
      oturum,
      yenile,
      girisYap,
      cikisYap,
      isEmriEkle,
      isEmriGuncelle,
      durumGuncelle,
      kullaniciBul,
      kullaniciEkle,
      kullaniciGuncelle,
      kullaniciSil,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp AppProvider içinde kullanılmalı')
  return ctx
}
