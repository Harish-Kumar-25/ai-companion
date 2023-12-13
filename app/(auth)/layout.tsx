import React from 'react'

interface Props {

  children: React.ReactNode    
}

function Authlayout({children} : Props) {
  return (
    <div className='min-h-screen flex items-center justify-center h-full'>
        {children}
    </div>
  )
}

export default Authlayout