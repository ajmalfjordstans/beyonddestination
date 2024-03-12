import React from 'react'

export default function AboutComponent() {
  return (
    <div>
      <p className='font-[600] text-[14px] text-gray-500'>Contact Information</p>
      <table>
        <tbody className='flex flex-col gap-3 mt-[15px]'>
          <tr>
            <td className='w-[100px]'>Phone:</td>
            <td>+1 123 456 78910</td>
          </tr>
          <tr>
            <td className='w-[100px]'>Address:</td>
            <td>
              123 Main Street,
              Springfield, Anytown,
              State, 12345,
              Country.
            </td>
          </tr>
          <tr>
            <td className='w-[100px]'>Email:</td>
            <td>randommail@gmail.com</td>
          </tr>
          <tr>
            <td className='w-[100px]'>Site:</td>
            <td>www.jeremyrose.com</td>
          </tr>
        </tbody>
      </table>
      <p className='font-[600] text-[14px] text-gray-500 mt-[30px]'>General Information</p>
      <table>
        <tbody className='flex flex-col gap-3 mt-[15px]'>
          <tr>
            <td className='w-[100px]'>Age:</td>
            <td>33</td>
          </tr>
          <tr>
            <td className='w-[100px]'>Gender:</td>
            <td>
              Male
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
