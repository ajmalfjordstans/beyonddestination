import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import PackageContent from './package-content'

export default function Page() {
  return (
    <div>
      <Navbar />
      <PackageContent />
      <Footer />
    </div>
  )
}
