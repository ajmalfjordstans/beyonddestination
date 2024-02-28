import Navbar from '@/components/navbar'
import React from 'react'
import Hero from './destinations-hero'
import DestinationsContent from './destinations-content'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero/>
      <DestinationsContent/>
      <Footer/>
    </>
  )
}
