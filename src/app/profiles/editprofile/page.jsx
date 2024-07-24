'use client'

import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import app from '../../../../lib/firebase';
import Image from 'next/image';
import Menu from '@/app/component/profile/Editmenu'

const Edit = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    username: '',
    company: '',
    description: '',
    favorites: [],
    likesCount: 0,
    uploads: [],
    uploadsCount: 0
  });
  const auth = getAuth(app);
  const db = getFirestore();
  const router = useRouter();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile({ ...profile, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleEditProfile = async () => {
    await updateDoc(doc(db, "users", user.uid), {
      username: profile.username,
      company: profile.company,
      description: profile.description,
    });
    alert("Profile updated!");
    router.push('/profiles');
  };

  const redirect = () =>{
    router.push('/login');
  }
  const NavToEditprofile = () =>{
    router.push('/profiles/editprofile');
  }

  return (
    <section className=''>
     <nav className='w-full px-8 flex justify-between py-8 bg-white'>
        <div className='flex items-center gap-6'>
            <h1 className='text-2xl font-bold text-black'>Piexl Snap</h1>
            <a href="/" className='lg:flex hidden'>
                <button className='text-xs text-black font-medium'>Go Pro</button>
            </a>
            <a href="/" className='lg:flex hidden'>
                <button className='text-xs text-black font-medium'>Help</button>
            </a>
        </div>
        <div>
            <div className='border-3 border-pink-300 rounded-full'>
              {!user ? (
                 <button onClick={redirect}></button>
              ) : (
                <div className='flex gap-6'>
                    <button className=' hidden lg:flex text-xs text-white px-4 py-2 bg-red-600 rounded-md'>sign out</button>
                    <Image src={user.photoURL} alt="User Avatar" width={30} height={30} className='rounded-full' />
                 </div>
              )}
            </div>
        </div>
     </nav>
    <div className=' h-screen bg-white py-8 lg:px-12'>
      {user && profile ? (
        <div className='flex gap-12 items-center justify-center'>
            <Menu/>
            <div>
              <div className='mb-2 flex flex-col '>
                  <label htmlFor="" className='text-xs mb-2 text-black'>username</label>
                  <input type="text" value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} className='w-[300px] text-xs px-4 h-10 border border-gray-300 rounded-lg text-black' />
              </div>
              <div className='mb-2 flex flex-col '>
                  <label htmlFor="" className='text-xs mb-2 text-black'>company</label>
                  <input type="text" value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} className='w-[300px] text-xs px-4 h-10 border border-gray-300 rounded-lg text-black' />
              </div>
              
              <div className='mb-2 flex flex-col '>
                  <label htmlFor="" className='text-xs mb-2 text-black'>email</label>
                  <input type="text" value={user.email} className='w-[300px] text-xs px-4 h-10 border border-gray-300 rounded-lg text-black' />
              </div>
              <button onClick={handleEditProfile} className='px-4 py-2 bg-black text-xs text-white font-medium'>Save Profile</button>
            </div>
        </div>
      ) : (
          <p className='text-black'>Loading...</p>
        )}
    </div>
    </section>
  );
};

export default Edit;
