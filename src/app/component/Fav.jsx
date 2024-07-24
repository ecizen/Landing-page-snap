import React from 'react'
import fav from '../constant/Fav-data'
import Image from 'next/image'


export default function Fav() {
  return (
    <div className="grid grid-cols-4 gap-4 grid-flow-row ">
        {fav.map((item) => (   
          <div key={item.id} className={ ` ${item.colspan} relative  group `}>
            <p className='text-md font-semibold text-white absolute bottom-7 left-6 '>{item.name}</p>
              <Image src={item.image} alt={item.alt} className= ' w-full h-64 rounded-md object-cover group-hover:brightness-50  transition-all duration-200 ' >
              </Image>
          </div>
        ))}
    </div>
  )
}
