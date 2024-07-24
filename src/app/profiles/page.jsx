'use client'

import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import app from '../../../lib/firebase';
import Image from 'next/image';
import Filter from '../component/profile/Filter';
import Recent from '../component/profile/Recent';

const ProfilePage = () => {
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
  const navUpload = () =>{
    router.push('/upload')
  }
 
  
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
  };

  const redirect = () =>{
    router.push('/login');
  }
  const NavToEditprofile = () =>{
    router.push('/profiles/editprofile');
  }

  return (
    <section className='bg-white'>
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
        <div>
            <div className=''>
                <div className='lg:flex-row flex-col flex items-center gap-2 lg:justify-start justify-center'>
                    <div>    
                        <Image src={user.photoURL} alt="User Avatar" width={60} height={60} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-4 lg:justify-start justify-center'>
                            <h1 className='text-lg font-bold text-black lg:text-left text-center'>{profile.username}</h1>
                        </div>r
                        <div className='flex items-center gap-2'>
                            <p className='text-sm text-gray-400 pr-2 border-gray-300 border-r-2  '>Software Enginer</p>
                            <p className='text-sm text-gray-400 '>Basis Comunity</p>
                        </div>
                    </div>
                </div>
              
            </div>
            <div className='mt-12 flex justify-center'>
                <Filter/>
            </div>
            <div className='mt-8'>
              <Recent/>
            </div>
        </div>
      ) : (
          <p className='text-black'>Loading...</p>
        )}
    </div>
    <div className='fixed bottom-0 inset-x-0 px-8'>
            <button onClick={() => navUpload()} className='px-4 py-2 w-full bg-blue-600 text-xl font-semibold text-white rounded-full'>Upload first shot</button>
     </div>
    </section>
  );
};

export default ProfilePage;
