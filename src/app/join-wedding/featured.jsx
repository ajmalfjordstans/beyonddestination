'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
  {
    img: '/images/indian-wedding.jpg',
    name: "AAKASH & CHANDANI'S WEDDING",
    location: 'Jaipur, India',
    date: '11 to 12 Mar, 2024',
  },
]

export function Card({ wedding }) {
  return (
    <Link href={`/join-wedding/${wedding.name}`}>
      <div className='w-full hover:cursor-pointer'>
        <Image src={wedding.img} height={600} width={600} alt='wedding image' className='rounded-2xl overflow-hidden shadow-md' />
        <p className='font-[600] text-[22px] mt-[10px] text-center'>{wedding.name}</p>
        <div className='flex justify-between'>
          <p>{wedding.location}</p>
          <p>{wedding.date}</p>
        </div>
      </div>
    </Link>
  )
}

export default function Featured() {
  return (
    <div className='container mx-auto px-[5%] flex flex-col items-center'>
      <p className='text-[24px] mt-[30px]'>Featured Weddings</p>
      <p className='font-[600] text-[26px] mt-[40px]'>Which wedding would you like to join?</p>
      <div className='grid grid-cols-3 w-full gap-10 py-[20px] mt-[20px]'>
        {data.map((wedding, id) => {
          return (
            <Card wedding={wedding} key={id} />
          )
        })}
      </div>
    </div>
  )
}
