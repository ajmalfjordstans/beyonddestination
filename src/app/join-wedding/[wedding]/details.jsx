'use client'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

export default function Details() {
  return (
    <div className='container mx-auto px-[5%] lg:px-[10%] py-[30px]'>
      <div className='flex gap-5'>
        <Image src='/images/indian-wedding.jpg' height={600} width={600} alt='wedding image' className='rounded-2xl overflow-hidden shadow-md w-[60%] object-cover' />
        <div className='w-[40%] '>
          <div className='shadow-xl flex flex-col justify-center items-center gap-3 rounded-2xl'>
            <div className='flex flex-col justify-center items-center gap-3 p-[30px]'>
              <p className='font-[600] text-[26px]'>Aakash & Chandani&apos;s wedding</p>
              <p className='text-[18px] text-center'>Aakash & Chandani would love you to join them on their special day, while traveling in India.</p>
            </div>
            <div className='bg-primary text-white flex flex-col justify-center items-center gap-3 p-[30px]'>
              <p className='text-[18px] text-center'>Your contribution will act as a gift to the couple and includes entry to all ceremonies on all days.</p>
              <p className='font-[600] text-[26px]'>$250 USD
                <span className='font-[400] text-[18px] ml-[5px]'>per person</span>
              </p>
            </div>
            <Button className='text-primary' fullWidth>
              Get Your Invitation
            </Button>
          </div>
        </div>
      </div>

      <div className='flex flex-col my-[40px]'>
        {/* Dates */}
        <div className='flex gap-5'>
          <div className=' text-center shadow-xl'>
            <div className='bg-primary text-white px-[30px] py-[10px]'>
              <p className='font-[600] text-[22px]'>DAY 1</p>
            </div>
            <div className=' text-primary p-[10px] '>
              <p className='font-[400] text-[16px]'>Monday, March 11, 2024</p>
              <p className='text-[16px] text-black'>Jaipur</p>
            </div>
          </div>
          <div className=' text-center shadow-xl'>
            <div className='bg-primary text-white px-[30px] py-[10px]'>
              <p className='font-[600] text-[22px]'>DAY 2</p>
            </div>
            <div className=' text-primary p-[10px] '>
              <p className='font-[400] text-[16px]'>Tuesday, March 12, 2024</p>
              <p className='text-[16px] text-black'>Jaipur</p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className='shadow-2xl p-[20px] mt-[30px] rounded-2xl'>
          <p className='font-[600] text-[22px]'>ABOUT THE HOSTS</p>
          <p className='font-[600] text-[20px] mt-[30px]'>Aakash & Chandani&apos;s story</p>
          <p className='text-[14px] text-gray-500 my-[15px]'>7years ago, Aakash&Chandani, during adolescence, shared a life-altering moment,love atfirstsight.Instead of rushing into romance,they nurtured their connection as friends.Overtime,their bond deepened.However,their families initially opposed their union as intercaste marriages remained a taboo.But Aakash&Chandani&apos;s unwavering trust in one another became the cornerstone of their love.They worked tirelessly to pave the way for their love to flourish.During these years,they achieved remarkable success together.Chandani founded &quot;Mannmani,&quot; her clothing venture, Aakash fulfilled his dream of opening,a dance studio.Together, they conquered challenges and celebrated successes.Recently, they got engaged.Their families stood by their side, recognizing the enduring strength of their love.AakashChandani&apos;s story is a testament to the power of love and friendship.They eagerly await the sound of their wedding bells soon.Join this incredible Love story that reminds us that trueLove knows no boundaries
          </p>
        </div>

        {/* Itinerary */}
        <div className='shadow-2xl p-[20px] mt-[30px] rounded-2xl text-[14px]'>
          <p className='font-[600] text-[22px]'>DAILY ITINERARY</p>
          <div className='flex flex-col gap-2 mt-[30px]'>
            <p className=''>Main language(s) of the wedding: <span className='font-[600] ml-[5px]'>English, Hindi</span></p>
            <p className=''>Diet: <span className='font-[600] ml-[5px]'>Vegetarian</span></p>
            <p className=''>Alcohol offered: <span className='font-[600] ml-[5px]'>No</span></p>
          </div>
          {/* separator */}
          <div className='h-[1px] w-full bg-primary my-[30px]'></div>
          <div className='flex gap-7'>
            <p className='font-[600] text-[20px] mt-[30px]'>DAY 1</p>
            <p className='font-[600] text-[20px] mt-[30px]'>MONDAY, MARCH 11, 2024</p>
            <p className='font-[500] text-[20px] mt-[30px]'>JAIPUR</p>
          </div>
          <div className='my-[15px] flex flex-col gap-2'>
            <p className='font-[300]'>Starting time (approximately): <span className='font-[600] ml-[5px]'>12:00 PM (noon)</span></p>
            <p className='font-[300]'>Venue and host contact details will be disclosed upon booking.</p>
          </div>
          <div className='flex flex-col gap-2 mt-[30px]'>
            <p className=''>Accommodation: <span className='font-[600] ml-[5px]'>Not included</span></p>
            <p className=''>Transportation: <span className='font-[600] ml-[5px]'>Not included</span></p>
          </div>
          <p className='font-[600] text-[18px]'>Haldi, mehndi, sangeet</p>
          <p className='text-[14px] text-gray-500 my-[15px]'>
            The Haldi and Mehndi ceremony is a vibrant & joyous ritual filled with cultural significance. Haldi/turmeric paste, is applied to the bride and groomapos;s skin as a symbol of purification and blessing, while Mehndi involves adorning designs on the brideapos;s hands,signifying love In the case of Chandani & Aakash, their Haldi ceremony is exceptionally special,as they have been inseparable lovebirds for the past 7 years,showcasing their enduring bond. To make the occasion even memorable,their friends will put on a grand dance performance, adding an extra layer of celebration and happiness to this beautiful tradition. In the evening, the festivities continue with a grand Sangeet program, since Chandani and Aakash, both hailing from artistic backgrounds, are set to infuse their wedding celebration with a touch of elegance and creativity.This combination of cultural traditions & heartfelt performances will make the wedding an extraordinary celebration of love and togetherness
          </p>
          <div className='flex flex-col gap-2 mt-[30px]'>
            <p className=''>Dress code: <span className='font-[600] ml-[5px]'>Indian traditional outfit</span></p>
          </div>
          {/* separator */}
          <div className='h-[1px] w-full bg-primary my-[30px]'></div>
          <div className='flex gap-7'>
            <p className='font-[600] text-[20px] mt-[30px]'>DAY 2</p>
            <p className='font-[600] text-[20px] mt-[30px]'>TUESDAY, MARCH 12, 2024</p>
            <p className='font-[500] text-[20px] mt-[30px]'>JAIPUR</p>
          </div>
          <div className='my-[15px] flex flex-col gap-2'>
            <p className='font-[300]'>Starting time (approximately): <span className='font-[600] ml-[5px]'>2:30 PM</span></p>
            <p className='font-[300]'>Venue and host contact details will be disclosed upon booking.</p>
          </div>
          <div className='flex flex-col gap-2 mt-[30px]'>
            <p className=''>Accommodation: <span className='font-[600] ml-[5px]'>Not included</span></p>
            <p className=''>Transportation: <span className='font-[600] ml-[5px]'>Not included</span></p>
          </div>
          <p className='font-[600] text-[18px]'>Shaadi / baraat/ phere/ reception</p>
          <p className='text-[14px] text-gray-500 my-[15px]'>
            The wedding will culminate with the Barat, where Aakash, accompanied by a lively procession of family and friends, will arrive to claim his bride, Chandani. The Barat is not just a celebratory entrance but also a profound ritual symbolizing the groomapos;s commitment and acceptance of his responsibilities. The Pheras, where the couple walks around the sacred fire seven times, are the heart of the wedding, representing the seven vows of marriage, binding them in an unbreakable bond of love, respect, and partnership. The reception, a grand celebration, will be graced by the blessings and well-wishes of family and friends, who have witnessed the transformation of Aakash and Chandaniapos;s friendship into an unbreakable and enduring relationship as husband and wife. Their wedding is not just a union of two hearts but a joyous union of two families, destined to create a lifetime of beautiful memories together.
          </p>
          <div className='flex flex-col gap-2 mt-[30px]'>
            <p className=''>Dress code: <span className='font-[600] ml-[5px]'>Traditional Indian wear</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}
