import '../styles/globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import ReduxProvider from './ReduxProvider';

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
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster
          position='bottom-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 4000,
            },

            error: {
              duration: 5000,
            },

            style: {
              border: '2px solid var(--color-violet-600)',
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 34px',
              backgroundColor: 'var(--color-grey-900)',
              color: 'var(--color-grey-100)',
            },
          }}
        />
      </body>
    </html>
  );
}
