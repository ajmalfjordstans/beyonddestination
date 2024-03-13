'use client'
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react'

const initialFormState = {
  name: '',
  contactNumber: '',
  email: '',
  companyName: '',
  operatingCity: ''
};


export default function PartnerForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data
      console.log('Form submitted:', formData);
      // Reset the form
      setFormData(initialFormState);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact number must be 10 digits';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      valid = false;
    }

    if (!formData.operatingCity.trim()) {
      newErrors.operatingCity = 'Operating city is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  return (
    <div className='bg-[#F4F1DE] p-[20px] rounded-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='border-primary border-[1px] rounded-lg p-[15px] bg-inherit'
          />
          {errors.name && <span className="text-[red] text-[14px]">{errors.name}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className='border-primary border-[1px] rounded-lg p-[15px] bg-inherit'
          />
          {errors.contactNumber && <span className="text-[red] text-[14px]">{errors.contactNumber}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='border-primary border-[1px] rounded-lg p-[15px] bg-inherit'
          />
          {errors.email && <span className="text-[red] text-[14px]">{errors.email}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className='border-primary border-[1px] rounded-lg p-[15px] bg-inherit'
          />
          {errors.companyName && <span className="text-[red] text-[14px]">{errors.companyName}</span>}
        </div>
        <div className='flex flex-col gap-1'>
          <label>Operating City:</label>
          <input
            type="text"
            name="operatingCity"
            value={formData.operatingCity}
            onChange={handleChange}
            className='border-primary border-[1px] rounded-lg p-[15px] bg-inherit'
          />
          {errors.operatingCity && <span className="text-[red] text-[14px]">{errors.operatingCity}</span>}
        </div>
        <Button type="submit" className='bg-primary text-white'>Submit</Button>
      </form>
    </div>
  )
}
