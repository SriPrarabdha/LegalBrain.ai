'use client'
import { api } from '@/utils/api'


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