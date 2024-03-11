'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export function BlogCard() {
  return (
    <div className='max-w-[600px] w-full h-[300px] shadow-boxShadow2 rounded-2xl p-[15px] flex mx-auto mb-[30px]'>
      <Image
        src="/temp/blog.jpg"
        height={400}
        width={400}
        className='rounded-2xl h-full w-[43%] object-cover'
        alt='blog_picture'
      />
      <div className='h-full flex flex-col justify-center p-[15px]'>
        <p className='font-[600] text-[10px] text-gray-400 tracking-wider'>28 FEB 2024</p>
        <p className='font-[500] text-[32px]'>Blog Heading</p>
        <p className='font-[400] text-[12px] tracking-wide'>Blog Description goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi totam minus officiis expedita beatae ratione ut impedit. Assumenda cupiditate reprehenderit tenetur nemo, nam sint cumque molestiae, modi repellat similique esse.</p>
        <div>
          <Button
            className='bg-primary mt-[10px] px-[10px] py-[2px] font-[400] text-[14px] rounded-sm'
          >Read More</Button>
        </div>
      </div>
    </div>
  )
}

export default function BlogContent() {
  return (
    <div className='container mx-auto py-[30px] grid grid-cols-1 gap-6 px-[5%] md:px-[10%]'>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}
