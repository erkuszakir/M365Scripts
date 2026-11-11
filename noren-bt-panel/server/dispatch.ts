import { buildExchangeMailflowReport } from './reports/exchange'
import { getGraphConfigStatus } from './graph'

function json(data: unknown, init: ResponseInit = {}) {
  const headers = new Headers(init.headers)
  if (!headers.has('content-type')) headers.set('content-type', 'application/json')
  if (!headers.has('cache-control')) headers.set('cache-control', 'private, no-store')
  return new Response(JSON.stringify(data), { ...init, headers })
}

export async function dispatch(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/+$/, '') || '/'
  const method = request.method.toUpperCase()

  try {
    if (path === '/api/health' && method === 'GET') {
      const graph = getGraphConfigStatus()
      return json({
        ok: true,
        service: 'noren-bt-panel',
        graph,
        tenantHint: 'norenlojistik.com',
      })
    }

    if (path === '/api/connection' && method === 'GET') {
      const graph = getGraphConfigStatus()
      if (!graph.configured) {
        return json({
          connected: false,
          missing: graph.missing,
          message: 'Entra uygulama secret’ları eksik.',
        })
      }
      try {
        const report = await buildExchangeMailflowReport()
        return json({
          connected: report.source === 'live',
          graph,
          tenant: report.tenant,
          message:
            report.source === 'live'
              ? 'Tenant’a salt-okunur bağlanıldı.'
              : 'Secret var ancak Graph çağrısı başarısız/kısmi.',
          findings: report.findings,
        })
      } catch (err) {
        return json(
          {
            connected: false,
            graph,
            message: err instanceof Error ? err.message : 'Bağlantı başarısız.',
          },
          { status: 502 },
        )
      }
    }

    if (path === '/api/reports/exchange-mailflow' && method === 'GET') {
      const report = await buildExchangeMailflowReport()
      const status = report.source === 'live' ? 200 : 503
      return json({ report }, { status })
    }

    return json({ hata: 'API bulunamadı.' }, { status: 404 })
  } catch (err) {
    console.error(err)
    return json(
      { hata: err instanceof Error ? err.message : 'Sunucu hatası.' },
      { status: 500 },
    )
  }
}
