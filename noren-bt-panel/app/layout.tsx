import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'NOREN BT Yönetim · norenlojistik.com',
  description: 'norenlojistik.com Microsoft 365 süreç takibi ve raporlama (salt-okunur).',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
