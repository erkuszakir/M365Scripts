import { ClientSecretCredential } from '@azure/identity'
import { Client } from '@microsoft/microsoft-graph-client'

export type GraphConfigStatus =
  | { configured: true; tenantId: string; clientId: string }
  | { configured: false; missing: string[] }

export function getGraphConfigStatus(): GraphConfigStatus {
  const tenantId = process.env.AZURE_TENANT_ID?.trim() || ''
  const clientId = process.env.AZURE_CLIENT_ID?.trim() || ''
  const clientSecret = process.env.AZURE_CLIENT_SECRET?.trim() || ''
  const missing: string[] = []
  if (!tenantId) missing.push('AZURE_TENANT_ID')
  if (!clientId) missing.push('AZURE_CLIENT_ID')
  if (!clientSecret) missing.push('AZURE_CLIENT_SECRET')
  if (missing.length) return { configured: false, missing }
  return { configured: true, tenantId, clientId }
}

export function createGraphClient(): Client {
  const status = getGraphConfigStatus()
  if (!status.configured) {
    throw new Error(
      `Graph yapılandırması eksik: ${status.missing.join(', ')}. Entra uygulama secret’larını ekleyin.`,
    )
  }
  const credential = new ClientSecretCredential(
    status.tenantId,
    status.clientId,
    process.env.AZURE_CLIENT_SECRET!.trim(),
  )
  return Client.init({
    authProvider: async (done) => {
      try {
        const token = await credential.getToken('https://graph.microsoft.com/.default')
        if (!token?.token) throw new Error('Token alınamadı.')
        done(null, token.token)
      } catch (err) {
        done(err as Error, null as unknown as string)
      }
    },
  })
}
