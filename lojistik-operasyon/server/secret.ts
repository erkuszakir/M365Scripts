import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.join(__dirname, 'data')
const secretFile = path.join(dataDir, 'jwt.secret')

const localDev = process.env.ALLOW_LOCAL_DEV === '1'

/**
 * JWT anahtarı kaynak kodda sabit değildir.
 * JWT_SECRET varsa o kullanılır; yoksa gitignore’lı rastgele dosya üretilir
 * (şifresiz ilk kurulum için uygulamanın ayağa kalkabilmesi).
 * REQUIRE_JWT_SECRET=1 ise ortam değişkeni zorunlu.
 */
export function resolveJwtSecret(): string {
  const fromEnv = process.env.JWT_SECRET?.trim()
  if (fromEnv && fromEnv.length >= 32) return fromEnv

  if (process.env.REQUIRE_JWT_SECRET === '1') {
    throw new Error('JWT_SECRET zorunlu (en az 32 karakter).')
  }

  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })

  if (fs.existsSync(secretFile)) {
    const existing = fs.readFileSync(secretFile, 'utf8').trim()
    if (existing.length >= 32) return existing
  }

  const generated = crypto.randomBytes(48).toString('base64url')
  fs.writeFileSync(secretFile, generated, { mode: 0o600 })
  console.warn('[güvenlik] JWT_SECRET yok; rastgele anahtar üretildi (kalıcı dosya, kaynak kodda değil).')
  return generated
}

export function randomPassword(bytes = 9): string {
  return crypto.randomBytes(bytes).toString('base64url')
}

export function validatePassword(sifre: string): string | null {
  if (sifre.length < 8) return 'Şifre en az 8 karakter olmalı.'
  if (!/[A-Za-z]/.test(sifre) || !/[0-9]/.test(sifre)) {
    return 'Şifre en az bir harf ve bir rakam içermelidir.'
  }
  return null
}

export function isLocalDev() {
  return localDev
}
