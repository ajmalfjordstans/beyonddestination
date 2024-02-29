'use client'

import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import DropDown from './drop-down'
import Link from 'next/link'

export default function Navbar() {
  const [selected, setSelected] = useState('')

  return (
    <nav className='w-[100vw] h-[10dvh] bg-primary font-lato text-white shadow-custom  z-[50]'>
      <div className='container h-full mx-auto px-[10%] grid grid-cols-3 items-center'>
        <Link
          href="/"
        >
          <div className='font-bold text-[22px]'>
            Beyond Destination
          </div>
        </Link>
        <div className='flex gap-6 justify-center'>
          <div className='flex items-center gap-1'>
            <p className={`hover:cursor-pointer select-none`}
              onClick={() => selected === 'Our Packages' ? setSelected('') : setSelected('Our Packages')}
            >Our Packages</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d={`${selected === 'Our Packages' ? "m19.5 8.25-7.5 7.5-7.5-7.5" : "m4.5 15.75 7.5-7.5 7.5 7.5"}`} />
            </svg>
          </div>
          <div className='flex items-center gap-1'>
            <p className={`hover:cursor-pointer select-none`}
              onClick={() => selected === 'Destinations' ? setSelected('') : setSelected('Destinations')}
            >Destinations</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d={`${selected === 'Destinations' ? "m19.5 8.25-7.5 7.5-7.5-7.5" : "m4.5 15.75 7.5-7.5 7.5 7.5"}`} />
            </svg>
          </div>
          <div className='flex items-center gap-1'>
            <p className={`hover:cursor-pointer select-none`}
              onClick={() => selected === 'Tour Category' ? setSelected('') : setSelected('Tour Category')}
            >Tour Category</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d={`${selected === 'Tour Category' ? "m19.5 8.25-7.5 7.5-7.5-7.5" : "m4.5 15.75 7.5-7.5 7.5 7.5"}`} />
            </svg>
          </div>
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
      <DropDown selected={selected} />
    </nav>
  )
}
