import React from 'react'
import data from '@/app/constant/Ezy-data'
import Image from 'next/image'

export default function Ezy() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4'>
        {data.map((data) => (
        <div  key={data.id} className='w-full relative rounded-md overflow-hidden group'>
            <Image src={data.image} alt={data.name} className='w-full h-40 object-cover group-hover:brightness-50 group-hover:scale-110 transition-all duration-300 ease-in-out'/>
            <div className='absolute flex items-center inset-y-0 left-6'>
                <h2 className='text-lg text-white font-semibold group-hover:opacity-0 transition-all duration-200 ease-in-out'>{data.name}</h2>
            </div>
        </div>
        ))}
    </div>
  )
}
