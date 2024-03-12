import React from 'react'

export default function Login({ setShowLogin }) {
  return (
    <div className='fixed top-0 h-[100vh] w-[100vw] z-[100]'>
      <div className='h-full w-full flex justify-center items-center'>
        <div className='h-[250px] w-[400px] rounded-md bg-[#F4F4F4] shadow-md flex flex-col justify-center items-center gap-3'>
          <div className='flex w-[90%] justify-end'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='w-6 h-6 hover:cursor-pointer'
              viewBox="0 0 512 512"
              onClick={()=>setShowLogin(false)}
            >
              <g fill="none" stroke="#000" strokeWidth="32">
                <path
                  strokeMiterlimit="10"
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                ></path>
                <g strokeLinecap="round" strokeLinejoin="round">
                  <path d="M320 320L192 192M192 320l128-128"></path>
                </g>
              </g>
            </svg>
          </div>
          <p className='text-black mb-[15px] font-[500] text-[18px]'>Please choose one from below</p>
          <div className='text-gray-600 flex items-center gap-3 shadow-lg p-[10px] rounded-md hover:cursor-pointer w-[230px] bg-white'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className='w-6 h-6'
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffc107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              ></path>
              <path
                fill="#ff3d00"
                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              ></path>
              <path
                fill="#1976d2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              ></path>
            </svg>
            <p>Continue with Google</p>
          </div>
          <div className='text-white bg-black flex items-center gap-3 shadow-lg p-[10px] rounded-md hover:cursor-pointer w-[230px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16" className='w-6 h-6'>
              <path
                fill="#fff"
                d="M7.162 1.392C8.208.007 9.662 0 9.662 0s.217 1.302-.822 2.556c-1.11 1.34-2.371 1.12-2.371 1.12s-.237-1.053.693-2.284zm-.56 3.197c.538 0 1.537-.743 2.837-.743 2.238 0 3.118 1.6 3.118 1.6s-1.722.884-1.722 3.03c0 2.42 2.146 3.254 2.146 3.254s-1.5 4.24-3.525 4.24c-.93 0-1.654-.63-2.634-.63-.999 0-1.99.653-2.636.653C2.336 15.993 0 11.972 0 8.739 0 5.559 1.978 3.89 3.833 3.89c1.206 0 2.142.699 2.769.699z"
              ></path>
            </svg>
            <p>Continue with Apple</p>
          </div>
        </div>
      </div>
    </div>
  )
}
