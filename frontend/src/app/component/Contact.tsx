'use client'

import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FaWhatsapp } from "react-icons/fa";

const initialValues = {
  name: '',
  email: '',
  project: '',
  message: ''
}

export default function CreativeStudioContact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (values: typeof initialValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log(values)
    setSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-4xl relative">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-12 md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-semibold text-white mb-6 font-title">Let's create something amazing together!</h2>
              <p className="text-blue-100 mb-6 font-title">Fill out the form and we'll be in touch as soon as possible.</p>
            </div>
            <div className="flex space-x-4">
              {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div> */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div> <p className='text-white mt-1 font-semibold'>7988703011 / 7366042663 </p>
              {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div> */}
            </div>
          </div>
          
          <div className="p-12 md:w-3/5">
            <h3 className="text-3xl font-bold mb-6 gradient-text font-title">Get in Touch</h3>
            
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {['name', 'email', 'project'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 font-title">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <Field
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        id={field}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md font-title focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                        placeholder={`Enter your ${field}`}
                      />
                    </div>
                  ))}
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-title">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border font-title border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-title bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        
        {/* {isSubmitted && (
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2">Thanks for reaching out!</h3>
            <p className="text-gray-600">We'll get back to you with some creative ideas soon.</p>
          </div>
        )} */}
      </div>

           <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg animate-bounce hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  )
}


