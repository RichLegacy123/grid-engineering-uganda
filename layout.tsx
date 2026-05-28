import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Grid Engineering Uganda Ltd | MEP Consultancy & UEDCL Contractor',
  description: 'Leading MEP consultancy company in Uganda offering mechanical, electrical & plumbing solutions. Registered UEDCL electrical contractor serving Kampala and all of Uganda.',
  keywords: 'MEP consultancy Uganda, UEDCL contractor, electrical contractor Kampala, mechanical engineering Uganda, plumbing systems design, electrical installations Uganda',
  generator: 'v0.app',
  openGraph: {
    title: 'Grid Engineering Uganda Ltd | MEP Consultancy & UEDCL Contractor',
    description: 'Leading MEP consultancy company in Uganda offering mechanical, electrical & plumbing solutions for commercial, industrial, and residential projects.',
    type: 'website',
    locale: 'en_UG',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
