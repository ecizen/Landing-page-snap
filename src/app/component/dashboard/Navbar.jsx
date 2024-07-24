'use client'
import React,{ useEffect, useState} from 'react'
import {onAuthStateChanged, getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import app from '../../../../lib/firebase'

export default function Navbar() {
    const router = useRouter()
    const auth = getAuth();
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
          if (user){
            setUser(user);
            console.log('User is unsubscribed', user)
          } else {
            router.push('/')
        }
      });
    
      return () => unsubscribe();
      }, [auth, user]);
  
  return (
    <nav className='w-full px-12 py-8 bg-white flex items-center justify-between'>
        <div className='flex items-center gap-4'>
            <h1 className='text-2xl font-bold text-black'>Piexl Snap</h1>
            <p className='text-sm text-black'>Go Premium</p>
        </div>
        <div className=''>
            {!user ? (
                <button onClick={() => router.push('/signin')} className='text-xs text-black font-medium'>Sign In</button>
            ) : (
                <div className='flex gap-6 items-center'>
                    <input type="text" name="" id="" className='w-full max-w-80 h-10 bg-white rounded-full px-4 border border-gray-300' placeholder='search...'/>
                    <div className='border-3 border-pink-300 rounded-full'>
                        <Image src={user.photoURL} alt="User Avatar" width={30} height={30} className='rounded-full' />
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}
