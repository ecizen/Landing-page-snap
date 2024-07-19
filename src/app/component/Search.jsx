'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import ImageIcon from '../asset/image/ImageIcon.svg'
import Arrow from '../asset/image/arrow.svg'


export default function Search() {

    const [category, setGategory] = useState(false);

    const handleCategory = () => {
        setGategory(!category);
    }
  return (
    <div className='w-full flex justify-center '>
            <div onClick={() => handleCategory()} className={`w-[160px] h-14 ${category ? 'bg-gray-200': 'bg-white'} bg-white lg:flex md:flex hidden items-center justify-around px-4 rounded-l-lg relative`}>
                <div className='flex gap-2 items-center'>
                    <Image src={ImageIcon} className='lg:block hidden' alt='image-icon'/>
                    <p className='text-black text-sm text-center'>Assets</p>
                </div>
                <Image src={Arrow} className={ `${category ? 'rotate-180': 'rotate-0'}`} alt='arrow-icon'/>
            <div className={` ${category ? 'flex' : 'hidden'} absolute -bottom-[190px] shadow-[0px_1px_16px_0px_#0000004d]  `}>
                <div className='w-[160px]  bg-white  flex flex-col justify-center  rounded-lg overflow-hidden '>
                   <a href="" className='text-black text-sm text-center px-4 py-2 hover:bg-gray-200'>Image</a>
                   <a href="" className='text-black text-sm text-center px-4 py-2 hover:bg-gray-200'>Video</a>
                   <a href="" className='text-black text-sm text-center px-4 py-2 hover:bg-gray-200'>Icon</a>
                   <a href="" className='text-black text-sm text-center px-4 py-2 hover:bg-gray-200'>Template</a>
                   <a href="" className='text-black text-sm text-center px-4 py-2 hover:bg-gray-200'>Video</a>
                </div>
            </div>
            </div>
        <input type="text" className='lg:w-[50%] w-[70%]  lg:rounded-none rounded-l-lg h-14 bg-white  border-l border-gray-200 px-4 text-sm text-black' placeholder='Search all assets' />
        <div className='lg:w-[150px] px-2 py-2 bg-white rounded-r-lg'>
            <button className='bg-blue-500 lg:w-full md:w-full w-[100px] h-10 rounded-lg'>Search</button>
        </div>
    </div>
  )
}
