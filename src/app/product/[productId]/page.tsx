import React from 'react'

type Props = {}

const Product = async ({params}: { params: Promise<{ productId: string }> }) => {

    const productId = await (await params).productId
    console.log(productId)


    return (
        <div>{productId}</div>
    )
}

export default Product