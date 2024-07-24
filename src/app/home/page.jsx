import React from 'react'
import '../style/style.css'
import Search from '../component/Search'
import Category from '../component/Category'
import Preview from '../component/Preview'
import Ezy from '../component/Ezy'
import Fav from '../component/Fav'
import Benefit from '../component/Benefit'
import Testimoni from '../component/Card/Testimoni'
import InfiniteCard from '../component/Card/InfiniteCard'


export default function page() {
  return (
    <div className='max-h-max'>
      <section className='home  py-8 lg:px-8 px-4 '>
          <div className='flex flex-col h-[565px]  justify-center  '>
              <div className='flex items-center justify-center flex-col'>
                  <h1 className='text-6xl text-wrap font-bold text-center '>Discover the Best Creative Resources</h1>
                  <p className='mt-6 lg:text-sm text-xs text-gray-200 max-w-2xl text-center font-medium'>Refero is your one-stop destination for high-quality photos, vectors, illustrations, icons, fonts, templates, and 3D assets. Explore our vast collection and elevate your creative projects.</p>
              </div>
              <div className='mt-8'>
                <Search/>
              </div>
          </div>
      </section>
      <div className=' bg-white pt-8 lg:px-8 px-0'>
        <Preview />
      </div>
      <section className=' bg-white max-h-max lg:px-8 px-4 py-8 lg:py-12'>
          <h1 className='lg:text-6xl text-3xl text-slate-900 font-semibold  text-center'>Explore our photo <span className='text-blue-600'>categories</span></h1>
          <div className='flex justify-center'>
            <p className='text-sm text-gray-500 max-w-2xl text-center mt-4 line leading-relaxed '>Browse our extensive library of high-quality photos across a variety of categories to find the perfect image for your project.</p>
          </div>
          <div className='mt-8'>
              <Category/>
          </div>
      </section>
      <section className='bg-white lg:px-8 px-4 lg:py-12 py-8'>
          <h1 className='text-2xl font-semibold text-black'>Easy and short to find</h1>
          <p className='text-sm text-gray-500 mt-2'>Find the photos you want easily based on the topics below</p>
          <div className='mt-6'>
           <Ezy/>
          </div>
      </section>
      <section className=' bg-white py-8 px-8'>
         <h1 className='text-4xl text-center text-black font-semibold'>Favorite <span className='text-blue-500'>Photos</span></h1>
         <p className='text-sm text-gray-500 text-center mt-2'>Designers' favorite tar assets of the week</p>
         <div className='mt-6'>
            <Fav/>
         </div>
      </section>
      <section className=' bg-white py-12 lg:px-8 px-4'>
         <div className='flex flex-col items-center'>
            <h1 className='lg:text-4xl text-2xl font-bold text-black'> <span className='text-blue-600'>Unlock</span> Your Creative Potential</h1>
            <p className='lg:text-md text-center flex-wrap text-gray-500 mt-2'>Discover the benefits of our comprehensive design resources platform.</p>
         </div>
         <div className='mt-6'>
           <Benefit/>
         </div>
      </section>
      <section className='lg:px-24 px-8 lg:py-24 py-16 bg-[#F4F4F5]'>
           <h1 className='text-center lg:text-4xl text-2xl text-black font-bold'>What Our Customers Say</h1>
           <p className='text-md text-gray-500 mt-2 text-center'>Hear from our satisfied customers about their experience with our platform.</p>
          <div className='mt-8'>
             <Testimoni/>
          </div>
      </section>
      <section className=' px-8 py-12 bg-white flex flex-col items-center'>
         <h1 className='lg:text-4xl text-2xl max-w-2xl text-center font-semibold text-black flex flex-wrap'>Unlock Your Creative Potential with Our Premium Subscription</h1>
         <p className='text-md text-gray-500 lg:max-w-3xl  text-center mt-4'>Explore a vast library of high-quality photos, icons, vectors, templates, and design resources to elevate your creative projects.</p>
         <div className='flex gap-3 items-center mt-4'>
            <button className='text-white text-sm bg-blue-600 hover:bg-blue-800 px-8 py-2 rounded-md transition-all ease-in-out duration-300'>Subscribes</button>
            <button className='text-black text-sm bg-white border border-gray-400 px-8 py-2 rounded-md hover:border-none hover:bg-gray-200'>Contact us</button>
         </div>
      </section>
      <section className=' py-12 bg-white'>
        <div className='flex flex-col space-y-8'>
          <div>
             <InfiniteCard direction="left"/>
          </div>   
        </div>
      </section>
    </div>
  )
}
