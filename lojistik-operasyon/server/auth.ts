import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { db } from './db.js'
import { resolveJwtSecret } from './secret.js'
import { mapKullanici, type PublicKullanici, type Role, type KullaniciRow } from './types.js'

const JWT_SECRET = resolveJwtSecret()

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

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ hata: 'Oturum gerekli.' })
  }
  try {
    const payload = jwt.verify(header.slice(7), JWT_SECRET) as AuthPayload
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
