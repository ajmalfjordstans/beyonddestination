'use client'

import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import RegisterForm from './register-form'

export default function Register() {
  const [showForm, setShowForm] = useState(false)
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [showForm])


  return (
    <div>
      <div className='container mx-auto px-[5%] md:px-[10%] my-[30px]' id='register'>
        <div className='w-[70%] h-[350px] mx-auto rounded-2xl overflow-hidden shadow-xl grid grid-cols-2 relative'>
          <div className='p-[30px] text-white bg-[#722F37]'>
            <p className='font-[500] text-[28px]'>Register as a <br /> Tour Guide with us</p>
            <p className='font-[300] text-[16px] mt-[30px]'>Benefits of joining as a tour guide</p>

            <Button
              className='bg-[#FFA500] text-[#722F37] px-[10px] py-[3px] mt-[25px] rounded-md flex gap-2 items-center'
              onClick={() => setShowForm(true)}
            >Click To Register
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#722F37" className="w-6 h-6">
                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
          <div className='bg-guidebanner bg-cover'>
          </div>
        </div>
      </div>
      {showForm && <RegisterForm setShowForm={setShowForm} />}
    </div>
  )
}
