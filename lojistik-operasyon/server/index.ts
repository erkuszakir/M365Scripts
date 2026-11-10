import cors from 'cors'
import express from 'express'
import { initDb } from './db.js'
import { router } from './routes.js'

initDb()

const app = express()
const port = Number(process.env.PORT || 3001)

app.use(cors())
app.use(express.json({ limit: '1mb' }))
app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api', router)

app.listen(port, '127.0.0.1', () => {
  console.log(`Lojistik API http://127.0.0.1:${port}`)
})
