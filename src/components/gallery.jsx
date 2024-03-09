'use client'
import Image from 'next/image'
import React from 'react'

export default function Gallery() {
  return (
    <div>
      <div className="grid gap-4">
        <div>
          <Image
            height={900}
            width={1200}
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
            alt="" />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <Image
              height={900}
              width={1200}
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <Image
              height={900}
              width={1200}
              src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <Image
              height={900}
              width={1200}
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <Image
              height={900}
              width={1200}
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <Image
              height={900}
              width={1200}
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
              className="object-cover object-center h-20 max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
