import React from 'react'

export default function Hero() {
  return (
    <div className='pt-[40px]'>
      <div className='bg-hero-bg w-[90%] h-[70dvh] mx-auto bg-cover bg-center flex flex-col justify-center items-center rounded-2xl relative overflow-hidden'>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="flex flex-col justify-center items-center gap-3 absolute inset-0 text-white">
          <p className='font-semibold text-5xl'>Tour Guides</p>
          <p className='font-light text-lg text-center lowercase'>Our expert tour guide, ensuring unforgettable experiences on every adventure</p>
        </div>
      </div>
    </div>
  )
}
