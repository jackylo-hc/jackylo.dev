import './globals.css';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inconsolata = Inconsolata({ subsets: ['latin'], display: 'auto' });

export const metadata: Metadata = {
  title: 'Jacky Lo | Front End Developer',
  description: 'Jacky Lo is a 7+ years experience Front End Developer currently located in Hong Kong',
  keywords: [
    'jackylo.dev',
    'jackylo',
    'Jacky Lo',
    'jacky lo',
    'jackylo.hc@gmail.com',
    'hong kong',
    'front end developer',
    'front end engineer',
  ],
  authors: {
    name: 'Jacky Lo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inconsolata.className, 'text-themeGray')}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
