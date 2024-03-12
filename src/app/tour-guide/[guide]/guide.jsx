'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import TimelineComponent from './timeline-component'
import AboutComponent from './about-component'

export default function Guide() {
  const [bookmark, setBookmark] = useState(false)
  const [view, setView] = useState('about')
  return (
    <div className='container mx-auto px-[5%] py-[30px]'>
      <div className='flex'>
        <div className='w-[30%]'>
          <Image
            src="/images/guide-avatar.jpg"
            height={400}
            width={400}
            alt='guide'
            className='rounded-xl shadow-lg object-cover'
          />
          <div className='mt-[50px]'>
            <p className='font-[600] text-[14px] text-gray-500'>About</p>
            <p className='mt-[15px] text-[14px] leading-[25px] tracking-[1px]'>Hi there! I&apos;m Jeremy, your friendly neighborhood guide to all things. With a passion for exploration and a knack for storytelling, I&apos;m here to lead you on unforgettable journeys through the heart of destination or the depths of topic. Whether it&apos;s uncovering hidden gems, sharing fascinating historical anecdotes, or simply ensuring you have the time of your life, I&apos;m dedicated to making your experience as enriching and enjoyable as possible. Let&apos;s embark on an adventure together and create memories that will last a lifetime!</p>
          </div>
          <div className='mt-[30px]'>
            <p className='font-[600] text-[14px] text-gray-500'>Hobbies</p>
            <ul className='list-disc pl-[20px] pt-[15px]'>
              <li>Hiking</li>
              <li>Photography</li>
              <li>Storytelling</li>
              <li>Birdwatching</li>
              <li>Climbing</li>
              <li>Kayaking</li>
              <li>Cooking</li>
              <li>Camping</li>
              <li>Fishing</li>
              <li>Gardening</li>
            </ul>
          </div>
        </div>

        <div className='w-[70%] pt-[30px] pl-[50px]'>
          <div>
            <div className='flex justify-between'>
              <div className=''>
                <p className='font-[600] text-[24px] tracking-[3px]'>Jeremy Rose</p>
                <p className='font-[600] text-[14px] text-gray-500'>Local Guide</p>
              </div>
              {bookmark ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => setBookmark(false)}
                >
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => setBookmark(true)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
              }

            </div>
            <p className='font-[600] text-[14px] text-gray-500 mt-[30px]'>Reviews</p>
            <div className='flex items-center gap-3 '>
              <p className='font-[600]'>4.6</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='flex pt-[30px] gap-3'>
              <div className='flex gap-2 p-[10px] hover:cursor-pointer rounded-lg border-[1px] border-black '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <p>Send Message</p>
              </div>
              <div className='flex items-center font-[600] text-gray-500 hover:cursor-pointer text-[16px]'>
                Report User
              </div>
            </div>
          </div>
          <div className='mt-[25px]'>
            <div className='border-b-[1px] flex'>
              <div className={`flex gap-2 p-[10px] ${view === 'timeline' ? 'border-b-[2px] border-black' : ''}  hover:cursor-pointer`}
                onClick={() => setView('timeline')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>Timeline</p>
              </div>
              <div className={`flex gap-2 p-[10px] ${view === 'about' ? 'border-b-[2px] border-black' : ''} hover:cursor-pointer`}
                onClick={() => setView('about')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>

                <p>About</p>
              </div>
            </div>
            {view === 'timeline' ?
              <div className='pt-[30px]'>
                <TimelineComponent />
              </div>
              :
              <div className='pt-[30px]'>
                <AboutComponent />
              </div>
            }
          </div>
        </div>

      </div>
    </div>
  )
}
