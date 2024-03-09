'use client'

import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Banner() {
  return (
    <div className='bg-primary w-full my-[30px]'>
      <div className='container mx-auto px-[5%] py-[30px] text-white flex flex-col justify-center items-center gap-5'>
        <p className='font-[600] text-[26px]'>Want to host foreign guests at your wedding?</p>
        <p className='text-[22px] text-center w-[55%]'>If you like the thought of sharing your wedding day with foreign travelers who have a keen interest in really understanding the Indian culture, then we would love to hear from you.
        </p>
        <Button className='bg-white p-[15px] text-primary shadow-md'>
          Become a Host
        </Button>
      </div>
    </div>
  )
}
