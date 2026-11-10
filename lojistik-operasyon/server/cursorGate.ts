import type { NextFunction, Request, Response } from 'express'
import { getIdentity } from '../cursor/identity.js'

export interface CursorViewer {
  sub: string
  email: string
  kind: 'person' | 'key'
  name: string
}

declare global {
  namespace Express {
    interface Request {
      cursorViewer?: CursorViewer
    }
  }
}

/**
 * Tüm /api isteklerinde doğrulanmış Cursor görüntüleyici zorunlu.
 * Kimlik req.cursorViewer’a yazılır; uygulama hesabı e-posta ile bağlanır.
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

    if (identity.kind !== 'person') {
      return res.status(403).json({
        hata: 'Bu uygulama yalnızca kişisel Cursor oturumu ile kullanılabilir.',
      })
    }

    const email = (identity.email || '').trim().toLowerCase()
    if (!email) {
      return res.status(403).json({
        hata: 'Cursor hesabında e-posta yok; giriş bağlanamaz.',
      })
    }

    req.cursorViewer = {
      sub: identity.sub,
      email,
      kind: 'person',
      name: identity.name || '',
    }
    next()
  } catch {
    return res.status(401).json({ hata: 'Cursor oturumu doğrulanamadı.' })
  }
}
