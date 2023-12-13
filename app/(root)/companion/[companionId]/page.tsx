import prisma from '@/prisma/client'
import React from 'react'


interface CompanionIdPage{
    params : {
        companionId : string
    }
}

const CompanionIdPage = async({params}: CompanionIdPage) => {

    const companion = await prisma.companion.findUnique({
        where :{ id : params.companionId}
    })

    const category = await prisma.category.findMany()

    return (
        <div>CompanionIdPage</div>
    )
}

export default CompanionIdPage