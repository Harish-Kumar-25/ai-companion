"use client"
import React from 'react'
import { indexConfig } from '@/config'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'



const Sidebar = () => {

    const pathname = usePathname()
    const router = useRouter()

    const onNavigation = (url:string, pro:boolean) => {

        return router.push(url)
    }

    return (

        <div className='space-y-4 flex felx-col h-full bg-secondary'>
            <div className='p-2 mt-2 flex flex-1 justify-center'>
                <div className="space-y-3">
                    {indexConfig.navItems.map((route) => (
                        <div onClick={() => onNavigation(route.href,route.pro)} key={route.href} className={
                            cn("text-muted-foreground text-xs group font-medium flex items-center p-3 w-full hover:text-primary rounded-lg transition",
                                pathname === route.href && " text-primary")
                            }>
                                <div className="flex flex-col items-center gap-y-2 flex-1">
                                    <route.icon className='w-5 h-5'/>
                                    {route.label}
                                </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Sidebar