'use client'
import React,{useState, useEffect} from 'react'

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const Item = [
    {id: 1, label: 'Home', href: '/' },
    {id: 2, label: 'Photos', href: '/photos' },
    {id: 3, label: 'Vectors', href: '/vectorss' },
    {id: 4, label: 'Ilustator', href: '/ilustator' },
    {id: 5, label: 'Template', href: '/template' },
    {id: 6, label: '3D', href: '/3d' },
    {id: 7, label: 'About', href: '/about' },
   ];  

  return (
   <div className={` ${isScrolled ? 'bg-blue-400 z-10' : 'bg-none'} lg:px-8 px-4 py-6 flex justify-between items-center fixed top-0 w-full transition-all duration-300 ease-in-out`}>
      <div>
         <h1 className='text-2xl font-bold text-white'>Piexl Snap</h1>
      </div>
      <ul className='hidden gap-6 lg:flex'>
        {Item.map((item) => (
            <li key={item.id}><a href={item.href} className='text-sm text-white hover:font-semibold hover:bg-blue-500 transition-all duration-300 ease-in-out font-medium'>{item.label}</a></li>
        ))}
      </ul>
      <div>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Get Started</button>
      </div>
   </div>
  )
}
