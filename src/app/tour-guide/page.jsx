import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Register from './register'
import Guides from './guides'
import Hero from './hero'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Guides />
      <Register />
      <Footer />
    </div>
  )
}
