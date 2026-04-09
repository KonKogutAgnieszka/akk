import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import '@/app/globals.css';
import Header from '@/components/Header';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="font-sans text-primary">
      <body className="bg-background py-5">
        <NextIntlClientProvider messages={messages}>
          <div className="max-w-5xl mx-auto px-6">
            <Header />
            <main>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
