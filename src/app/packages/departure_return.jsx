import React from 'react'

export default function DepartureReturn() {
  return (
    <div className='flex flex-col gap-6'>
      <p ><span className='font-[700] mr-1'>Start:</span>Multiple meeting point options.</p>

      <div className='flex gap-2'>
        <div className='w-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='w-[80px]'>
            <p className='bg-slate-300 rounded-sm p-1 font-[600] '>
              Option 1
            </p>
          </div>
          <p className='font-[700]'>Hotel Riu Plaza The Gresham Dublin, 23 O&apos;Connell Street Upper, North City, Dublin, D01 C3W7, Ireland</p>
          <p >Departure is at 6.55 AM. Please meet us outside the front of the Gresham hotel 10 minutes before departure time. Guide will be on the pavement with the passengers manifest. The coach is grey in colour with a logo of a dog as the livery.</p>
        </div>

      </div>
      <div className='flex gap-2'>
        <div className='w-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='w-[80px]'>
            <p className='bg-slate-300 rounded-sm p-1 font-[600] '>
              Option 2
            </p>
          </div>
          <p className='font-[700]'>Ulster Bank, 33 College Green, Dublin, D02 DD76, Ireland</p>
          <p >Departure is at 7 AM. Please meet us outside the Ulster Bank (50 metres from the front gates of Trinity College overlooking the street fountain) 10 minutes before departure time. Coach will arrive after the first pick up, it is grey in colour with a big logo of a dog as part of livery.</p>
        </div>
      </div>

      <span className='font-[700] mr-1'>End:</span>


      <div className='flex gap-2'>
        <div className='w-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
        <div className='flex flex-col gap-2'>
          {/* <div className='w-[80px]'>
            <p className='bg-slate-300 rounded-sm p-1 font-[600] '>
              Option 3
            </p>
          </div> */}
          <p className='font-[700]'>D&apos;Olier Street, Dublin, Ireland</p>
          <p >Coach will return to Dublin City at approximately 8 PM. Drop off is on D&apos;Olier Street, 100 metres from O&apos;Connell Bridge and near Trinity College.</p>
        </div>
      </div>
    </div>
  )
}
