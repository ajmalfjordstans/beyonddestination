import Footer from '@/components/footer'
import Gallery from '@/components/gallery'
import Navbar from '@/components/navbar'
import Testimonials from '@/components/testimonials'
import React from 'react'

export default function Page() {
  return (
    <div >
      <Navbar />
      <div className="container mx-auto py-[60px] px-[5%] md:px-[10%]">
        <div className='flex justify-between'>
          <div>
            <p className='font-[900] text-[28px]'>Banana Beach</p>
            <div className='font-[400] text-[16px] text-gray-500 mt-[25px]'>
              <ul className='list-disc flex gap-6'>
                <p>2,296 reviews</p>
                <li>Tag 1</li>
                <li>Tag 2</li>
                <li>Tag 3</li>
              </ul>
            </div>
            <p className='font-[400] text-[16px] text-gray-500'>Opening Hours <span className='font-[600]'>12:00 AM - 11:59 PM</span></p>
          </div>
          <div className='flex gap-2'>
            <div className='h-8 w-8 border-[1px] border-black rounded-full flex justify-center items-center p-1 group-[share] hover:cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 block group-[share]-hover:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 hidden group-[share]-hover:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
              </svg>
            </div>
            <div className='h-8 w-8 border-[1px] border-black rounded-full flex justify-center items-center p-1 group-[share] hover:cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 block group-[share]-hover:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 hidden group-[share]-hover:block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className='pt-[20px] flex gap-2'>
          <div className='w-[30%] h-[200px] border-[2px] rounded-xl shadow-md '>
            <div className='p-[20px] flex flex-col gap-5'>
              <p className='font-[700] text-[22px]'>About</p>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2 text-[14px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className='w-5 h-5'>
                    <path d="M15 19h2v2h-2zM15 23h2v2h-2z"></path>
                    <path d="M23 11.67V4h3V2H6v2h3v7.67a2 2 0 00.4 1.2L11.75 16 9.4 19.13a2 2 0 00-.4 1.2V28H6v2h20v-2h-3v-7.67a2 2 0 00-.4-1.2L20.25 16l2.35-3.13a2 2 0 00.4-1.2zM21 4v7H11V4zm0 16.33V28H11v-7.67L14.25 16 12 13h8l-2.25 3z"></path>
                    <path fill="none" d="M0 0h32v32H0z"></path>
                  </svg>
                  <p>Duration: More than 3 hours</p>
                </div>
                <div className='flex items-center gap-2 text-[14px]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className='w-5 h-5'
                  >
                    <g fill="#292d32">
                      <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 5.43-2.32 7.75-7.75 7.75z"></path>
                      <path d="M8.5 17.69c-.61 0-1.17-.22-1.58-.62-.49-.49-.7-1.2-.59-1.95l.43-3.01c.08-.58.46-1.33.87-1.74l7.88-7.88c1.99-1.99 4.01-1.99 6 0 1.09 1.09 1.58 2.2 1.48 3.31-.09.9-.57 1.78-1.48 2.68l-7.88 7.88c-.41.41-1.16.79-1.74.87l-3.01.43c-.13.03-.26.03-.38.03zm8.07-14.14l-7.88 7.88c-.19.19-.41.63-.45.89l-.43 3.01c-.04.29.02.53.17.68s.39.21.68.17l3.01-.43c.26-.04.71-.26.89-.45l7.88-7.88c.65-.65.99-1.23 1.04-1.77.06-.65-.28-1.34-1.04-2.11-1.6-1.6-2.7-1.15-3.87.01z"></path>
                      <path d="M19.85 9.83c-.07 0-.14-.01-.2-.03a7.937 7.937 0 01-5.46-5.46.76.76 0 01.52-.93c.4-.11.81.12.92.52.6 2.13 2.29 3.82 4.42 4.42.4.11.63.53.52.93-.09.34-.39.55-.72.55z"></path>
                    </g>
                  </svg>
                  <p>Suggest edits to improve what we show</p>
                </div>
              </div>
            </div>
          </div>
          <Gallery />
        </div>

        <Testimonials/>
      </div>
      <Footer />
    </div>
  )
}
