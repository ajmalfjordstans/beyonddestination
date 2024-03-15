'use client'

import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export function Card(data) {
  data = data.data
  return (
    <div className='w-[full] rounded-xl pb-[15px] p-[8px] shadow-xl'>
      <Image
        src="/images/guide-avatar.jpg"
        height={400}
        width={400}
        alt='guide'
        className='rounded-xl shadow-lg translate-y-[-15px]'
      />
      <div className='px-[4px]'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <p className='font-[600] text-[18px]'>{data.name}</p>
            {data.verified &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-6 h-6">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            }
          </div>
          <div className='flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <p className='font-[600]'>{data.rating}</p>
          </div>
        </div>
        <p className='font-[400] text-[14px] text-gray-700'>{data.desc}</p>
        <div>
          <p>Badges:</p>
          <div className='flex gap-2 p-2'>
            <div className='bg-yellow-500 rounded-full p-[5px]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='bg-yellow-500 rounded-full p-[5px]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
              </svg>

            </div>
            <div className='bg-yellow-500 rounded-full p-[5px]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>

            </div>
          </div>
        </div>
        <Link href={`/tour-guide/guide-name`}>
          <Button
            fullWidth
            className='bg-primary px-[10px] py-[5px] rounded-md font-lato mt-[10px]'
          >View</Button>
        </Link>
      </div>
    </div>
  )
}

const guides = [
  {
    name: 'John Doe',
    desc: 'Experienced tour guide with extensive knowledge of local history and landmarks.',
    badges: ['trust', 'knowledge'],
    verified: true,
    rating: 4.8,
    img: '/images/guide-avatar.jpg'
  },
  {
    name: 'Alice Smith',
    desc: 'Passionate guide offering personalized tours tailored to your interests.',
    badges: ['trust', 'experience'],
    verified: false,
    rating: 4.9,
    img: '/images/guide-avatar.jpg'
  },
  {
    name: 'Alice Smith',
    desc: 'Passionate guide offering personalized tours tailored to your interests.',
    badges: ['trust', 'experience'],
    verified: false,
    rating: 4.9,
    img: '/images/guide-avatar.jpg'
  },
  {
    name: 'Alice Smith',
    desc: 'Passionate guide offering personalized tours tailored to your interests.',
    badges: ['trust', 'experience'],
    verified: false,
    rating: 4.9,
    img: '/images/guide-avatar.jpg'
  },
  {
    name: 'Michael',
    desc: 'Friendly and knowledgeable guide specializing in outdoor adventures and...',
    badges: ['trust', 'experience', 'adventure'],
    verified: true,
    rating: 4.7,
    img: '/images/guide-avatar.jpg'
  }
];

export default function Guides() {
  return (
    <>
     
      <div className='container mx-auto px-[5%] md:px-[10%]'>
        <div className='py-[30px]'>
          <div className=''>
            <p className='font-[500] text-[28px]'>Tour Guides</p>
            <p className='font-[400] text-[18px] text-[gray]'>Desc about our tour guides</p>
          </div>


          <div className='mt-[40px] grid grid-cols-4 gap-10'>
            {guides.map((guide, id) => {
              return (
                <Card data={guide} key={id} />
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}
