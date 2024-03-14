'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const BlogData = [
  {
    img: '/temp/img31.jpg',
    category: 'Adventure',
    title: 'Exploring the Hidden Gems of the Amazon Rainforest',
    date: 'March 5, 2024',
    desc: 'Embark on an unforgettable journey deep into the heart of the Amazon Rainforest, where lush greenery, exotic wildlife, and indigenous cultures await.'
  },
  {
    img: '/temp/img32.jpg',
    category: 'Beach',
    title: 'Sun, Sand, and Serenity: A Guide to the Best Beaches in the Caribbean',
    date: 'April 12, 2024',
    desc: 'Discover paradise on earth as we take you on a tour of the most breathtaking beaches in the Caribbean, from secluded coves to vibrant coastal towns.'
  },
  {
    img: '/temp/img33.jpg',
    category: 'City',
    title: 'A Cultural Odyssey: Exploring the Streets of Tokyo',
    date: 'May 20, 2024',
    desc: 'Immerse yourself in the vibrant energy of Tokyo as we wander through bustling streets, visit ancient temples, and indulge in delicious street food.'
  },
  {
    img: '/temp/img34.jpg',
    category: 'Mountain',
    title: 'Scaling New Heights: Conquering the Peaks of the Himalayas',
    date: 'June 8, 2024',
    desc: 'Join us on an epic adventure to conquer the tallest peaks in the world, where breathtaking views and thrilling challenges await at every turn.'
  },
  {
    img: '/temp/img35.jpg',
    category: 'Adventure',
    title: 'Into the Wild: Trekking Through the Sahara Desert',
    date: 'July 17, 2024',
    desc: 'Journey into the vast expanse of the Sahara Desert, where endless dunes, starry nights, and nomadic traditions offer a once-in-a-lifetime experience.'
  },
  {
    img: '/temp/img36.jpg',
    category: 'Beach',
    title: 'Island Paradise: Escaping to the Maldives',
    date: 'August 3, 2024',
    desc: 'Indulge in luxury and relaxation as we whisk you away to the idyllic islands of the Maldives, where crystal-clear waters and overwater bungalows await.'
  },
  {
    img: '/temp/img37.jpg',
    category: 'City',
    title: 'European Adventure: Exploring the Charm of Paris',
    date: 'September 19, 2024',
    desc: 'Experience the romance and culture of the City of Light as we stroll along the Seine, marvel at iconic landmarks, and savor exquisite French cuisine.'
  },
  {
    img: '/temp/img38.jpg',
    category: 'Mountain',
    title: 'Majestic Peaks: Hiking the Swiss Alps',
    date: 'October 7, 2024',
    desc: 'Embark on a high-altitude adventure through the stunning landscapes of the Swiss Alps, where snow-capped peaks and pristine lakes await.'
  },
  {
    img: '/temp/img39.jpg',
    category: 'Adventure',
    title: 'Lost in the Jungle: Trekking Through Borneo',
    date: 'November 15, 2024',
    desc: 'Venture deep into the lush rainforests of Borneo, where rare wildlife, ancient tribes, and untouched wilderness create an unforgettable expedition.'
  },
  {
    img: '/temp/img40.jpg',
    category: 'Beach',
    title: 'Tropical Paradise: Discovering the Beauty of Hawaii',
    date: 'December 3, 2024',
    desc: 'Escape to the tropical paradise of Hawaii, where palm-fringed beaches, volcanic landscapes, and aloha spirit await to enchant and inspire.'
  },
  {
    img: '/temp/img41.jpg',
    category: 'City',
    title: 'Cultural Melting Pot: Exploring the Streets of Istanbul',
    date: 'January 8, 2025',
    desc: 'Immerse yourself in the rich history and vibrant culture of Istanbul, where east meets west in a fascinating blend of tradition and modernity.'
  },
  {
    img: '/temp/img42.jpg',
    category: 'Mountain',
    title: 'Alpine Adventure: Skiing in the French Alps',
    date: 'February 17, 2025',
    desc: 'Hit the slopes and experience the thrill of skiing in the breathtaking French Alps, where majestic mountains and charming alpine villages await.'
  },
  {
    img: '/temp/img43.jpg',
    category: 'Adventure',
    title: 'Safari Expedition: Wildlife Watching in Kenya',
    date: 'March 25, 2025',
    desc: 'Embark on an unforgettable safari adventure in Kenya, where the Big Five roam free and spectacular landscapes provide the backdrop for incredible wildlife encounters.'
  }
];

export function BlogsList({ currentBlog, setCurrentBlog }) {
  const swiperRef = useRef(null);
  const [pageCount, setPageCount] = useState(0)
  let BlogListData = BlogData.filter(blog => blog != currentBlog);
  const pages = (BlogData.length - 1) / 4
  const handleNextClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext(900);
      pages - 1 > pageCount && setPageCount(pageCount + 1)
    }
  };
  const handlePrevClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev(900);
      0 < pageCount && setPageCount(pageCount - 1)
    }
  };
  return (
    <div className='flex flex-col gap-3  overflow-hidden'>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='w-full'
      >
        <SwiperSlide>
          <div className='flex flex-col gap-2'>
            {BlogListData
              .slice(pageCount * 4, (pageCount * 4) + 4)
              .map((data, id) => {
                if (data === currentBlog) {
                  return null
                }
                return (
                  <div className='flex gap-2 p-[15px] bg-[#fbf7fc] rounded-lg hover:cursor-pointer w-[100%]' key={id}
                    onClick={() => setCurrentBlog(data)}
                  >
                    <Image src={data.img} height={100} width={100} alt='blog_image' className='rounded-lg' />
                    <div className='flex flex-col gap-1'>
                      <p className='font-[600] text-[14px] uppercase'>{data.category}</p>
                      <p className='font-[600] text-[18px] '>{data.title.length > 45 ? data.title.slice(0, 45) + '...' : data.title}</p>
                      <p className='font-[500] text-[14px] '>{data.date}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </SwiperSlide>
      </Swiper >
      <div className='flex justify-center items-center mt-[15px] z-[50]'>
        <button onClick={handlePrevClick} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[-11px] md:translate-x-[-24px] border-[#EAEAEA] border-[2px] z-[2]"
        >
          <Image src="/icons/prev.svg" alt="prev" height={20} width={20} />
        </button>
        <button onClick={handleNextClick} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[-5%] md:translate-x-[24px] border-[#EAEAEA] border-[2px] z-[2]">
          <Image src="/icons/next.svg" alt="next" height={20} width={20} />
        </button>
      </div>
    </div >
  )
}

export default function Blogs() {
  const [currentBlog, setCurrentBlog] = useState(BlogData[0])
  return (
    <div className='container mx-auto px-[5%] py-[30px] mt-[30px]'>
      <p className='font-[600] text-[42px] text-left'>Blogs</p>
      <div className='grid grid-cols-3 gap-3 mt-[30px]'>
        <div
          className='col-span-2 h-[600px] '
        >
          <div
            className='h-full rounded-lg relative overflow-hidden'
            style={{
              backgroundImage: `url(${currentBlog.img})`,
              backgroundSize: 'cover', // Optional: Adjust the background size
              backgroundPosition: 'center', // Optional: Adjust the background position
              backgroundRepeat: 'no-repeat', // Optional: Prevent background image from repeating
            }}
          >
            <div className="absolute inset-0 flex items-end text-white"
              style={{ background: `linear-gradient(0deg, rgba(0,0,0,0.8324579831932774) 0%, rgba(255,255,255,0) 59%)` }}
            >
              <div className='p-[20px] w-[60%] z-[2] flex flex-col gap-2'>
                <p className='font-[600] text-[14px] uppercase'>{currentBlog.category}</p>
                <p className='font-[600] text-[22px] tracking-wide'>{currentBlog.title}</p>
                <p className='font-[500] text-[14px] '>{currentBlog.date}</p>
                <p className='text-[14px]'>{currentBlog.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BlogsList currentBlog={currentBlog} setCurrentBlog={setCurrentBlog} />
        </div>
      </div>
    </div>
  )
}
