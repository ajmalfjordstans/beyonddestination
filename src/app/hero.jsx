'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <>
      <div
        className='bg-landing-bg bg-bottom bg-cover bg-no-repeat h-full'
      >
        <div className='container mx-auto px-[5%] min-h-[90dvh] flex flex-col items-center py-[80px] '>
          <div className='mt-[270px]'>
            <p className='font-[900] text-[54px] text-[#fbfcf8]'>Where do you want to <span className='text-white'>go?</span></p>
          </div>
          <div className='flex gap-1 bg-white rounded-2xl p-[15px] mt-[20px]'>

            <input type="text" id="destination" className='p-[10px] rounded-2xl border-[1px] focus:none' placeholder='Going To' />

            <input type="text" id="fromLocation" className='p-[10px] rounded-2xl border-[1px] focus:none' placeholder='Departing From' />

            <input type="date" id="departureDate" className='p-[10px] rounded-2xl border-[1px] focus:none' placeholder='When' />

            <input type="text" id="tripDuration" className='p-[10px] rounded-2xl border-[1px] focus:none' placeholder='Duration' />

            <input type="text" id="roomsAndGuests" className='p-[10px] rounded-2xl border-[1px] focus:none' placeholder='Rooms & Guests' />
            <Button
              className='bg-primary px-[10px]'
            >Search</Button>
          </div>

        </div>
      </div>
      <div className='container mx-auto px-[5%] '>
        <div
          className='bg-hero-bg bg-cover bg-no-repeat bg-bottom rounded-[20px] mt-[40px] w-[70%] h-[500px] flex items-end mx-auto'
        >
          <div className='text-white p-[30px]'>
            <div className='py-[15px]'>
              <p className='font-[900] text-[54px]'>World&apos;s best beaches for 2024</p>
              <p>See our Travellers&apos; Choice Awards Best of the Best winners.</p>
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
    </>
  )
}
