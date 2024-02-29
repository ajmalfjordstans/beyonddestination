import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap';
import destinationsData from '../state/destinations.json'

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
      <div className={`text-black w-full h-[full] ${depth != 4 && 'border-r-[2px]'} p-[10px]`} ref={listRef}>
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

export default function DropDown({ selected }) {
  const [dropDetails, setDropDetails] = useState({
    depth: 0,
    depth0: '',
    depth1: '',
    depth2: '',
    depth3: '',
  })
  useEffect(() => {
    gsap.from(".content2", { opacity: 0, y: -50, height: 0 });
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
    <div className='text-black z-[100] '>
      {selected !== '' &&
        <div className='relative w-full justify-center pt-[10px]'>
          <div className='w-[800px] h-[240px] bg-white shadow-lg rounded-lg border mx-auto content2 grid grid-cols-4 '>
            {selected === 'Destinations' &&
              <>
                <List data={destinationsData.destinations} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='0' />
                {dropDetails.depth0 !== '' &&
                  <List data={dropDetails.depth0} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='1' />
                }
                {dropDetails.depth > 0 && dropDetails.depth1 !== '' &&
                  <List data={dropDetails.depth1} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='2' />
                }
                {dropDetails.depth > 1 && dropDetails.depth2 !== '' &&
                  <List data={dropDetails.depth2} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='3' />
                }
                {dropDetails.depth > 2 && dropDetails.depth3 !== '' &&
                  <List data={dropDetails.depth3} setDropDetails={setDropDetails} dropDetails={dropDetails} depth='4' />
                }
              </>
            }
            {selected === 'Our Packages' && <p className='p-[10px] font-[600]'>Our Packages</p>}
            {selected === 'Tour Category' && <p className='p-[10px] font-[600]'>Tour Category</p>}
          </div>
        </div>
      }
    </div>
  )
}
