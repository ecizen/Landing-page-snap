import React from 'react'
import PreviewImage2 from '../../asset/image/Prev1.svg'

import PreviewImage4 from '../../asset/image/Prev3.svg'
import Image from 'next/image'
import Infinitdata from '@/app/constant/Infinite-data'

export default function InfiniteCard({direction}) {
    const scrollClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  return (
    <div className={`relative overflow-hidden w-full h-64 `}>
      <div className={`absolute ${scrollClass} flex w-full h-full gap-4`}>
        {Infinitdata.map((data) =>(
            <Image src={data.image} alt={data.name} className="object-contain h-64 w-auto" />
        ))}
      </div>
    </div>
  )
}
