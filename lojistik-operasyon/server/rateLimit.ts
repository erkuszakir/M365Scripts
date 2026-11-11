import type { NextFunction, Request, Response } from 'express'

interface Bucket {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

/** Basit bellek içi hız sınırı (ör. giriş denemeleri). */
export function rateLimit(options: {
  windowMs: number
  max: number
  key?: (req: Request) => string
}) {
  const keyFn = options.key ?? ((req: Request) => req.ip || req.socket.remoteAddress || 'unknown')

  return (req: Request, res: Response, next: NextFunction) => {
    const key = keyFn(req)
    const now = Date.now()
    let bucket = buckets.get(key)
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + options.windowMs }
      buckets.set(key, bucket)
    }
    bucket.count += 1
    if (bucket.count > options.max) {
      const retrySec = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000))
      res.setHeader('Retry-After', String(retrySec))
      return res.status(429).json({ hata: 'Çok fazla deneme. Lütfen daha sonra tekrar deneyin.' })
    }
    next()
  }
}
