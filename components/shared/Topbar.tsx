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
          <h1 className='text-secondary text-xl font-bold'>Sakura</h1>
        </Link>

        {/* Search input */}
        <Input placeholder='Search anime...' className='w-[35%] shadow-sm hover:shadow-md bg-zinc-500 bg-opacity-20 py-5 border-none placeholder-zinc-400 hover:bg-zinc-500 hover:bg-opacity-35 text-white placeholder:font-semibold'/>

        {/* Buttons */}
        <Link href='/login'>
          <Button className='bg-secondary hover:ring-[2px] hover:ring-secondary text-gray-900 hover:text-white '>Login</Button>
        </Link>
      </div>


    </div>
  )
}

export default Topbar