import React from 'react'

export default function TimelineComponent() {
  return (
    <div>

      <ol class="relative border-s border-gray-200">
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg class="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">Adventure Trek in the Himalayas</h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400">Led by Sarah Adams</time>
          <p class="mb-4 text-base font-normal text-gray-500">Embark on a thrilling journey through the majestic Himalayas, exploring remote villages, serene landscapes, and challenging trails. Our adventure trek offers a unique opportunity to connect with nature and discover the hidden gems of the region.</p>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg class="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900">Cultural Immersion in Southeast Asia</h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400">Led by John Smith</time>
          <p class="text-base font-normal text-gray-500">Experience the rich tapestry of cultures in Southeast Asia, from vibrant markets and ancient temples to traditional ceremonies and local cuisine. Our cultural immersion tour offers an authentic glimpse into the heart and soul of this enchanting region.</p>
        </li>
      </ol>


    </div>
  )
}
