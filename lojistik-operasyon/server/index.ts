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

// API önce — statik dosya / SPA asla /api’yi yutmasın
app.use('/api', requireCursorViewer, router)

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir, { index: false, fallthrough: true }))
  app.get(/^(?!\/api(?:\/|$)).*/, (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
} else {
  console.warn('[uyarı] dist/ yok — önce npm run build çalıştırın.')
}

// Hosting her zaman PORT verir; 0.0.0.0 dinle (127.0.0.1 404’e yol açabilir)
app.listen(port, '0.0.0.0', () => {
  console.log(`Lojistik http://0.0.0.0:${port}`)
})
