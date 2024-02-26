import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#FFA500]'>
      <div className='container mx-auto w-full mt-[160px]'>
        <div className='w-[70%] h-[350px] mx-auto rounded-md translate-y-[-120px] bg-[#722F37] shadow-xl grid grid-cols-2'>
          <div className='p-[30px] text-white'>
            <p className='font-[500] text-[28px]'>Register as a <br /> Tour Guide with us</p>
            <p className='font-[300] text-[16px] mt-[30px]'>Benefits of joining as a tour guide</p>
            <Button
              className='bg-[#FFA500] text-[#722F37] px-[10px] py-[3px] mt-[25px] rounded-md flex gap-2 items-center'
            >Register Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#722F37" className="w-6 h-6">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
          <div className='bg-guidebanner bg-cover'>
          </div>
        </div>

        <div className='text-white container px-[5%] translate-y-[-30px]'>
          <div className='flex justify-between px-[3%] pb-[60px] font-[300]'>
            <div>
              <p className='font-[600] text-[32px] text-primary'>Beyond Destination</p>
              <p>Address</p>
              <p>Mail</p>
              <p>Phone Numbers</p>
            </div>
            <div className='flex gap-12'>
              <div>
                <p className='font-[600] mb-[15px]'>Our Packages</p>
                <p>Package 1</p>
                <p>Package 2</p>
                <p>Package 3</p>
              </div>
              <div>
                <p className='font-[600] mb-[15px]'>Destinations</p>
                <p>Destination 1</p>
                <p>Destination 2</p>
                <p>Destination 3</p>
              </div>
              <div>
                <p className='font-[600] mb-[15px]'>Tour by Category</p>
                <p>Category 1</p>
                <p>Category 2</p>
                <p>Category 3</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between border-t-[1px] pt-3'>
            <p>
              © 2024 Fjordstans.com
            </p>
            <div className='flex gap-5'>
              <p className='hover:cursor-pointer'>Terms</p>
              <p className='hover:cursor-pointer'>Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
