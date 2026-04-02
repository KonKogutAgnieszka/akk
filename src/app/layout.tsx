import React from 'react';
import '@/app/globals.css';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans text-primary">
      <body className="bg-background px-6 py-5 md:px-12 lg:px-56">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
