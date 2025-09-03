import { notFound } from 'next/navigation'
import React from 'react'


const page = async ({ params }: { params: Promise<{ id: string[] }> }) => {
 

    const { id } = await params
    console.log(id)
    if (id.length === 2) {
        if (id[1] == 'hello') {
            notFound()
        }
    }

    return (
        <div>page</div>
    )
}
export default page