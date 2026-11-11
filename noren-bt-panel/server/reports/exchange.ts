import { createGraphClient, getGraphConfigStatus } from '../graph'

export interface ExchangeMailflowReport {
  source: 'live' | 'unavailable'
  generatedAt: string
  periodLabel: string
  summary: string
  metrics: { label: string; value: string; tone?: 'ok' | 'warn' | 'danger' }[]
  findings: string[]
  nextActions: string[]
  tenant?: {
    displayName?: string
    verifiedDomains?: string[]
  }
  rawNote?: string
}

type Org = {
  value?: Array<{
    displayName?: string
    verifiedDomains?: Array<{ name?: string; isDefault?: boolean }>
  }>
}

type ServiceHealth = {
  value?: Array<{
    service?: string
    status?: string
  }>
}

/**
 * Salt-okunur Exchange / tenant sağlık özeti.
 * İzinler: Organization.Read.All, ServiceHealth.Read.All (Reports.Read.All sonra eklenebilir)
 */
export async function buildExchangeMailflowReport(): Promise<ExchangeMailflowReport> {
  const generatedAt = new Date().toISOString()
  const cfg = getGraphConfigStatus()
  if (!cfg.configured) {
    return {
      source: 'unavailable',
      generatedAt,
      periodLabel: 'Bağlantı yok',
      summary: `Canlı rapor için secret’lar gerekli: ${cfg.missing.join(', ')}.`,
      metrics: [],
      findings: ['Tenant henüz bağlanmadı.'],
      nextActions: ['Entra uygulama kaydı + admin consent + AZURE_* secret’ları'],
    }
  }

  const client = createGraphClient()
  const findings: string[] = []
  const nextActions: string[] = []
  const metrics: ExchangeMailflowReport['metrics'] = []

  let displayName: string | undefined
  let verifiedDomains: string[] = []

  try {
    const org = (await client.api('/organization').select('displayName,verifiedDomains').get()) as Org
    const row = org.value?.[0]
    displayName = row?.displayName
    verifiedDomains = (row?.verifiedDomains || []).map((d) => d.name || '').filter(Boolean)
    metrics.push({
      label: 'Doğrulanmış domain',
      value: String(verifiedDomains.length),
      tone: verifiedDomains.includes('norenlojistik.com') ? 'ok' : 'warn',
    })
    if (!verifiedDomains.includes('norenlojistik.com')) {
      findings.push('norenlojistik.com verifiedDomains listesinde görünmedi — tenant ID’yi kontrol edin.')
      nextActions.push('AZURE_TENANT_ID’nin norenlojistik.com dizinine ait olduğunu doğrulayın.')
    } else {
      findings.push('norenlojistik.com doğrulanmış domain olarak görüldü.')
    }
  } catch (err) {
    findings.push(
      `Organization okunamadı: ${err instanceof Error ? err.message : 'bilinmeyen hata'} (Organization.Read.All gerekli).`,
    )
    nextActions.push('Entra’da Organization.Read.All uygulama izni + admin consent verin.')
  }

  try {
    const health = (await client.api('/admin/serviceAnnouncement/healthOverviews').get()) as ServiceHealth
    const exchange = (health.value || []).find((h) =>
      (h.service || '').toLowerCase().includes('exchange'),
    )
    const status = exchange?.status || 'bilinmiyor'
    const tone = status.toLowerCase() === 'serviceoperational' ? 'ok' : 'warn'
    metrics.push({ label: 'Exchange servis sağlığı', value: status, tone })
    if (tone !== 'ok') {
      findings.push(`Exchange servis durumu: ${status}`)
      nextActions.push('Microsoft 365 service health panelinden Exchange olaylarını kontrol edin.')
    } else {
      findings.push('Exchange Online servis durumu: ServiceOperational.')
    }
  } catch (err) {
    findings.push(
      `Service health okunamadı: ${err instanceof Error ? err.message : 'bilinmeyen hata'} (ServiceHealth.Read.All).`,
    )
    nextActions.push('Entra’da ServiceHealth.Read.All izni + admin consent ekleyin.')
  }

  try {
    // App-only: ConsistencyLevel eventual + $count
    const count = await client
      .api('/users/$count')
      .header('ConsistencyLevel', 'eventual')
      .get()
    metrics.push({
      label: 'Kullanıcı sayısı',
      value: String(count),
      tone: 'ok',
    })
  } catch (err) {
    findings.push(
      `Kullanıcı sayısı alınamadı: ${err instanceof Error ? err.message : 'bilinmeyen hata'} (User.Read.All).`,
    )
    nextActions.push('İsteğe bağlı: User.Read.All uygulama izni ekleyin.')
  }

  const summary =
    displayName
      ? `${displayName} tenant’ına salt-okunur bağlanıldı. Exchange servis sağlığı ve domain doğrulaması alındı.`
      : 'Graph’a bağlanıldı ancak organization özeti kısmi.'

  return {
    source: 'live',
    generatedAt,
    periodLabel: new Intl.DateTimeFormat('tr-TR', {
      timeZone: 'Europe/Istanbul',
      dateStyle: 'medium',
    }).format(new Date()),
    summary,
    metrics,
    findings: findings.length ? findings : ['Anormal bulgu yok (temel kontroller).'],
    nextActions: nextActions.length
      ? nextActions
      : ['Message trace / Reports.Read.All ile mail akışı detayını bir sonraki adımda ekleyin.'],
    tenant: { displayName, verifiedDomains },
    rawNote: 'Message Trace Graph app-only ile sınırlıdır; sonraki adımda Reports veya EXO PowerShell eklenecek.',
  }
}
