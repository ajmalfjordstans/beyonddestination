import React from 'react'
import PartnerForm from './partner-form'

export default function Partner() {
  return (
    <div className='container mx-auto px-[5%] py-[60px] '>
      <p className='text-[40px] font-[600] leading-[46px]'>Partner Registration</p>
      <div className='grid grid-cols-2 mt-[20px] gap-10'>
        <div className='flex flex-col gap-4 text-[16px]'>
          <p className='text-[31px] font-[600] leading-[37px]'>Your advantages as a partner</p>
          <div className='flex gap-4 mt-[15px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p>Flexible scheduling- there is no minimum or maximum number of rides.</p>
          </div>
          <div className='flex gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p>No missing out- Get notified when transfers are available.</p>
          </div>
          <div className='flex gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p>Bonus opportunities- attractive bonus opportunities for top performing chauffeurs.</p>
          </div>
          <div className='flex gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p>Reduce downtime- accept as many requests as you can handle.</p>
          </div>
          <div className='flex gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p>Elite account management- stress free management of all your rides with a few clicks.</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 text-[16px]'>
          <p className='text-[31px] font-[600] leading-[37px]'>Register as a partner and work with us</p>
          <p>Fill out the form below and become an Ridewing partner. In case of any further queries, feel free to contact us.</p>
          <PartnerForm />
        </div>
      </div>
    </div>
  )
}
