'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div
    // className='bg-hero-bg bg-cover bg-no-repeat h-full'
    >
      <div className='container mx-auto px-[5%] min-h-[90dvh] flex flex-col items-center py-[80px] '>
        <div className='mt-[80px]'>
          <p className='font-[900] text-[54px] text-primary'>Where do you want to <span className='text-[#FFA500]'>go?</span></p>
        </div>

        <form className="mx-auto mt-[30px]">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-[600px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[50px] bg-gray-50 focus:ring-0 focus:border-primary focus:outline-none shadow-custom" placeholder="Places to go..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[50px] text-sm px-4 py-2 ">Search</button>
          </div>
        </form>
        {/* <Image
          src="/images/hero-bg.jpg"
          height={720}
          width={1440}
          className='rounded-[20px] mt-[40px]'
        /> */}
        <div
          className='bg-hero-bg bg-cover bg-no-repeat bg-bottom rounded-[20px] mt-[40px] w-[70%] h-[500px] flex items-end'
        >
          <div className='text-white p-[30px]'>
            <div className='py-[15px]'>
              <p className='font-[900] text-[54px]'>World’s best beaches for 2024</p>
              <p>See our Travellers’ Choice Awards Best of the Best winners.</p>
            </div>
            <Button
              variant='filled'
              className='bg-white rounded-full text-black px-4 py-2 font-semibold'
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
