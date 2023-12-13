import {ClerkProvider} from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme/theme-provider"
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { fontSans, indexConfig } from "@/config";


export const metadata: Metadata = {
  title: {
    default: indexConfig.name,
    template: `%s - ${indexConfig.name}`,
  },
  description: indexConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full' suppressHydrationWarning>
      <body className={cn('relative h-full font-sans antialiased', fontSans.variable)}>
        <ClerkProvider>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className='relative flex flex-col min-h-screen'>
              <div className='hidden md:flex mt-16 w-20 flex-col fixed inset-y-0'>
                <Sidebar />
              </div>
              <Navbar />
              <div className="flex-grow flex-1">{children}</div>
            </main>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
