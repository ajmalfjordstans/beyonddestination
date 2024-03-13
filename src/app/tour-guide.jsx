'use client'

import Image from 'next/image'
import React from 'react'
import { Accordion, AccordionBody, Button, Rating } from "@material-tailwind/react";
import Link from 'next/link';
import RegisterGuide from './register-guide';



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


export default function TourGuide() {
  return (
    <>

      <div className='py-[30px] bg-primary text-white'>
        <div className='container mx-auto py-[30px] px-[5%] md:px-[10%]'>
          {/* <p className='font-[600] text-[28px]'>Tour Guides</p>
          <p className='font-[400] text-[18px]'>Desc about our tour guides</p> */}
          <RegisterGuide />
         
        </div>
        <div className='mt-[40px] grid grid-cols-6'>
          {guides.map((guide, id) => {
            return (
              <div className={`h-[300px] relative group cursor-pointer transition-all duration-150`} key={id}>
                <Link
                  href='/tour-guide'
                >
                  <Image src={guide.img} height={700} width={450} className='h-full w-full object-cover' alt='guide' />
                  <div className='absolute top-0 h-full w-full bg-black bg-opacity-35 group-hover:bg-opacity-0 transition-opacity duration-500'>
                    <div className='h-full w-full flex flex-col bg-black bg-opacity-35 p-[20px] text-white font-[600] justify-end'>
                      <div className='flex items-center gap-2 '>
                        <p>{guide.name}</p>
                        {guide.verified &&
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-6 h-6">
                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                          </svg>
                        }
                      </div>
                      <div className='font-[400] hidden group-hover:block '>
                        <p>{guide.desc}</p>
                        <div className='flex items-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                          </svg>
                          <p className='font-[600]'>{guide.rating}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        <div className='mt-[30px] w-full flex justify-center flex-wrap'>
          <Link
            href='/tour-guide'
          >
            <Button
              className='bg-primary px-[10px] py-[5px] rounded-md font-lato mt-[10px]'
            >View More Guides</Button>
          </Link>
        </div>

      </div>

      {/* <div className='absolute h-[50%] w-full bg-[#FFA500]'></div> */}
    </>
  )
}
