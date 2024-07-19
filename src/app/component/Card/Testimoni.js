import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Testimoni() {
  return (
    <div className='grid gap-6'>
        <div className='bg-white rounded-lg p-6 space-y-4 shadow-sm'>
            <div className='flex gap-6 items-center'>
                <div className=''>
                    <FontAwesomeIcon icon={faUser} className='text-gray-500' width={20}/>
                </div>
                <div data-id="75"><h4 class="font-bold text-black" data-id="76">John Doe</h4><p class="text-gray-500" data-id="77">Designer</p></div>
            </div>
            <div className='mt-4'>
                <p className='text-gray-400'>"I've been using this platform for years and it's been an invaluable resource for my design work. The selection of assets is incredible, and the quality is top-notch. Highly recommended!"</p>
            </div>
        </div>
        <div className='bg-white rounded-lg p-6 space-y-4 shadow-sm'>
            <div className='flex gap-6 items-center'>
                <div className=''>
                    <FontAwesomeIcon icon={faUser} className='text-gray-500' width={20}/>
                </div>
                <div data-id="75"><h4 class="font-bold text-black" data-id="76">John Doe</h4><p class="text-gray-500" data-id="77">Designer</p></div>
            </div>
            <div className='mt-4'>
                <p className='text-gray-400'>"I've been using this platform for years and it's been an invaluable resource for my design work. The selection of assets is incredible, and the quality is top-notch. Highly recommended!"</p>
            </div>
        </div>
        <div className='bg-white rounded-lg p-6 space-y-4 shadow-sm'>
            <div className='flex gap-6 items-center'>
                <div className=''>
                    <FontAwesomeIcon icon={faUser} className='text-gray-500' width={20}/>
                </div>
                <div data-id="75"><h4 class="font-bold text-black" data-id="76">John Doe</h4><p class="text-gray-500" data-id="77">Designer</p></div>
            </div>
            <div className='mt-4'>
                <p className='text-gray-400'>"I've been using this platform for years and it's been an invaluable resource for my design work. The selection of assets is incredible, and the quality is top-notch. Highly recommended!"</p>
            </div>
        </div>
    </div>
  )
}
