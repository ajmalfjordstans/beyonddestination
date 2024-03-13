'use client'

import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import DropDown from './drop-down'
import Link from 'next/link'
import Login from './login'
import Image from 'next/image'

export default function Navbar() {
  const [selected, setSelected] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  return (
    <nav className='w-full font-lato text-white shadow-custom bg-primary z-[50]'>
      <div className='container h-full mx-auto px-[10%] py-[20px]'>
        <div className='grid grid-cols-2 items-center mx-auto'>
          <Link
            href="/"
            className='flex items-center gap-2'
          >
            <Image src='/images/logo_2.png' height={100} width={100} alt='logo' className='h-[45px] w-[40px]' />
            <div className='font-bold text-[22px]'>
              Beyond Destination
            </div>
          </Link>

          <div className='flex justify-end'>
            <Button
              variant='outlined'
              className='border-white rounded-full text-white px-1 py-1 font-[600] text-[14px] flex items-center gap-2'
              onClick={() => setShowLogin(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              My Account
            </Button>
          </div>
        </div>
        <div className='flex gap-6 justify-center mt-[5px] font-[600]'>
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
      </div>
      <DropDown selected={selected} />
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </nav>
  )
}
