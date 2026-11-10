import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { db } from './db.js'
import { resolveJwtSecret } from './secret.js'
import { mapKullanici, type PublicKullanici, type Role, type KullaniciRow } from './types.js'

const JWT_SECRET = resolveJwtSecret()
export const SESSION_COOKIE = 'lojistik_oturum'

export interface AuthPayload {
  sub: string
  rol: Role
}

declare global {
  namespace Express {
    interface Request {
      user?: PublicKullanici
    }
  }
}

export function signToken(user: PublicKullanici) {
  return jwt.sign({ sub: user.id, rol: user.rol } satisfies AuthPayload, JWT_SECRET, {
    expiresIn: '7d',
  })
}

function cookieSecure() {
  return Boolean(process.env.CURSOR_APP_ID) || process.env.NODE_ENV === 'production'
}

export function setSessionCookie(res: Response, token: string) {
  const parts = [
    `${SESSION_COOKIE}=${encodeURIComponent(token)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    `Max-Age=${7 * 24 * 60 * 60}`,
  ]
  if (cookieSecure()) parts.push('Secure')
  res.append('Set-Cookie', parts.join('; '))
}

export function clearSessionCookie(res: Response) {
  const parts = [
    `${SESSION_COOKIE}=`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=0',
  ]
  if (cookieSecure()) parts.push('Secure')
  res.append('Set-Cookie', parts.join('; '))
}

function readCookie(req: Request, name: string): string | undefined {
  const raw = req.headers.cookie
  if (!raw) return undefined
  for (const part of raw.split(';')) {
    const [key, ...rest] = part.trim().split('=')
    if (key === name) return decodeURIComponent(rest.join('='))
  }
  return undefined
}

function extractToken(req: Request): string | null {
  const fromCookie = readCookie(req, SESSION_COOKIE)
  if (fromCookie) return fromCookie
  const header = req.headers.authorization
  if (header?.startsWith('Bearer ')) return header.slice(7)
  return null
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = extractToken(req)
  if (!token) return res.status(401).json({ hata: 'Oturum gerekli.' })
  try {
    const payload = jwt.verify(token, JWT_SECRET) as AuthPayload
    const row = db
      .prepare('SELECT * FROM kullanicilar WHERE id = ? AND aktif = 1')
      .get(payload.sub) as KullaniciRow | undefined
    if (!row) return res.status(401).json({ hata: 'Oturum geçersiz.' })
    req.user = mapKullanici(row)
    next()
  } catch {
    return res.status(401).json({ hata: 'Oturum geçersiz.' })
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.rol !== 'admin') {
    return res.status(403).json({ hata: 'Bu işlem için admin yetkisi gerekli.' })
  }
  next()
}
