import Image from 'next/image'
import React from 'react'

export function DestinationCard() {
  return (
    <div className='grid grid-cols-2 my-[20px]'>
      <Image src="/temp/img26.jpg" height={900} width={900} className='h-[90%] w-[90%] rounded-2xl object-cover' alt='destination' />
      <div>
        <p className='font-[300] text-[24px]'>02.</p>
        <p className='font-[700] text-[32px]'>Banana Beach</p>
        <div className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <p className='underline'>Phuket, Thailand</p>
        </div>
        <p className='font-[400] text-[14px] mt-[30px]'>2,290 reviews</p>
        <p>Banana Beach is the definition of paradise, with its soft, golden sand and glistening turquoise waters. Go snorkelling or diving around the stunning coral reefs and spot some fish, or try some</p>
        <div className='mt-[20px]'>
          <p>Great for</p>
          <div className='flex flex-wrap py-3 gap-2'>
            <div className='p-[7px] flex items-center gap-1 rounded-full bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
              </svg>
              <p className='font-[400] text-[12px]'>Buy A Ticket in Advance</p>
            </div>
            <div className='p-[7px] flex items-center gap-1 rounded-full bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5 h-5" viewBox="0 0 50 50">
                <path d="M 42.875 8.625 C 42.84375 8.632813 42.8125 8.644531 42.78125 8.65625 C 42.519531 8.722656 42.292969 8.890625 42.15625 9.125 L 21.71875 40.8125 L 7.65625 28.125 C 7.410156 27.8125 7 27.675781 6.613281 27.777344 C 6.226563 27.878906 5.941406 28.203125 5.882813 28.597656 C 5.824219 28.992188 6.003906 29.382813 6.34375 29.59375 L 21.25 43.09375 C 21.46875 43.285156 21.761719 43.371094 22.050781 43.328125 C 22.339844 43.285156 22.59375 43.121094 22.75 42.875 L 43.84375 10.1875 C 44.074219 9.859375 44.085938 9.425781 43.875 9.085938 C 43.664063 8.746094 43.269531 8.566406 42.875 8.625 Z"></path>
              </svg>
              <p className='font-[400] text-[12px]'>Athletic Wear Recommended</p>
            </div>
            <div className='p-[7px] flex items-center gap-1 rounded-full bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
              </svg>
              <p className='font-[400] text-[12px]'> Entertainment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DestinationsContent() {
  return (
    <div className='container mx-auto px-[5%] md:px-[10%] py-[30px]'>
      <p className='font-[900] text-[32px]'>Asia</p>
      <div className='text-[14px] text-gray-700 flex flex-col gap-4 w-[60%] py-[20px]'>
        <p>
          Golden sands, rugged coastlines, clear blue waters—this year’s winning beaches are traveller faves for everything from lazy beach days to underwater adventures.
        </p>
        <p>
          The Travellers’ Choice Awards Best of the Best title celebrates the highest level of excellence in travel. It’s awarded to those who receive a high volume of above-and-beyond reviews and opinions from the Tripadvisor community over a 12-month period. Out of our 8 million listings, fewer than 1% achieve this milestone.
        </p>
      </div>

      <div className='h-[1px] w-full bg-[#FFA500]'></div>
      <div className='py-[30px] md:px-[10%]'>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </div>
  )
}
