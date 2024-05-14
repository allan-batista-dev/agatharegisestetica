import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Raleway } from 'next/font/google'

const inter = Raleway({ subsets: ['latin'] })


export const metadata = {
  title: 'Agatha Regis Estética',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
