'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";

export default function Footer() {
  const { countries } = useCountries();
  return (
    <div className='bg-third pt-[50px] pb-[15px]'>
      <div className='container mx-auto w-full'>
        <div className='text-white container px-[5%]'>
          <div>
            <div className='flex justify-around pr-[3%] pb-[25px] font-[300]'>
              <div className='flex flex-col gap-2'>
                <Image src='/images/logo_3.jpeg' height={600} width={600} alt='logo' className='h-[215px] w-[240px] mx-auto' />
                <p>Address</p>
                <p>Mail</p>
                <p>Phone Numbers</p>
                <div className='bg-black rounded-2xl h-[110px] w-[300px] my-[20px] p-[15px] hover:cursor-pointer flex justify-between items-center gap-4 hover:bg-gray-800 transition-all duration-300 text-white'>
                  <p className='font-[600] text-[24px]'>Become a<br /> partner with us</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>

                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-[500] mb-[15px]'>TOP DESTINATIONS</p>
                <p className='hover:cursor-pointer'>New York City</p>
                <p className='hover:cursor-pointer'>Paris</p>
                <p className='hover:cursor-pointer'>Italy</p>
                <p className='hover:cursor-pointer'>Costa Rica</p>
                <p className='hover:cursor-pointer'>Japan</p>
                <p className='hover:cursor-pointer'>USA</p>
                <p className='hover:cursor-pointer'>Amsterdam</p>
                <p className='hover:cursor-pointer'>Portugal</p>
                <p className='hover:cursor-pointer'>Cancun</p>
                <p className='hover:cursor-pointer'>Chicago</p>
                <p className='hover:cursor-pointer'>England</p>
                <p className='hover:cursor-pointer'>Tokyo</p>
                <p className='hover:cursor-pointer'>Explore More Destinations</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-[500] mb-[15px]'>TRAVEL INTERESTS</p>
                <p className='hover:cursor-pointer'>Adventure Travel</p>
                <p className='hover:cursor-pointer'>Art and Culture</p>
                <p className='hover:cursor-pointer'>Beaches, Coasts and Islands</p>
                <p className='hover:cursor-pointer'>Family Holidays</p>
                <p className='hover:cursor-pointer'>Festivals</p>
                <p className='hover:cursor-pointer'>Food and Drink</p>
                <p className='hover:cursor-pointer'>Honeymoon and Romance</p>
                <p className='hover:cursor-pointer'>Road Trips</p>
                <p className='hover:cursor-pointer'>Sustainable Travel</p>
                <p className='hover:cursor-pointer'>Travel on a Budget</p>
                <p className='hover:cursor-pointer'>Wildlife and Nature</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-[500] mb-[15px]'>SHOP</p>
                <p className='hover:cursor-pointer'>Destination Guides</p>
                <p className='hover:cursor-pointer'>Lonely Planet Kids</p>
                <p className='hover:cursor-pointer'>Lonely Planet Shop</p>
                <p className='hover:cursor-pointer'>Non-English Guides</p>
                <p className='font-[500] mt-[30px] mb-[15px]'>ABOUT US</p>
                <p className='hover:cursor-pointer'>About Lonely Planet</p>
                <p className='hover:cursor-pointer'>Contact Us</p>
                <p className='hover:cursor-pointer'>Trade and Advertising</p>
                <p className='hover:cursor-pointer'>Privacy Policy</p>
                <p className='hover:cursor-pointer'>Terms and Conditions</p>
                <p className='hover:cursor-pointer'>Work For Us</p>
                <p className='hover:cursor-pointer'>Write For Us</p>
                <p className='hover:cursor-pointer'>Cookie Settings</p>
              </div>

            </div>

          </div>
          <div className='flex justify-between pt-3'>
            <div className='flex justify-between w-full'>
              <div className='flex gap-2'>
                <Image src='/images/logo_2.png' height={100} width={100} alt='logo' className='h-[45px] w-[40px]' />
                <div>
                  <p className='text-[12px]'>© 2024 Beyond Destination LLC All rights reserved.</p>
                  <div className='underline text-[14px] capitalize flex gap-2'>
                    <p className='hover:cursor-pointer'>Terms of Use</p>
                    <p className='hover:cursor-pointer'>Privacy and Cookies Statement</p>
                    <p className='hover:cursor-pointer'>Cookie Consent</p>
                    <p className='hover:cursor-pointer'>How the site works</p>
                    <p className='hover:cursor-pointer'>Contact us</p>

                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {/* <Select
                  size="lg"
                  label="Select Country"
                  selected={(element) =>
                    element &&
                    React.cloneElement(element, {
                      disabled: true,
                      className:
                        "flex items-center opacity-100 px-0 gap-3 pointer-events-none",
                    })
                  }
                >
                  {countries.map(({ name, flags }) => (
                    <Option key={name} value={name} className="flex items-center gap-2 text-black">
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name}
                    </Option>
                  ))}
                </Select> */}
                <div className='flex gap-2'>
                  <select
                    className='bg-inherit border-[1px] border-white w-[200px] rounded-2xl p-[10px]'
                    defaultValue={`$  U.S. Dollars`}
                  >
                    <option className="flex items-center gap-2 text-black rounded-md">$  U.S. Dollars  </option>
                    <option className="flex items-center gap-2 text-black rounded-md">$  U.S. Dollars  </option>
                    <option className="flex items-center gap-2 text-black rounded-md">$  U.S. Dollars  </option>
                    <option className="flex items-center gap-2 text-black rounded-md">$  U.S. Dollars  </option>
                    <option className="flex items-center gap-2 text-black rounded-md">$  U.S. Dollars  </option>
                  </select>
                  <select
                    className='bg-inherit border-[1px] border-white w-[200px] rounded-2xl p-[10px]'

                  >
                    {countries.map(({ name, flags }) => (
                      <option key={name} defaultValue={name} className="flex items-center gap-2 text-black rounded-md">
                        {/* <img
                          src={flags.svg}
                          alt={name}
                          className="h-5 w-5 rounded-full object-cover"
                        /> */}
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex gap-10 mx-auto mt-[10px] '>
                  {/* Facebook */}
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 320 512">
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                  {/* X */}
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512">
                      <path
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                  {/* Pinterest */}
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 496 512">
                      <path
                        d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                    </svg>
                  </span>
                  {/*  Instagram  */}
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512">
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
