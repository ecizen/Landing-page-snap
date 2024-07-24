'use client'
import React,{useState, useEffect} from 'react'
import {onAuthStateChanged, getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import 'firebase/app'
import ProfileModal from './ProfileModal';
import app from '../../../../lib/firebase'
import Image from 'next/image';

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [showProfile, setProfile] = useState(false)
   const [user, setUser] = useState(null);
   const auth = getAuth(app);
   const router =  useRouter()

   const handleShow = () =>{
     setProfile(!showProfile)
   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if (user){
        setUser(user);
        console.log('User is unsubscribed', user)
      } else {
        router.push('/signin')
    }
  });

  return () => unsubscribe();
  }, [auth, user]);

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
        {!user ? (
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Get Started</button>       
        ) : (
          <div>
          <div onClick={handleShow}  className='flex gap-2 items-center px-2 py-2 hover:bg-[#EEECFF] hover:border rounded-md hover:border-[#5D50C6] group cursor-pointer transition-all ease-in-out duration-300'>
            <div className='border-3 border-pink-300 rounded-full'>
                <Image src={user.photoURL} alt="User Avatar" width={30} height={30} className='rounded-full' />
            </div>
            <p className='md:flex  hidden text-sm font-bold text-black group-hover:text-[#5D50C6]'>{user.displayName}</p>
        </div>
        <div className={` ${showProfile ? 'flex' : 'hidden'}`}>
           <ProfileModal />
        </div>
          </div>
       
        )}
      </div>
   </div>
  )
}
