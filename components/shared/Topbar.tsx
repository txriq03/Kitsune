import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Poppins } from 'next/font/google'

const Topbar = () => {
  return (
    <div className='w-full bg-primary justify-between'>
      <div className=' flexBetween max-container padding-container relative z-30 py-3'>

        {/* Logo */}
        <Link href="/">
          <h1 className='text-secondary text-xl'>Sakura</h1>
        </Link>

        {/* Search input */}
        <Input placeholder='Search anime...' className='w-[35%] bg-zinc-500 bg-opacity-20 py-5 border-none placeholder-zinc-400 hover:bg-zinc-500 hover:bg-opacity-35 text-white active:ring-none active:border-none active:outline-none focus:outline-none focus:border-none focus:ring-none'/>

        {/* Buttons */}
        <Button className='bg-secondary'>Login</Button>
      </div>


    </div>
  )
}

export default Topbar