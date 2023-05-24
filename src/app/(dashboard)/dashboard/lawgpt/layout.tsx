'use client'
import { api } from '@/utils/api'



export const metadata = {
  title: 'LAW GPT',
  description: 'AI assistant for all legal professionals',
}

const app =  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

export default api.withTRPC(app)