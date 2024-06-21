import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spot',
  description: 'Generated by create next app',
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* suppressHydrationWarning: Fix hydration warning caused by some chrome extensions, only affects body, not children */}
      <body className={`${inter.className} inset-0`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}