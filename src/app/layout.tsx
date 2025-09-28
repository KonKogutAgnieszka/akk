import React from 'react'
import '@/app/globals.css'
import Header from '@/components/Header'

export default function RootLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-gradient px-20 py-16">
        <Header/>
        <main>{children}</main>
        </body>
        </html>
    )
}