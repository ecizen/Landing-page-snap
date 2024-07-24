import React from 'react'
import  iconuser from '../asset/image/User.svg'
import PreviewImage from '../asset/image/Preview.svg'
import PreviewImage2 from '../asset/image/Prev1.svg'
import PreviewImage3 from '../asset/image/Prev2.svg'
import PreviewImage4 from '../asset/image/Prev3.svg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default function Preview() {

    const Preview = [
        {
            id: 1, iconuser: iconuser, name: 'Acme Inc', like: '1.2K', image: PreviewImage, 
        },
        {
            id: 2, iconuser: iconuser, name: 'Acme Inc', like: '11.9K', image: PreviewImage2 
        },
        {
            id: 3, iconuser: iconuser, name: 'Acme Inc', like: '4.2K', image: PreviewImage3 
        },
        {
            id: 4, iconuser: iconuser, name: 'Acme Inc', like: '100', image: PreviewImage4 
        },
    ]

  return (
    <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-4'>
        {Preview.map((preview) => (
            <div key={preview.id} className='w-full bg-white'>
                <a href={preview.id}>
                <Image src={preview.image} alt='preview' className='w-full h-40 object-cover hover:brightness-50 transition-all duration-300 ease-in-out' />
                 </a>     
                <div className='lg:flex hidden mt-4 justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <div className='p-1 rounded-full border border-gray-200'>
                            <Image src={preview.iconuser} alt='user' className='w-6 h-6 ' />
                        </div>
                        <p className='text-black text-sm font-medium'>{preview.name}</p>
                    </div>
                    <div className=' flex items-center gap-4'>
                        <FontAwesomeIcon icon={faHeart} width={18} className='text-black'/>
                        <p className='text-sm text-black'>{preview.like}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
