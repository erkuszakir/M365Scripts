import type { IsEmri, IsEmriDurum, Kullanici, Role } from '../types'

const TOKEN_KEY = 'lojistik.token'

export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string | null) {
  if (token) localStorage.setItem(TOKEN_KEY, token)
  else localStorage.removeItem(TOKEN_KEY)
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
  const token = getToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const res = await fetch(`/api${path}`, { ...init, headers })
  const data = (await res.json().catch(() => ({}))) as { hata?: string } & T
  if (!res.ok) {
    throw new ApiError(res.status, data.hata || 'İstek başarısız.')
  }
  return data
}

export const api = {
  login(kullaniciAdi: string, sifre: string) {
    return request<{ token: string; kullanici: Kullanici }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ kullaniciAdi, sifre }),
    })
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
    body: Partial<{ adSoyad: string; rol: Role; aktif: boolean; sifre: string }>,
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
  demoSifirla() {
    return request<{ ok: boolean }>('/demo/sifirla', { method: 'POST' })
  },
}
