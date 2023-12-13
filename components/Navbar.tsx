'use client'
import React from 'react'
import { ModeToggle } from './theme/mode-toggle'
import { Menu, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { indexConfig } from '@/config'
import { usePathname, useRouter } from 'next/navigation'
import Sidebar from './Sidebar'


const font = Poppins({
    weight: "600",
    subsets: ['latin']
})

const Navbar = () => {

    const router = useRouter()
    const pathname = usePathname()

    const onNavigation = (url: string, pro: boolean) => {

        return router.push(url)
    }

    return (
        <section className='fixed w-full  border-b border-primary  bg-secondary'>
            <div className='mx-auto max-w-screen-2xl  flex justify-between items-center px-5 p-4'>
                <div className='flex items-center'>
                    <div className="block md:hidden">
                        <Sheet>
                            <SheetTrigger><Menu /></SheetTrigger>
                            <SheetContent side='left'>
                                <SheetHeader>
                                    <SheetTitle className={cn('flex justify-center text-2xl font-bold text-primary', font.className)}>
                                        companion.ai
                                    </SheetTitle>
                                    <SheetDescription className='bg-theme'>
                                       <Sidebar />
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                    </div>
                    <Link href='/'>
                        <h1 className={cn('hidden md:block text-xl md:text-3xl font-bold text-primary', font.className)}>
                            companion.ai
                        </h1>
                    </Link>
                </div>
                <div className='flex items-center space-x-3'>
                    <div className='hidden md:flex items-center space-x-3'>
                        <Button variant='premium' className='text-white'>
                            Upgrade
                            <Sparkles className='w-4 h-4 ml-2' />
                        </Button>
                    </div>
                    <ModeToggle />
                    <UserButton />
                </div>
            </div>
        </section>
    )
}

export default Navbar