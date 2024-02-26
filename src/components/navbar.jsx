import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-[100vw] h-[10dvh] bg-primary font-lato text-white shadow-custom fixed z-[50]'>
      <div className='container h-full mx-auto px-[10%] grid grid-cols-3 items-center'>
        <div className='font-bold text-[22px]'>
          Beyond Destination
        </div>
        <div className='flex gap-6 justify-center'>
          <p>Our Packages</p>
          <p>Destinations</p>
          <p>Tour Category</p>
        </div>
        <div className='flex justify-end'>
          <Button
            variant='filled'
            className='bg-white rounded-full text-primary px-4 py-2 font-semibold'
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  )
}
