'use client'
import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap';
import destinationsData from '../state/destinations.json'
import Image from 'next/image';

export function List({ data, setDropDetails, dropDetails, depth }) {
  const listRef = useRef(null)
  let depths = ['depth0', 'depth1', 'depth2', 'depth3']
  let currentDepth = depths[depth]
  useEffect(() => {
    gsap.fromTo(listRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0 });
  }, [dropDetails.currentDepth])

  const handleMouseEnter = (destination) => {
    handleItemClick(destination)
  };

  const handleItemClick = (destination) => {

    if (destination.places?.length > 0) {
      setDropDetails({
        ...dropDetails,
        [currentDepth]: destination,
        depth: depth
      })
    }
  };

  return (
    <>
      <div className={`text-black w-full h-[full] ${depth != 4 && 'border-r-[2px]'} p-[20px]`} ref={listRef}>
        <p className='font-[600] text-[22px] hover:cursor-pointer capitalize'>{data?.name}</p>
        {data?.places?.length > 0 && data?.places?.map((destination, id) => (
          <div key={id} className='flex justify-between items-center hover:cursor-pointer'
            onClick={() => handleItemClick(destination)}
            onMouseEnter={() => handleMouseEnter(destination)}
          >
            <p className='hover:underline'>{destination.name}</p>
            {destination.places?.length > 0 && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"
                onClick={() => handleItemClick(destination)}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            )}
          </div>
        ))}
        <p></p>
      </div>
    </>
  );
}

export function Destinations() {
  const destinations = destinationsData.places
  const [continent, setContinent] = useState(destinations.keys[0])
  const [places, setPlaces] = useState(destinations[continent])
  console.log(places);
  return (
    <div className='flex h-full'>
      <div className='border-r-[1px] flex flex-col justify-between border-black h-full pt-[20px] w-[20%]'>
        <div>
          {destinations.keys.map((destination, id) => {
            return (
              <div className={`px-4 py-2 hover:cursor-pointer text-[16px] font-[500] leading-[24px] ${destination === continent ? "bg-slate-100 text-blue-600 font-[600]" : ""}`} key={id}
                onClick={() => {
                  setContinent(destination)
                  setPlaces(destinations[destination])
                }}
              >
                <p className=''>{destination}</p>
              </div>
            )
          })}
        </div>
        <div className={`px-4 py-4 h-[50px] border-slate-100 bg-slate-100 hover:cursor-pointer hover:bg-blue-600 hover:text-white text-[16px] font-[600] leading-[24px] text-black`} >
          <p className=''>See all destinations</p>
        </div>
      </div>
      <div className='flex flex-col justify-between w-[80%]'>
        <div className='flex justify-between gap-3 p-[20px]'>
          <div className='flex gap-4 w-full max-w-[75%]'>
            {places.countries &&
              <div className='w-full max-w-[45%] flex flex-col gap-1'>
                <p className='font-[600] border-b-[1px] border-black pb-[15px]'>Countries</p>
                {places.countries.map((country, id) => {
                  return (
                    <p key={id} className='hover:cursor-pointer hover:text-blue-600'>{country}</p>
                  )
                })}
              </div>
            }
            {places.regions &&
              <div className='w-full max-w-[45%] flex flex-col gap-1'>
                <p className='font-[600] border-b-[1px] border-black pb-[15px]'>Regions</p>
                {places.regions.map((country, id) => {
                  return (
                    <p key={id} className='hover:cursor-pointer hover:text-blue-600'>{country}</p>
                  )
                })}
              </div>
            }
            {places.cities &&
              <div className='w-full max-w-[45%] flex flex-col gap-1'>
                <p className='font-[600] border-b-[1px] border-black pb-[15px]'>Cities</p>
                {places.cities.map((country, id) => {
                  return (
                    <p key={id} className='hover:cursor-pointer hover:text-blue-600'>{country}</p>
                  )
                })}
              </div>
            }

          </div>
          <div className='flex flex-col gap-2'>
            <Image src='/temp/img28.jpg' height={200} width={200} className='rounded-lg w-[250px] h-[200px]' alt='travel' />
            <p className='font-[600] text-[14px]'>Best in Travel</p>
            <p className='text-[14px]'>50 destinations for 50 years of travel</p>
          </div>
        </div>
        <div className={`px-4 py-4 h-[50px] border-slate-100 bg-slate-100 hover:cursor-pointer hover:bg-blue-600 hover:text-white text-[16px] font-[600] leading-[24px] text-black w-full flex justify-end`} >
          <div className='flex items-center gap-2'>
            <p className=''>More in {continent}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function DropDown({ selected }) {
  const [dropDetails, setDropDetails] = useState({
    depth: 0,
    depth0: '',
    depth1: '',
    depth2: '',
    depth3: '',
  })
  useEffect(() => {
    // gsap.from(".content2", { opacity: 0, y: -50, height: 0 });
    setDropDetails({
      depth: 0,
      depth0: '',
      depth1: '',
      depth2: '',
      depth3: '',
    })
  }, [selected])
  // console.log(destinationsData);
  return (
    <div className='text-black  '>
      {selected !== '' &&
        <div className='absolute w-full justify-center z-[100] translate-y-4'>
          <div className='w-[80%] h-[440px] bg-white shadow-lg rounded-lg border mx-auto content2 overflow-hidden'>
            {selected === 'Destinations' &&
              // <>
              //   <List data={destinationsData.destinations} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='0' />
              //   {dropDetails.depth0 !== '' &&
              //     <List data={dropDetails.depth0} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='1' />
              //   }
              //   {dropDetails.depth > 0 && dropDetails.depth1 !== '' &&
              //     <List data={dropDetails.depth1} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='2' />
              //   }
              //   {dropDetails.depth > 1 && dropDetails.depth2 !== '' &&
              //     <List data={dropDetails.depth2} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='3' />
              //   }
              //   {dropDetails.depth > 2 && dropDetails.depth3 !== '' &&
              //     <List data={dropDetails.depth3} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='4' />
              //   }
              // </>
              <Destinations />
            }
            {selected === 'Our Packages' && <p className='p-[10px] font-[600]'>Our Packages</p>}
            {selected === 'Tour Category' && <p className='p-[10px] font-[600]'>Tour Category</p>}
          </div>
        </div>
      }
    </div>
  )
}
