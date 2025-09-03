"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {}

const Nested = (props: Props) => {

    const searchParams = useSearchParams()
    console.log(searchParams.get('name'))


  return (
    <div>Nested</div>
  )
}

export default Nested