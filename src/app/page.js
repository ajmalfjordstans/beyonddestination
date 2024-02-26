'use client'
import Image from 'next/image'

//Store
import { updateUser } from '@/state/user-reducer'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '@/components/navbar'
import Hero from './hero'
import Banner from './banner'
import Packages from './packages'
import Categories from './categories'
import WineTasting from './wine-tasting'
import TourGuide from './tour-guide'
import Footer from '@/components/footer'

export default function Home() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const updateUserHandler = (id) => [
    dispatch(updateUser({
      id
    }))
  ]
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Banner />
      <Packages />
      <Categories />
      <WineTasting />
      <TourGuide />
      <Footer />
      {/* 
      Our Packages
      Tours by category
      Wine Tasting
      Find Tour Guide
      List tour guides
      Register Tour guide
      */}
    </div>
  )
}