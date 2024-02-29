'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import DepartureReturn from './departure_return';

export function PriceCard() {
  return (
    <div className='w-[40%] h-[300px] border-[2px] rounded-xl sticky top-[10dvh] p-[20px]'>
      <p className='font-[900] text-[26px]'>Reserve your spot</p>
      <div className='flex justify-between items-center py-[13px]'>
        <div className='flex flex-col'>
          <p className='font-[400] text-[16px] text-gray-500'>from</p>
          <p className='font-[600] text-[22px] text-black'>68.00</p>
          <p className='font-[400] text-[16px] text-gray-500'>per adult</p>
        </div>
        <div className='bg-primary text-white px-[20px] py-[10px] rounded-full font-[600] hover:cursor-pointer'>
          Book Now
        </div>
      </div>
      <div className='h-[2px] bg-primary w-full'></div>
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
  )
}

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 200) : text}
      <span
        onClick={toggleReadMore}
        className="text-[16px] hover:cursor-pointer"
        style={{ color: "green" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const CustomAccordion = ({ title, children }) => {
  const [view, setView] = useState(false)
  return (
    <div className='border-b-[1px] border-gray-300 py-[20px]'>
      <div className='flex justify-between hover:cursor-pointer group' onClick={() => setView(!view)}>
        <p className='font-[700] group-hover:underline'>{title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d={`${view ? "m4.5 15.75 7.5-7.5 7.5 7.5" : "m19.5 8.25-7.5 7.5-7.5-7.5"}`} />
        </svg>
      </div>
      {view &&
        <div className='pt-[20px]'>
          {children}
        </div>}
    </div>
  )
}

export default function PackageContent() {
  return (
    <div className='pt-[15dvh] container mx-auto px-[5%] md:px-[10%]'>
      <p className='font-[900] text-[28px]'>Cliffs of Moher Tour Including Wild Atlantic Way and Galway City from Dublin</p>
      <p className='font-[400] text-[16px] text-gray-500'>by Author Name</p>
      <div className='w-[full] h-[60vh] rounded-2xl overflow-hidden  mt-[25px] flex gap-1'>
        <Image
          src="/temp/img25.jpg"
          width={1200}
          height={1200}
          alt='packageImage'
          className='h-full w-[60%] object-cover'
        />
        <div className='flex flex-col w-[40%] gap-1'>
          <Image
            src="/temp/img26.jpg"
            width={900}
            height={900}
            alt='packageImage'
            className='h-[50%] w-[100%] object-cover'
          />
          <Image
            src="/temp/img27.jpg"
            width={900}
            height={900}
            alt='packageImage'
            className='h-[50%] w-[100%] object-cover'
          />
        </div>
      </div>
      <div className='mt-[25px] flex relative '>
        <div className='w-[60%] gap-2 text-[16px] pr-[25px]'>
          <p className='font-[700]'>About</p>
          <div className='py-[15px] '>
            <ReadMore>
              The Cliffs of Moher are located in Burren on the Wild Atlantic Way, a winding coastal road notoriously difficult to navigate. Spend less time reading maps and more time soaking up the scenery on a stress-free tour from Dublin. An experienced driver navigates the roads safely and a guide transports you to premium viewing spots you may have missed if exploring independently. Plus, this tour includes free time to explore Galway, too.
            </ReadMore>
          </div>

          <div className='h-[1px] bg-gray-300 w-full my-[20px]'></div>

          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  d="M1 20v-1a7 7 0 017-7v0a7 7 0 017 7v1"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  d="M13 14v0a5 5 0 015-5v0a5 5 0 015 5v.5"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12a4 4 0 100-8 4 4 0 000 8zM18 9a3 3 0 100-6 3 3 0 000 6z"
                ></path>
              </svg>
              <p>Ages 3-99, max of 63 per group</p>
            </div>
            <div className='flex items-center gap-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                viewBox="0 0 32 32"
              >
                <path d="M15 19h2v2h-2zM15 23h2v2h-2z"></path>
                <path d="M23 11.67V4h3V2H6v2h3v7.67a2 2 0 00.4 1.2L11.75 16 9.4 19.13a2 2 0 00-.4 1.2V28H6v2h20v-2h-3v-7.67a2 2 0 00-.4-1.2L20.25 16l2.35-3.13a2 2 0 00.4-1.2zM21 4v7H11V4zm0 16.33V28H11v-7.67L14.25 16 12 13h8l-2.25 3z"></path>
                <path fill="none" d="M0 0h32v32H0z"></path>
              </svg>
              <p>Duration: 13h</p>
            </div>
            <div className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-5 w-5'>
                <path
                  fill="var(--ci-primary-color, currentColor)"
                  d="M271.514 95.5L239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5z"
                  className="ci-primary"
                ></path>
                <path
                  fill="var(--ci-primary-color, currentColor)"
                  d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240 240-107.452 240-240S388.548 16 256 16zm0 448c-114.875 0-208-93.125-208-208S141.125 48 256 48s208 93.125 208 208-93.125 208-208 208z"
                  className="ci-primary"
                ></path>
              </svg>
              <p>Start time: Check availability</p>
            </div>
            <div className='flex items-center gap-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
                ></path>
                <path fillRule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z"></path>
              </svg>
              <p>Mobile ticket</p>
            </div>
            <div className='flex items-center gap-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className='h-5 w-5'
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 5h7m7 0h-2.5M9 5h4.5M9 5V3m4.5 2c-.82 2.735-2.539 5.32-4.5 7.593M4 17.5c1.585-1.359 3.376-3.026 5-4.907m0 0C8 11.5 6.4 9.3 6 8.5m3 4.093l3 2.907M13.5 21l1.143-3m6.857 3l-1.143-3m-5.714 0l2.857-7.5 2.857 7.5m-5.714 0h5.714"
                ></path>
              </svg>
              <p>Live guide: English</p>
            </div>
          </div>

          <div className='h-[1px] bg-gray-300 w-full my-[20px]'></div>

          <div>
            <p className='font-[700]'>Highlights</p>
            <ul className='list-disc pl-[15px] flex flex-col gap-1 py-[10px]'>
              <li>Save money by bundling your day to the Cliffs of Moher and Galway City</li>
              <li>See the Irish countryside without spending the night outside of the big city</li>
              <li>Ireland is known for its unpredictable rainy weather—ride safely round trip</li>
              <li>Explore both areas on your own without your group holding you back</li>
            </ul>
          </div>

          <div className='h-[1px] bg-gray-300 w-full mt-[20px]'></div>

          <CustomAccordion title='What&apos;s included'>
            <ul className='list-disc pl-[15px] flex flex-col gap-1 pb-[10px]'>
              <li>Professional guide</li>
              <li>Guided walking tour Galway City</li>
              <li>Entrance fees to all attractions. Free unlimited 4G wifi available on the coach. </li>
              <li>Entry/Admission - Cliffs of Moher</li>
            </ul>
            <p className='font-[700]'>What&apos;s not included</p>
            <ul className='list-disc pl-[15px] flex flex-col gap-1 py-[10px]'>
              <li>Food and drinks</li>
            </ul>
          </CustomAccordion>
          <CustomAccordion title='What to expect'>
            <div className='flex flex-col gap-6'>
              <p>
                Your tour starts with convenient pickup from Dublin. Board your luxury tour coach fitted with free Wi-Fi, and get ready for a ride across the Wild Atlantic Way over to the Cliffs of Moher.
              </p>
              <p>Your guide tells you about the Irish countryside as you go. Catch sight of Bunratty Castle and the village of Lahinch before you arrive at one of the most visited attractions in the country. On route to the Cliffs of Moher there is a 20-minute rest break to enjoy a coffee and light snacks (own expense).</p>
              <p>Take your time at the cliffs, admiring the beautiful views of the Atlantic Ocean. Pop into the visitors center for a virtual-reality experience during two hours of free time to explore the surroundings. </p>
              <p>Afterward, it&apos;s off to Galway City where you can take a guided 30-minute introductory tour before getting a chance to explore on your own.</p>
              <p>Your tour ends with a drive back to Dublin with drop-off in the same location you were picked up from.</p>
            </div>
          </CustomAccordion>
          <CustomAccordion title='Departure and return'>
            <DepartureReturn />
          </CustomAccordion>
          <CustomAccordion title='Accessibility'>
            <ul className='list-disc pl-[15px] flex flex-col gap-1 pb-[10px]'>
              <li>Not wheelchair accessible</li>
              <li>Stroller accessible</li>
              <li>Near public transportation</li>
            </ul>
            <p>If you have questions about accessibility, we’d be happy to help. Just call the number below and reference the product code: 5300MOHER</p>
            <p className='font-[700] underline'>+44 12 2492 8241</p>
          </CustomAccordion>
          <CustomAccordion title='Additional information'>
            <ul className='list-disc pl-[15px] flex flex-col gap-1 pb-[10px]'>
              <li>Please be at one of the 2 available pickup locations listed and there 15 minutes before the departure time</li>
              <li>Most travellers can participate</li>
              <li>Pick up points located on the north and south side of the city</li>
              <li>Children 2 years and under are not allowed to travel</li>
              <li>This experience requires good weather. If it&apos;s cancelled due to poor weather, you&apos;ll be offered a different date or a full refund</li>
              <li>This tour/activity will have a maximum of 63 travellers</li>
            </ul>
          </CustomAccordion>
          <CustomAccordion title='Cancellation policy'>
            <p>For a full refund, cancel at least 24 hours in advance of the start date of the experience.</p>
          </CustomAccordion>
          <CustomAccordion title='FAQ'>
            <p>The tour operator has provided the following answers to customers’ questions.</p>
            <div>
              <p className='font-[700] mt-4'>Where is the meeting point?</p>
              <p>The meeting point for this tour is Ulster Bank (33 College Green, next to Abercrombie & Fitch).</p>
              <p className='font-[300] text-[12px]'>Answered Jul 2019</p>
            </div>
            <div>
              <p className='font-[700] mt-4'>What is the pick up location?</p>
              <p>We offer pick ups from some hotels. Let us know where you are staying in the &apos;Special Requirements&apos; box in the Traveler Details section during checkout. Or you can let us know after booking by visiting &apos;Manage my Booking&apos; and emailing us there.</p>
              <p className='font-[300] text-[12px]'>Answered Jul 2019</p>
            </div>
          </CustomAccordion>
          <CustomAccordion title='Help'>
            <p>If you have questions about accessibility, we’d be happy to help. Just call the number below and reference the product code: 5300MOHER</p>
            <p className='font-[700] underline'>+44 12 2492 8241</p>
          </CustomAccordion>
        </div>


        <PriceCard />
      </div>
    </div>
  )
}
