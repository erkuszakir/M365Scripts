export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`/api${path}`, { credentials: 'same-origin' })
  const text = await res.text()
  let data: T & { hata?: string; message?: string }
  try {
    data = text ? (JSON.parse(text) as T & { hata?: string; message?: string }) : ({} as typeof data)
  } catch {
    throw new ApiError(res.status || 500, `API yanıt vermedi (${res.status}).`)
  }
  if (!res.ok) {
    throw new ApiError(res.status, data.hata || data.message || 'İstek başarısız.')
  }
  return data
}

export type ConnectionState = {
  connected: boolean
  missing?: string[]
  message?: string
  tenant?: { displayName?: string; verifiedDomains?: string[] }
  findings?: string[]
  graph?: { configured: boolean; missing?: string[]; tenantId?: string; clientId?: string }
}

export type LiveReport = {
  source: 'live' | 'unavailable'
  generatedAt: string
  periodLabel: string
  summary: string
  metrics: { label: string; value: string; tone?: 'ok' | 'warn' | 'danger' }[]
  findings: string[]
  nextActions: string[]
  tenant?: { displayName?: string; verifiedDomains?: string[] }
  rawNote?: string
}

export const api = {
  health() {
    return request<{
      ok: boolean
      graph: { configured: boolean; missing?: string[] }
    }>('/health')
  },
  connection() {
    return request<ConnectionState>('/connection')
  },
  exchangeMailflow() {
    return request<{ report: LiveReport }>('/reports/exchange-mailflow')
  },
}
