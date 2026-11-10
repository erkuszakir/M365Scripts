import type { NextFunction, Request, Response } from 'express'
import { getIdentity } from '../cursor/identity.js'
import { isLocalDev } from './secret.js'

/** Yayınlanan private/team uygulamada Cursor oturumu zorunlu. */
export async function requireCursorViewer(req: Request, res: Response, next: NextFunction) {
  try {
    const identity = await getIdentity(req)
    if (!identity.verified) {
      if (isLocalDev() && identity.reason === 'missing_header') {
        return next()
      }
      return res.status(401).json({
        hata: 'Cursor oturumu gerekli.',
        reason: identity.reason,
      })
    }
    next()
  } catch {
    return res.status(401).json({ hata: 'Cursor oturumu doğrulanamadı.' })
  }
}
