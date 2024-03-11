'use client'

import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#FFA500] pt-[50px] pb-[15px]'>
      <div className='container mx-auto w-full'>
        <div className='text-black container px-[5%]'>
          <div>
            <div className='flex justify-between pr-[3%] pb-[25px] font-[300]'>
              <div>
                <p className='font-[600] text-[32px]'>Beyond Destination</p>
                <p>Address</p>
                <p>Mail</p>
                <p>Phone Numbers</p>
              </div>
              <div className='flex gap-12'>
                <div>
                  <p className='font-[600] mb-[15px]'>Our Packages</p>
                  <p>Package 1</p>
                  <p>Package 2</p>
                  <p>Package 3</p>
                </div>
                <div>
                  <p className='font-[600] mb-[15px]'>Destinations</p>
                  <p>Destination 1</p>
                  <p>Destination 2</p>
                  <p>Destination 3</p>
                </div>
                <div>
                  <p className='font-[600] mb-[15px]'>Tour by Category</p>
                  <p>Category 1</p>
                  <p>Category 2</p>
                  <p>Category 3</p>
                </div>
              </div>
            </div>
            <div className='bg-black rounded-2xl h-[110px] w-[300px]  mb-[20px] p-[15px] hover:cursor-pointer flex justify-between items-center gap-4 hover:bg-gray-800 transition-all duration-300 text-white'>
              <p className='font-[600] text-[24px]'>Become a<br /> partner with us</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

            </div>
          </div>
          <div className='flex justify-between border-t-[1px] pt-3'>
            <p>
              © 2024 Fjordstans.com
            </p>
            <div className='flex gap-5'>
              <p className='hover:cursor-pointer'>Terms</p>
              <p className='hover:cursor-pointer'>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
