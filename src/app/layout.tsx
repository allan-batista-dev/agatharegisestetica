import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], });


export const metadata = {
  title: 'Agatha Regis Estética',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
