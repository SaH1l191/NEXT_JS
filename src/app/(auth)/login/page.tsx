
import Link from 'next/link'
import React from 'react'

type Props = {}

const Login = (props: Props) => {



  return (
    <div>Login


      <p className='p-4'> 
        <Link href={`/nested?id=123&name=abc`}>Signup</Link>
      </p>

        <p className='p-4'> 
        <Link href={`/about`}>about</Link>
      </p>

    </div>
  )
}

export default Login