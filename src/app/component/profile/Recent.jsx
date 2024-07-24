import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import User from '../../../app/asset/image/User.svg';
import { useRouter } from 'next/navigation';

export default function Recent() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;
  const router  = useRouter()
  const navUpload = () =>{
    router.push('/upload')
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        setError('User is not authenticated');
        setLoading(false);
        return;
      }
      try {
        const assetsQuery = query(collection(db, 'assets'), where('userId', '==', user.uid));
        const assetsSnapshot = await getDocs(assetsQuery);
        const assetsData = [];

        for (const assetDoc of assetsSnapshot.docs) {
          const asset = { id: assetDoc.id, ...assetDoc.data() };

          const userQuery = query(collection(db, 'users'), where('uid', '==', asset.userId));
          const userSnapshot = await getDocs(userQuery);

          if (!userSnapshot.empty) {
            const userDoc = userSnapshot.docs[0];
            asset.username = userDoc.data().username;
          } else {
            asset.username = 'Unknown';
          }

          assetsData.push(asset);
        }

        setAssets(assetsData);
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch assets: ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='grid lg:grid-cols-4 grid-cols-3 lg:gap-4'>
      {assets.map((asset) => (
        <div key={asset.id} className='w-full bg-white'>
          <Image
            src={asset.url}
            alt='preview'
            className='w-full h-40 object-cover hover:brightness-50 transition-all duration-300 ease-in-out'
            width={100}
            height={40}
          />
          <div className='lg:flex hidden mt-4 justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <div className='p-1 rounded-full border border-gray-200'>
                <Image src={User} alt='user' className='w-6 h-6 ' />
              </div>
              <p className='text-black text-sm font-medium'>{asset.username}</p>
            </div>
            <div className='flex items-center gap-4'>
              <FontAwesomeIcon icon={faHeart} width={18} className='text-black' />
              <p className='text-sm text-black'>0</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
