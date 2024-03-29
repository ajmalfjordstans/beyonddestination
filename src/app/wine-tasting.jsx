'use client'

import React from 'react'

import Image from 'next/image';
import { Button } from '@material-tailwind/react';

export function Card({ img, description, destination }) {
  return (
    <div className='w-[full]'>
      <Image
        src={img}
        width={400}
        height={400}
        className='rounded-[8px] w-full h-[270px] overflow-hidden object-cover'
        alt='package image'
      />
      <div className='mt-[8px]'>
        <p className='font-[600] text-[22px]'>{destination}</p>
        <p className='font-[400] text-[14px]'>{description}</p>
      </div>
    </div>
  )
}


export default function WineTasting() {
  return (
    <div className='bg-winebanner bg-cover h-[100vh] py-[30px]'>
      <div className='container mx-auto py-[80px] px-[5%] md:px-[10%] h-full z-10 text-black grid grid-cols-2 '>
        <div className='flex flex-col h-full justify-center'>
          <p className='font-[600] text-[42px] text-left'>Fancy Wine Tours</p>
          <p className='font-[400] text-[18px] text-[gray] text-left mt-[15px]'>Desc about our Wine Tasting </p>

          <div className='mt-[50px]'>
            <p className='font-[600] text-[26px] mb-[20px]'>Explore wine tasting tours in </p>
            <div className='flex items-center gap-2 hover:cursor-pointer hover:pl-[30px] transition-all duration-100 mb-[15px]'>
              <p className=''>India
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className='flex items-center gap-2 hover:cursor-pointer hover:pl-[30px] transition-all duration-100'>
              <p className=''>Slovakia
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <div className='w-full flex justify-center mt-[50px]'>
            <Button
              variant='filled'
              className='bg-[#752535] mx-auto px-[15px] py-[10px] rounded-md'
            >
              Read More
            </Button>
          </div>
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}
