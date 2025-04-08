import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'

export default function PaymentSuccess() {
    const redirect=useNavigate();
return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500'>
        <div className='w-11/12 md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg'>
            <div className='flex justify-center mb-4'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-12 w-12 text-green-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                    />
                </svg>
            </div>
            <h1 className='text-3xl font-bold text-center text-gray-800'>Payment Successful</h1>
            <p className='text-lg text-center text-gray-600 mt-2'>Thank you for shopping with us</p>
            <div className='flex justify-center mt-4'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2' onClick={() => {redirect("/profile"); window.scrollTo(0,0)} }>Profile</button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded' onClick={() => {redirect("/"); window.scrollTo(0,0)} }>Home</button>
            </div>
        </div>
    </div>
)
}
