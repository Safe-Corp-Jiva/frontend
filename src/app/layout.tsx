'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import '@aws-amplify/ui-react/styles.css'

const inter = Inter({ subsets: ['latin'] })

import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import awsconfig from '@/aws-exports'
Amplify.configure(awsconfig)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <Authenticator.Provider>
          {children}
        </Authenticator.Provider>
      </body>
    </html>
  )
}
