import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Agnieszka Koń-Kogut',
    template: '%s | Agnieszka Koń-Kogut',
  },
  description: 'Frontend-focused Fullstack Developer',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="font-sans text-primary">
      <body className="bg-background min-h-screen py-[10px]">
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-5xl mx-auto px-6 min-h-[calc(100vh-20px)] flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
