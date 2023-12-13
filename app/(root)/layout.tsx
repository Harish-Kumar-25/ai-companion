import Sidebar from '@/components/Sidebar'
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <main className='h-full pt-16 md:pl-20'>
    
        {children}
      </main>
    </div>
  )
}

export default RootLayout