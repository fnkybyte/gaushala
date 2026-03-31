import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-headline"
});

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: 'Dharma Sanctuary | Serving the Sacred Cow',
  description: 'Join us in our sacred mission to provide shelter, medical care, and lifelong love to abandoned and rescued cows. Gau Seva - गौ सेवा ही सच्ची सेवा है',
  generator: 'v0.app',
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
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${manrope.variable} font-body antialiased bg-surface text-on-surface-variant selection:bg-primary-container/30`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
