// app/layout.tsx (or pages/_app.tsx if you're using the pages directory)
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'My Personal Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>
          {/* Render the particle background */}
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
