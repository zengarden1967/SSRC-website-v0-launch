import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://stickyscalerc.com'),
  title: 'Custom RC Vinyl Wraps for X-Maxx & Traxxas | Sticky Scale RC',
  description:
    'Premium vinyl wraps for the Traxxas X-Maxx and other RC trucks. Bold, dominant graphics built to stand out. Shop KingCat wraps at Sticky Scale RC.',
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://stickyscalerc.com',
    siteName: 'Sticky Scale RC',
    title: 'Sticky Scale RC | Premium RC Graphics That Dominate',
    description:
      'Custom vinyl wraps for the Traxxas X-Maxx and other RC trucks. Bold, dominant graphics built to stand out.',
    images: [
      {
        url: 'https://stickyscalerc.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sticky Scale RC premium vinyl wraps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom RC Vinyl Wraps for X-Maxx & Traxxas | Sticky Scale RC',
    description:
      'Premium vinyl wraps for the Traxxas X-Maxx and other RC trucks. Bold, dominant graphics built to stand out. Shop KingCat wraps at Sticky Scale RC.',
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

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className="antialiased bg-black">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
