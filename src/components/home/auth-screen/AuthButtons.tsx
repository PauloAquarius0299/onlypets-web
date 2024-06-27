"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const AuthButtons = () => {
  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col'>    
       <Button className='w-full' variant={"outline"}>
        <Link href='/sign-up'>
        Cadastrar
        </Link>
       </Button>
       <Button className='w-full'>
       <Link href='/sign-in'>
        Logar
        </Link>
       </Button>
    </div>
  )
}

export default AuthButtons