import React from "react";
import "@/app/globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans text-primary">
      <body className="bg-gradient px-48 py-16">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
