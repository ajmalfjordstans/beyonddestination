import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import BlogContent from './blog-content'
import Hero from './blog-hero'
import Blogs from '../blogs'

export default function Page() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <BlogContent /> */}
      <Blogs />
      <Footer />
    </>
  )
}
