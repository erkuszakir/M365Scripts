import cors from 'cors'
import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { requireCursorViewer } from './cursorGate.js'
import { initDb } from './db.js'
import { router } from './routes.js'

initDb()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')
const app = express()
const port = Number(process.env.PORT || 3001)
const hosted = Boolean(process.env.CURSOR_APP_ID) || process.env.NODE_ENV === 'production'

const corsOrigin = process.env.CORS_ORIGIN?.trim()
app.use(
  cors({
    origin: corsOrigin
      ? corsOrigin.split(',').map((o) => o.trim()).filter(Boolean)
      : false,
    credentials: true,
  }),
)
app.use(express.json({ limit: '1mb' }))

// Tüm API (health dahil) Cursor kimlik kapısının arkasında
app.use('/api', requireCursorViewer, router)

// Üretim: Vite build çıktısını aynı süreçten servis et
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir, { index: false, fallthrough: true }))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
}

const host = hosted ? '0.0.0.0' : '127.0.0.1'
app.listen(port, host, () => {
  console.log(`Lojistik API http://${host}:${port}`)
})
