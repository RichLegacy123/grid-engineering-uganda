import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grid Engineering Uganda Ltd | ERA Class X MEP Contractor & UEDCL Powerlines',
  description: 'ERA Class X licensed MEP consultancy & electrical contracting in Uganda. UEDCL registered for 33kV/11kV/LV lines, transformers, solar, CCTV. Kampala + nationwide.',
  keywords: ['MEP contractor Uganda', 'ERA Class X contractor', 'UEDCL powerline contractor', 'electrical contractor Kampala', 'transformer installation Uganda'],
  metadataBase: new URL('https://www.gridengineerings.com'),
  openGraph: {
    title: 'Grid Engineering Uganda Ltd',
    description: 'ERA Class X MEP & Electrical Contracting in Uganda',
    url: 'https://www.gridengineerings.com',
    siteName: 'Grid Engineering Uganda Ltd',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grid Engineering Uganda Ltd - MEP Contractor',
      },
    ],
    locale: 'en_UG',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Grid Engineering Uganda Ltd",
  "url": "https://www.gridengineerings.com",
  "telephone": "+256779426183",
  "email": "gridengineerings@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 12 Kampala Road, Cham Tow",
    "addressLocality": "Kampala",
    "postalCode": "3882",
    "addressCountry": "UG"
  },
  "license": "ERA Class X",
  "areaServed": "Uganda",
  "sameAs": [
    "https://wa.me/256779426183"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
