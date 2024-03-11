'use client'

import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';

export function Card({ img, description, destination }) {
  return (
    <Link
      href='/packages'
    >
      <div className='w-[full]'>
        <Image
          src={img}
          width={400}
          height={400}
          className='rounded-[8px] w-full h-[270px] overflow-hidden object-cover'
          alt='package image'
        />
        <div className='mt-[8px]'>
          <p className='font-[600] text-[22px]'>{destination}</p>
          <p className='font-[400] text-[14px]'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

const packages = [
  {
    img: "/temp/img1.jpg",
    destination: "New York to India",
    description: "Explore the bustling streets of New York City."
  },
  {
    img: "/temp/img2.jpg",
    destination: "Golden Triangle",
    description: "Experience the romance of Paris and its iconic landmarks."
  },
  {
    img: "/temp/img3.jpg",
    destination: "India to Europe",
    description: "Discover the vibrant culture and cuisine of Tokyo."
  },
  {
    img: "/temp/img4.jpg",
    destination: "Rome",
    description: "Immerse yourself in the rich history and architecture of Rome."
  },
  {
    img: "/temp/img5.jpg",
    destination: "Dubai",
    description: "Indulge in luxury and adventure in the dynamic city of Dubai."
  },
  {
    img: "/temp/img6.jpg",
    destination: "Bali",
    description: "Relax on beautiful beaches and experience the tranquil beauty of Bali."
  }
];

export default function Packages() {
  const swiperRef = useRef(null);

  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 15, },
    530: { slidesPerView: 2, spaceBetween: 15, },
    780: { slidesPerView: 2, spaceBetween: 15, },
    960: { slidesPerView: 3, spaceBetween: 15, },
    // 1440: { slidesPerView: 4.1, spaceBetween: 15, },
  }

  const handleNextClick = () => {
    if (swiperRef.current !== null) {
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
    }
  };
  return (
    <div className='container mx-auto pt-[30px] px-[5%] md:px-[10%]'>
      <div>
        <p className='font-[500] text-[28px]'>Our Packages</p>
        <p className='font-[400] text-[18px] text-[gray]'>Desc about our packages</p>
      </div>
      <div className='mt-[30px] relastive w-[90%] mx-auto'>
        <Swiper
          spaceBetween={20}
          slidesPerView={3.1}
          // onSlideChange={() => console.log('slide change')}
          breakpoints={breakpoints}
          // onSwiper={(swiper) => console.log(swiper)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {packages.map((data, id) => {
            return (
              <SwiperSlide key={id}>{Card(data)}</SwiperSlide>
            )
          })}

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
