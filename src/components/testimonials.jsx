'use client'

import { ReadMore } from '@/app/packages/package-content'
import Image from 'next/image'
import React, { useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export function TestimonialCard() {
  return (
    <div className='w-full shadow-md border-[1px] rounded-md p-[20px]'>
      <div className='flex gap-2 items-center'>
        <Image src="/temp/img28.jpg" height={40} width={40} alt='avatar' className='h-[35px] w-[35px] rounded-full overflow-hidden' />
        <div>
          <p className='font-[600]'> Radu Hondola </p>
          <p className='font-[300] text-[12px]'>1 contribution</p>
        </div>
      </div>
      <div className='py-[10px] flex flex-col gap-2'>
        <p className='font-[600]'>Great day at banana beach</p>
        <ReadMore>
          About 15 min. Boat trip to Banana Beach. The beach is clean, with white sand and turquoise water. The are seating areas for free or Sunbeds with extra charge. Snorkeling was very nice, we got to see colorful coral and lots of fishes. The food that was included in the tour was amazing, fresh seafood and also meat and salads. There are a lot of activities available on the island: para sailing, swimming, kayak, and most of all many photo ops with amazing views. The guide was nice and familiar Wich we liked.
        </ReadMore>
        <p className='text-[12px] text-gray-400'>Visited March 2023</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const swiperRef = useRef(null);

  const breakpoints = {
    320: { slidesPerView: 1.1, spaceBetween: 15, },
    530: { slidesPerView: 2.1, spaceBetween: 15, },
    780: { slidesPerView: 2.1, spaceBetween: 15, },
    960: { slidesPerView: 3.1, spaceBetween: 15, },
    1440: { slidesPerView: 4.1, spaceBetween: 15, },
  }

  const handleNextClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext(900);
      swiperRef.current.slideNext(900);
      swiperRef.current.slideNext(900);
      swiperRef.current.slideNext(900);
    }
  };
  const handlePrevClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev(900);
      swiperRef.current.slidePrev(900);
      swiperRef.current.slidePrev(900);
      swiperRef.current.slidePrev(900);
    }
  };
  return (
    <div className='pt-[30px]'>
      <p className='font-[700] text-[28px]'>Testimonials</p>
      <div className='pt-[15px] px-[5%]'>
        <Swiper
          spaceBetween={20}
          slidesPerView={3.2}
          // onSlideChange={() => console.log('slide change')}
          breakpoints={breakpoints}
          // onSwiper={(swiper) => console.log(swiper)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide > <TestimonialCard /></SwiperSlide>
          <SwiperSlide > <TestimonialCard /></SwiperSlide>
          <SwiperSlide > <TestimonialCard /></SwiperSlide>
          <SwiperSlide > <TestimonialCard /></SwiperSlide>
          <SwiperSlide > <TestimonialCard /></SwiperSlide>
        </Swiper>
      </div>
      <div className='flex justify-between items-center mt-[15px] translate-y-[-200px] z-[50]'>
        <button onClick={handlePrevClick} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[-11px] md:translate-x-[-24px] border-[#EAEAEA] border-[2px] z-[2]">
          <Image src="/icons/prev.svg" alt="prev" height={20} width={20} />
        </button>
        <button onClick={handleNextClick} className="h-[32px] w-[32px] md:h-[48px] md:w-[48px] bg-white rounded-full flex justify-center items-center transform translate-x-[-5%] md:translate-x-[24px] border-[#EAEAEA] border-[2px] z-[2]">
          <Image src="/icons/next.svg" alt="next" height={20} width={20} />
        </button>
      </div>
    </div>
  )
}
