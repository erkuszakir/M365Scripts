/**
 * Yerel geliştirme: Vite proxy → bu süreç.
 * Yayında Cursor Apps Express çalıştırmaz; api/[...path].ts serverless çalışır.
 */
import { createServer } from 'node:http'
import { dispatch } from './dispatch.js'

const port = Number(process.env.PORT || 3001)

createServer(async (req, res) => {
  try {
    const host = req.headers.host || `127.0.0.1:${port}`
    const url = `http://${host}${req.url || '/'}`
    const headers = new Headers()
    for (const [k, v] of Object.entries(req.headers)) {
      if (v == null) continue
      if (Array.isArray(v)) v.forEach((item) => headers.append(k, item))
      else headers.set(k, v)
    }
    const chunks: Buffer[] = []
    for await (const chunk of req) chunks.push(Buffer.from(chunk))
    const body = chunks.length ? Buffer.concat(chunks) : undefined
    const request = new Request(url, {
      method: req.method,
      headers,
      body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
    })
    const response = await dispatch(request)
    res.statusCode = response.status
    response.headers.forEach((value, key) => {
      res.appendHeader(key, value)
    })
    const buf = Buffer.from(await response.arrayBuffer())
    res.end(buf)
  } catch (err) {
    console.error(err)
    res.statusCode = 500
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ hata: 'Sunucu hatası.' }))
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Lojistik local API http://127.0.0.1:${port}`)
})
