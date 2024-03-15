import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function RegisterForm({ setShowForm }) {
  // Validation function
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    }
    // Add validation for other fields as needed
    return errors;
  };

  // Submit function
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setShowForm(false)
    }, 400);
  };
  return (
    <div className='fixed h-[100vh] w-[100vw] top-0 left-0 backdrop-blur-sm flex justify-center items-center z-[100]'>
      <div className='bg-white rounded-3xl p-[20px] max-w-[600px] w-full shadow-lg text-black'>
        <div className=" mx-auto">
          <div className='flex justify-between'>
            <h2 className="text-2xl font-bold mb-4">Tour Guide Registration</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <Formik
            initialValues={{
              email: '',
              phone: '',
              firstName: '',
              lastName: '',
            }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className='flex gap-3'>
                  <div className='w-full'>
                    <label htmlFor="firstName" className="block font-semibold">First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      className="input border-[1px] w-full p-[3px]"
                      placeholder="Enter your first name"
                    />
                    <ErrorMessage name="firstName" component="div" className="text-red-500 text-[14px]" />
                  </div>
                  <div className='w-full'>
                    <label htmlFor="lastName" className="block font-semibold">Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      className="input border-[1px] w-full p-[3px]"
                      placeholder="Enter your last name"
                    />
                    <ErrorMessage name="lastName" component="div" className="text-red-500 text-[14px]" />
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='w-full'>
                    <label htmlFor="email" className="block font-semibold">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="input border-[1px] w-full p-[3px]"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-[14px]" />
                  </div>
                  <div className='w-full'>
                    <label htmlFor="phone" className="block font-semibold">Phone</label>
                    <Field
                      type="text"
                      name="phone"
                      className="input border-[1px] w-full p-[3px]"
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-[14px]" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                >
                  {isSubmitting ? 'Submitting...' : 'Register'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
