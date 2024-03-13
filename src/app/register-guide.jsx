'use client'
import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function RegisterGuide() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='grid grid-cols-2 gap-7 mt-[30px]'>
      <div className='flex flex-col gap-4'>
        <p className='font-[500] text-[40px] tracking-wide'>Travel Agent Registration</p>
        <p className='text-[16px]'>Beyond Destination provides elite service tailored to travel guides. We go out of our way to ensure safety, quality and comfort of your customers. In addition, we offer attractive commissions to help you grow your business.</p>
        <Button
          className='bg-white text-primary font-[500] w-[240px]'
        >Register Now</Button>
      </div>
      <div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-2 rounded-lg border border-[#fbf7fc] overflow-hidden ">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 bg-[#fbf7fc] transition-colors p-[20px] text-black shadow-xl ${open === 1 ? "text-primary" : ""}`}
          >
            Immediate availability
          </AccordionHeader>
          <AccordionBody className="p-[20px] text-base font-normal bg-white">
            Book online 24/7 with immediate confirmation. With Beyond Destination, you have real time availability and hassle free booking.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-2 rounded-lg border border-[#fbf7fc] overflow-hidden">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 bg-[#fbf7fc] transition-colors p-[20px] text-black shadow-xl ${open === 2 ? "text-primary" : ""}`}
          >
            Priority support
          </AccordionHeader>
          <AccordionBody className="p-[20px] text-base font-normal bg-white">
            A professional support team is accessible 24/7 to assist with any day to day needs including on-site requirements. Our services ensure customer satisfaction.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="mb-2 rounded-lg border border-[#fbf7fc] overflow-hidden">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 bg-[#fbf7fc] transition-colors p-[20px] text-black shadow-xl ${open === 3 ? "text-primary" : ""}`}
          >
            Best service guaranteed
          </AccordionHeader>
          <AccordionBody className="p-[20px] text-base font-normal bg-white">
            Make bookings for your clients with assurance of offering them the best possible price and getting the best benefit for you and your client.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}
