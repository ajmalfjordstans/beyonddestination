'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[#000000ef] text-white py-[40px]'>
      <div className='grid grid-cols-7 gap-[20px] grid-flow-dense min-h-[90vh] container mx-auto px-[5%] '>
        <div className='h-full w-full min-h-[20px] min-w-[30px] rounded-lg col-span-3'>
          <p className='font-[600] text-[14px] text-[gray] '>Book Our Travel Guides</p>
          <p className='font-[600] text-[48px]'>Our Travel Guides</p>
          <p className='font-[400] text-[16px] '>Whether you’re interested in traveling to a new city, going on a cruise, or cooking a new dish — we’re committed to inspiring you to experience travel in a whole new way. Lonely Planet’s collection of 825+ travel and guidebooks is sure to inspire the traveler within.</p>
          <Button
            variant='outlined'
            className='capitalize font-[500] px-4 mt-[20px] text-white border-white rounded-full text-[14px]'
          >View All guides</Button>
        </div>

        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-2 row-span-2 object-cover object-left'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-2 row-span-1 object-cover object-left'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-2 row-span-4 object-cover object-left'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-1 row-span-2 object-cover object-left'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-2 row-span-2 object-cover object-left'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-900 shadow-lg rounded-lg col-span-1 row-span-1 object-cover object-left'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-2 row-span-2 object-cover object-left'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-1 row-span-3 object-cover object-center'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
        <Image
          className='h-full w-full bg-gray-500 shadow-lg rounded-md col-span-2 row-span-2 object-cover'
          src="/images/guide-avatar.jpg"
          height={800} width={800}
          alt="guide"
        />
      </div>
    </div>
  )
}
