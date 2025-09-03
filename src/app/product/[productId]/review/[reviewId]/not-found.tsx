"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  const pathName = usePathname()
  console.log(pathName)

  let product = pathName.split("/")[2]
  let review = pathName.split("/")[4] 
  console.log(review)
  

  return (
    <div  >
      <h1 className='text-4xl'>custom NotFound for review </h1>
      <p>
        product {product} - review {review} not Found
      </p>

    </div>
  )
}

export default NotFound