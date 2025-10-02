import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Decent Detailers - Premium Mobile Car Detailing',
  description: 'Professional mobile car detailing services. We bring the detailing to you with premium quality and convenience.',
}

// 👇 Yeh alag export hona chahiye
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/image.png" />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}
