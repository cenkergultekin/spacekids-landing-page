import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Employment Hero - Leap into the future of work',
  description: 'Employment OS - Everything employment, all in one place. Trusted by 200,000+ businesses globally.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
