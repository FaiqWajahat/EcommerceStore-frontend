import React from 'react'
import { IoBagHandleSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { FaMoneyCheck } from "react-icons/fa";

export default function FeatureServices() {
  return (
    <div className='mt-32   lg:px-24 md:px-16 px-4 grid md:grid-cols-3 gap-8 '>
        <div className='flex flex-col items-center  space-y-2 '>
           <IoBagHandleSharp className='h-10 w-10 mb-4' alt='icon' />
            <h3 className='font-semibold uppercase text-center '>Free  Shipping</h3>
            <p className='text-sm text-center tracking-tighter'>On all order over $100</p>
        </div>
        <div className='flex flex-col items-center  space-y-2 '>
           <TfiReload className='h-10 w-10 mb-4' alt='icon' />
            <h3 className='font-semibold uppercase'>45 days return</h3>
            <p className='text-sm text-center tracking-tighter'>Money back gurantee</p>
        </div>
        <div className='flex flex-col items-center  space-y-2 '>
           <FaMoneyCheck className='h-10 w-10 mb-4' alt='icon' />
            <h3 className='font-semibold uppercase '>Secure checkout</h3>
            <p className='text-sm text-center tracking-tighter'>100% secure checkout process</p>
        </div>

        
        
    </div>
  )
}
