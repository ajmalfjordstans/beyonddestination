'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import Image from 'next/image';

export function Card(data) {
  return (
    <div className='relative h-[200px] w-full rounded-[8px] overflow-hidden p-[10px] flex items-end bg-custom-gradient'>
      <Image
        src={data.data.img}
        width={400}
        height={400}
        className='absolute h-full w-full inset-0 object-cover z-[-1]'
        alt='categories'
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent"></div> */}
      <p className='font-[600] text-[18px] z-[2] text-white'>{data.data.destination}</p>
    </div>
  )
}

const categoryTabs = ['spiritual', 'backpack', 'medical', 'destination wedding', 'student', 'culinary']

const packages = [
  // Spiritual category
  {
    img: "/temp/img1.jpg",
    destination: "Himalayan Retreat",
    category: "spiritual"
  },
  {
    img: "/temp/img2.jpg",
    destination: "Buddhist Monastery",
    category: "spiritual"
  },
  {
    img: "/temp/img3.jpg",
    destination: "Yoga Ashram",
    category: "spiritual"
  },
  {
    img: "/temp/img4.jpg",
    destination: "Meditation Retreat",
    category: "spiritual"
  },
  {
    img: "/temp/img2.jpg",
    destination: "Buddhist Monastery",
    category: "spiritual"
  },
  {
    img: "/temp/img3.jpg",
    destination: "Yoga Ashram",
    category: "spiritual"
  },
  // Backpack category
  {
    img: "/temp/img5.jpg",
    destination: "Mountain Trek",
    category: "backpack"
  },
  {
    img: "/temp/img6.jpg",
    destination: "Jungle Expedition",
    category: "backpack"
  },
  {
    img: "/temp/img7.jpg",
    destination: "Desert Safari",
    category: "backpack"
  },
  {
    img: "/temp/img8.jpg",
    destination: "Coastal Hike",
    category: "backpack"
  },
  {
    img: "/temp/img5.jpg",
    destination: "Mountain Trek",
    category: "backpack"
  },
  {
    img: "/temp/img6.jpg",
    destination: "Jungle Expedition",
    category: "backpack"
  },
  {
    img: "/temp/img5.jpg",
    destination: "Mountain Trek",
    category: "backpack"
  },
  {
    img: "/temp/img6.jpg",
    destination: "Jungle Expedition",
    category: "backpack"
  },
  {
    img: "/temp/img7.jpg",
    destination: "Desert Safari",
    category: "backpack"
  },
  {
    img: "/temp/img8.jpg",
    destination: "Coastal Hike",
    category: "backpack"
  },


  // Medical category
  {
    img: "/temp/img9.jpg",
    destination: "Health Resort",
    category: "medical"
  },
  {
    img: "/temp/img10.jpg",
    destination: "Wellness Spa",
    category: "medical"
  },
  {
    img: "/temp/img11.jpg",
    destination: "Ayurvedic Retreat",
    category: "medical"
  },
  {
    img: "/temp/img12.jpg",
    destination: "Holistic Healing Center",
    category: "medical"
  },
  {
    img: "/temp/img10.jpg",
    destination: "Wellness Spa",
    category: "medical"
  },
  {
    img: "/temp/img11.jpg",
    destination: "Ayurvedic Retreat",
    category: "medical"
  },
  {
    img: "/temp/img9.jpg",
    destination: "Health Resort",
    category: "medical"
  },
  {
    img: "/temp/img10.jpg",
    destination: "Wellness Spa",
    category: "medical"
  },
  {
    img: "/temp/img11.jpg",
    destination: "Ayurvedic Retreat",
    category: "medical"
  },
  // Destination Wedding category
  {
    img: "/temp/img13.jpg",
    destination: "Beach Wedding",
    category: "destination wedding"
  },
  {
    img: "/temp/img14.jpg",
    destination: "Vineyard Ceremony",
    category: "destination wedding"
  },
  {
    img: "/temp/img15.jpg",
    destination: "Historic Castle Venue",
    category: "destination wedding"
  },
  {
    img: "/temp/img16.jpg",
    destination: "Mountain Retreat Wedding",
    category: "destination wedding"
  },
  {
    img: "/temp/img15.jpg",
    destination: "Historic Castle Venue",
    category: "destination wedding"
  },
  // Student category
  {
    img: "/temp/img17.jpg",
    destination: "Study Abroad Program",
    category: "student"
  },
  {
    img: "/temp/img18.jpg",
    destination: "Cultural Exchange",
    category: "student"
  },
  {
    img: "/temp/img19.jpg",
    destination: "Language Immersion Course",
    category: "student"
  },
  {
    img: "/temp/img20.jpg",
    destination: "Internship Abroad",
    category: "student"
  },
  // Culinary category
  {
    img: "/temp/img21.jpg",
    destination: "Food Tour",
    category: "culinary"
  },
  {
    img: "/temp/img22.jpg",
    destination: "Cooking Class",
    category: "culinary"
  },
  {
    img: "/temp/img23.jpg",
    destination: "Wine Tasting Experience",
    category: "culinary"
  },
  {
    img: "/temp/img21.jpg",
    destination: "Food Tour",
    category: "culinary"
  },
  {
    img: "/temp/img22.jpg",
    destination: "Cooking Class",
    category: "culinary"
  },
  {
    img: "/temp/img24.jpg",
    destination: "Gourmet Dining Cruise",
    category: "culinary"
  }
];

export default function Categories() {
  const [activeTab, setActiveTab] = useState('spiritual')
  useEffect(() => {
    gsap.fromTo(".content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: .7, stagger: 0.01});
  }, [activeTab])
  return (
    <div className='container mx-auto py-[30px] px-[5%] md:px-[10%]'>
      <div>
        <p className='font-[500] text-[28px]'>Categories</p>
        <p className='font-[400] text-[18px] text-[gray]'>Desc about our categories</p>
      </div>

      <div className='flex mt-[30px]'>
        <div className='bg-gray-200 rounded-md mx-auto flex gap-2 items-center justify-evenly p-2'>
          {categoryTabs.map((tab, id) => {
            return (
              <div
                key={id}
                className={`transition-colors duration-300 capitalize hover:cursor-pointer px-3 py-2 text-black ${activeTab === tab ? 'bg-primary rounded-md text-white' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 my-[30px] ">
        {packages
          .filter(pkg => pkg.category === activeTab)
          .map((data, id) => {
            return (
              <div className="content"  key={id}>
                <Card data={data} />
              </div>
            )
          })}
      </div>

    </div>
  )
}
