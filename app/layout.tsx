import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { auth } from '@/auth';

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
  const session = await auth();
  console.log('🚀 ~ file: layout.tsx:20 ~ session:', session);
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-[100vh]`}>{children}</body>
    </html>
  );
}
