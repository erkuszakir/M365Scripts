import type { IsEmri, IsEmriDurum, Kullanici, Role } from '../types'

/** Bellekte tutulan oturum jetonu (cookie çalışmazsa Authorization yedek). */
let memoryToken: string | null = null

export function setSessionToken(token: string | null) {
  memoryToken = token
}

export function clearLegacyToken() {
  memoryToken = null
  try {
    localStorage.removeItem('lojistik.token')
    sessionStorage.removeItem('lojistik.token')
  } catch {
    /* ignore */
  }
}

export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers)
  if (!headers.has('Content-Type') && init.body) {
    headers.set('Content-Type', 'application/json')
  }
  if (memoryToken && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${memoryToken}`)
  }

  const res = await fetch(`/api${path}`, {
    ...init,
    headers,
    credentials: 'same-origin',
  })

  const text = await res.text()
  let data = {} as { hata?: string; token?: string } & T
  try {
    data = text ? (JSON.parse(text) as { hata?: string; token?: string } & T) : ({} as typeof data)
  } catch {
    throw new ApiError(
      res.status || 500,
      res.ok ? 'Geçersiz yanıt.' : `API yanıt vermedi (${res.status || 'ağ'}).`,
    )
  }

  if (!res.ok) {
    throw new ApiError(res.status, data.hata || 'İstek başarısız.')
  }
  if (typeof data.token === 'string' && data.token) {
    memoryToken = data.token
  }
  return data
}

export const api = {
  setupStatus() {
    return request<{
      sifresizIlkGiris: boolean
      cursorEmail: string | null
      sahipEmailTanimli?: boolean
    }>('/auth/setup-status')
  },
  bootstrap() {
    return request<{ kullanici: Kullanici; sifresiz: boolean; token?: string }>('/auth/bootstrap', {
      method: 'POST',
    })
  },
  login(kullaniciAdi: string, sifre: string) {
    return request<{ kullanici: Kullanici; token?: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ kullaniciAdi, sifre }),
    })
  },
  logout() {
    memoryToken = null
    return request<{ ok: boolean }>('/auth/logout', { method: 'POST' })
  },
  me() {
    return request<{ kullanici: Kullanici }>('/auth/me')
  },
  kullanicilar() {
    return request<{ kullanicilar: Kullanici[] }>('/kullanicilar')
  },
  kullaniciEkle(body: {
    kullaniciAdi: string
    adSoyad: string
    email: string
    sifre: string
    rol: Role
  }) {
    return request<{ kullanici: Kullanici }>('/kullanicilar', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  },
  kullaniciGuncelle(
    id: string,
    body: Partial<{ adSoyad: string; email: string; rol: Role; aktif: boolean; sifre: string }>,
  ) {
    return request<{ kullanici: Kullanici }>(`/kullanicilar/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    })
  },
  kullaniciSil(id: string) {
    return request<{ ok: boolean }>(`/kullanicilar/${id}`, { method: 'DELETE' })
  },
  isEmirleri() {
    return request<{ isEmirleri: IsEmri[] }>('/is-emirleri')
  },
  isEmriEkle(body: {
    baslik: string
    aciklama: string
    tip: IsEmri['tip']
    lokasyon: string
    tarih: string
    atananId: string | null
    arac: string
  }) {
    return request<{ isEmri: IsEmri }>('/is-emirleri', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  },
  isEmriGuncelle(
    id: string,
    body: Partial<{
      durum: IsEmriDurum
      atananId: string | null
      notlar: string
      arac: string
      baslik: string
      aciklama: string
      lokasyon: string
      tarih: string
      tip: IsEmri['tip']
    }>,
  ) {
    return request<{ isEmri: IsEmri }>(`/is-emirleri/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    })
  },
}
