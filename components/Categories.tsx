'use client'
import { Category } from '@prisma/client'
import React from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import qs from 'query-string'

interface CategoriesProps {
    data: Category[]
}

const Categories = ({ data }: CategoriesProps) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const categoryId = searchParams.get("categoryId")

    const onClick =(id: string | undefined) =>{
        const query = {categoryId : id}
        
        const url = qs.stringifyUrl({
            url : window.location.href,
            query,
        }, {skipNull: true})

        router.push(url)
    } 

    return (
        <div className='w-full overflow-x-auto space-x-2 flex p-4'>
            <Button onClick={() => onClick(undefined)} className={cn(`hover:opacity-75`)}>

                Categories
            </Button>
            {data.map((item) => (
                <Button key={item.id} onClick={() => onClick(item.id)}  
                    className={cn(`hover:opacity-75 transition text-theme`, item.id === categoryId ? 'bg-primary text-white': 'bg-secondary' )}>
                    {item.name} 
                </Button>
            ))}
        </div>
    )
}

export default Categories