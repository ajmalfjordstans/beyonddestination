import React from 'react'

export default function Hero() {
  return (
    <div className='pt-[40px]'>
      <div className='bg-hero-wedding w-[90%] h-[70dvh] mx-auto bg-cover bg-center flex flex-col justify-center items-center rounded-2xl relative overflow-hidden'>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="flex flex-col justify-center items-center gap-3 absolute inset-0 text-white">
          <p className='font-semibold text-5xl'>Indian Wedding</p>
          <p className='font-light text-lg text-center lowercase'>YOU HAVEN&apos;T BEEN TO INDIA UNTIL<br /> YOU&apos;VE BEEN TO AN INDIAN WEDDING.</p>
        </div>
      </div>
    </div>
  )
}
