import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  loadIsEmirleri,
  loadKullanicilar,
  loadOturumId,
  resetDemoData,
  saveIsEmirleri,
  saveOturumId,
} from '../lib/storage'
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
  kullanicilar: Kullanici[]
  isEmirleri: IsEmri[]
  oturum: Kullanici | null
  girisYap: (kullaniciAdi: string, sifre: string) => string | null
  cikisYap: () => void
  isEmriEkle: (girdi: YeniIsEmriGirdi) => IsEmri
  isEmriGuncelle: (
    id: string,
    patch: Partial<Pick<IsEmri, 'durum' | 'atananId' | 'notlar' | 'arac' | 'baslik' | 'aciklama' | 'lokasyon' | 'tarih' | 'tip'>>,
  ) => void
  durumGuncelle: (id: string, durum: IsEmriDurum, not?: string) => void
  demoSifirla: () => void
  kullaniciBul: (id: string | null) => Kullanici | undefined
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [kullanicilar, setKullanicilar] = useState<Kullanici[]>(() => loadKullanicilar())
  const [isEmirleri, setIsEmirleri] = useState<IsEmri[]>(() => loadIsEmirleri())
  const [oturumId, setOturumId] = useState<string | null>(() => loadOturumId())

  const oturum = useMemo(
    () => kullanicilar.find((k) => k.id === oturumId) ?? null,
    [kullanicilar, oturumId],
  )

  const kullaniciBul = useCallback(
    (id: string | null) => (id ? kullanicilar.find((k) => k.id === id) : undefined),
    [kullanicilar],
  )

  const girisYap = useCallback(
    (kullaniciAdi: string, sifre: string) => {
      const kisi = kullanicilar.find(
        (k) =>
          k.kullaniciAdi.toLowerCase() === kullaniciAdi.trim().toLowerCase() &&
          k.sifre === sifre,
      )
      if (!kisi) return 'Kullanıcı adı veya şifre hatalı.'
      setOturumId(kisi.id)
      saveOturumId(kisi.id)
      return null
    },
    [kullanicilar],
  )

  const cikisYap = useCallback(() => {
    setOturumId(null)
    saveOturumId(null)
  }, [])

  const persist = useCallback((list: IsEmri[]) => {
    setIsEmirleri(list)
    saveIsEmirleri(list)
  }, [])

  const isEmriEkle = useCallback(
    (girdi: YeniIsEmriGirdi) => {
      const now = new Date().toISOString()
      const yeni: IsEmri = {
        id: `ie-${Date.now()}`,
        baslik: girdi.baslik.trim(),
        aciklama: girdi.aciklama.trim(),
        tip: girdi.tip,
        durum: girdi.atananId ? 'atandi' : 'bekliyor',
        lokasyon: girdi.lokasyon.trim(),
        tarih: girdi.tarih,
        atananId: girdi.atananId,
        arac: girdi.arac.trim(),
        notlar: '',
        olusturanId: oturumId ?? 'u-admin',
        olusturmaZamani: now,
        guncellemeZamani: now,
      }
      persist([yeni, ...isEmirleri])
      return yeni
    },
    [isEmirleri, oturumId, persist],
  )

  const isEmriGuncelle = useCallback(
    (
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
      const next = isEmirleri.map((ie) => {
        if (ie.id !== id) return ie
        const merged = { ...ie, ...patch, guncellemeZamani: new Date().toISOString() }
        if (patch.atananId !== undefined && !patch.durum) {
          if (patch.atananId && (ie.durum === 'bekliyor' || ie.durum === 'atandi')) {
            merged.durum = 'atandi'
          }
          if (!patch.atananId && ie.durum === 'atandi') {
            merged.durum = 'bekliyor'
          }
        }
        return merged
      })
      persist(next)
    },
    [isEmirleri, persist],
  )

  const durumGuncelle = useCallback(
    (id: string, durum: IsEmriDurum, not?: string) => {
      const next = isEmirleri.map((ie) => {
        if (ie.id !== id) return ie
        return {
          ...ie,
          durum,
          notlar: not !== undefined ? not : ie.notlar,
          guncellemeZamani: new Date().toISOString(),
        }
      })
      persist(next)
    },
    [isEmirleri, persist],
  )

  const demoSifirla = useCallback(() => {
    resetDemoData()
    setKullanicilar(loadKullanicilar())
    setIsEmirleri(loadIsEmirleri())
  }, [])

  const value = useMemo(
    () => ({
      kullanicilar,
      isEmirleri,
      oturum,
      girisYap,
      cikisYap,
      isEmriEkle,
      isEmriGuncelle,
      durumGuncelle,
      demoSifirla,
      kullaniciBul,
    }),
    [
      kullanicilar,
      isEmirleri,
      oturum,
      girisYap,
      cikisYap,
      isEmriEkle,
      isEmriGuncelle,
      durumGuncelle,
      demoSifirla,
      kullaniciBul,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp AppProvider içinde kullanılmalı')
  return ctx
}
