import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className='min-h-[60vh] flex flex-col items-center justify-center text-center px-4'>
        <p className='text-7xl sm:text-9xl font-semibold text-[#1ABC9C]'>404</p>
        <h1 className='mt-4 text-2xl sm:text-3xl font-semibold text-gray-700'>Page not found</h1>
        <p className='mt-2 max-w-md text-gray-500'>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className='mt-6 bg-[#1ABC9C] text-white px-6 py-2 rounded hover:scale-105 transition-all cursor-pointer'
        >
          Back to Home
        </button>
      </div>
      <Footer />
    </>
  )
}

export default NotFound
