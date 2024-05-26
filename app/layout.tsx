import type { Metadata } from 'next';
import './globals.css';

import { Nunito } from 'next/font/google';

const font = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Doggycareer',
    default: 'Doggycareer | Job Search',
  },
  description: 'Find your dream job with Doggycareer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
