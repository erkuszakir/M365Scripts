import { SEED_IS_EMIRLERI, SEED_KULLANICILAR } from '../data/seed'
import type { IsEmri, Kullanici } from '../types'

const KEYS = {
  kullanicilar: 'lojistik.kullanicilar',
  isEmirleri: 'lojistik.isEmirleri',
  oturum: 'lojistik.oturum',
} as const

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

function writeJson<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function loadKullanicilar(): Kullanici[] {
  const list = readJson<Kullanici[] | null>(KEYS.kullanicilar, null)
  if (!list) {
    writeJson(KEYS.kullanicilar, SEED_KULLANICILAR)
    return SEED_KULLANICILAR
  }
  return list
}

export function loadIsEmirleri(): IsEmri[] {
  const list = readJson<IsEmri[] | null>(KEYS.isEmirleri, null)
  if (!list) {
    writeJson(KEYS.isEmirleri, SEED_IS_EMIRLERI)
    return SEED_IS_EMIRLERI
  }
  return list
}

export function saveIsEmirleri(list: IsEmri[]) {
  writeJson(KEYS.isEmirleri, list)
}

export function loadOturumId(): string | null {
  return localStorage.getItem(KEYS.oturum)
}

export function saveOturumId(id: string | null) {
  if (id) localStorage.setItem(KEYS.oturum, id)
  else localStorage.removeItem(KEYS.oturum)
}

export function resetDemoData() {
  writeJson(KEYS.kullanicilar, SEED_KULLANICILAR)
  writeJson(KEYS.isEmirleri, SEED_IS_EMIRLERI)
}
