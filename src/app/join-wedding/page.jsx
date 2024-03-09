import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Hero from './hero'
import Wedding from './wedding'
import Featured from './featured'
import Banner from './banner'
import Testimonials from './testimonials'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Wedding />
      <Featured />
      <Banner />
      <Testimonials/>
      <Footer />
    </div>
  )
}
