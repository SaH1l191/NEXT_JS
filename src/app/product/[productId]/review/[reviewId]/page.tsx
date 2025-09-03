 
import { notFound } from 'next/navigation' 
import React from 'react'
 
const Review = async ({ params }: { params: Promise<{ productId: string, reviewId: string }> }) => {

  const { productId, reviewId } = (await params)
  if (reviewId == "1") {
    notFound()
  }

 

  return (
    <div>{`${productId}-${reviewId}`}</div>
  )
}

export default Review