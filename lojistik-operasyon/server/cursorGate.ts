import type { NextFunction, Request, Response } from 'express'
import { getIdentity } from '../cursor/identity.js'

/**
 * Cursor oturumu zorunlu.
 * Yerelde CURSOR_APP_ID yokken getIdentity simüle edilmiş görüntüleyici döner;
 * ALLOW_LOCAL_DEV ile kimlik kapısı atlanmaz.
 */
export async function requireCursorViewer(req: Request, res: Response, next: NextFunction) {
  try {
    const identity = await getIdentity(req)
    if (!identity.verified) {
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
