'use client'
import { useRouter } from 'next/navigation';
import React,{useState, useCallback} from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app, db, storage } from '../../../lib/firebase';
import { useDropzone } from 'react-dropzone';

export default function Page() {
  const router = useRouter()

  const [selectedCategory, setSelectedCategory] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState(null);

  const auth = getAuth(app);
  const user = auth.currentUser;

  const onDrop = useCallback((acceptedFiles) => {
    const selected = acceptedFiles[0];
    if (selected) {
      setFile(selected);

      const fileType = selected.type;
      const reader = new FileReader();
      reader.onloadend = () => {
        if (fileType.startsWith('image/') || fileType.startsWith('video/')) {
          setPreview(reader.result);
        } else {
          setPreview(null);
        }
      };
      reader.readAsDataURL(selected);
      setError(null);
    } else {
      setFile(null);
      setPreview(null);
      setError('Please select a valid file');
    }
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selected);
      setError(null);
    } else {
      setFile(null);
      setPreview(null);
      setError('Please select a valid file');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = async () => {
  if (!file) {
    setError('No file selected');
    return;
  }

  const storageRef = ref(storage, `assets/${user.uid}/${file.name}`);
  const metadata = {
    customMetadata: {
      uid: user.uid
    }
  };
  await uploadBytes(storageRef, file, metadata);

  const url = await getDownloadURL(storageRef);
  const assetData = {
    userId: user.uid,
    url,
    type: file.type,
    title,
    like: '',
    description,
    category,
    tags: tags.split(',').map(tag => tag.trim()),
    createdAt: new Date(),
  };

  await addDoc(collection(db, 'assets'), assetData);

  setFile(null);
  setPreview(null);
  setTitle('');
  setDescription('');
  setCategory('');
  setTags('');
  alert('Asset uploaded successfully');
  router.push('/profiles');
};


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCancel = () => {
    router.push('/profiles')
  }

  return (
    <div className='  bg-[#E6E8EE] mx-auto lg:px-12 md:px-8 px-0 lg:py-8 md:py-8 py-0 '>
      <div className='px-8 lg:py-8 py-4  w-full bg-white rounded-lg  '>
        <div role='nav-card' className='flex justify-between items-center'>
          <button onClick={() => handleCancel()} className='text-xs py-2 px-4 border-gray-300 border text-slate-700 rounded-full font-medium hover:px-6  transition-all ease-in-out duration-300'>Cancel</button>
          <div className='flex gap-2'>
            <button className='px-4 py-2 rounded-full bg-gray-200 hover:bg-black  hover:text-white text-slate-700 text-xs  transition-all ease-in-out duration-300'>Save as draft</button>
            <button onClick={handleUpload} className='px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all ease-in-out duration-300 text-xs'>Continue</button>
          </div>
        </div>
        <div className='py-12'>
          <h1 className='text-2xl font-semibold text-black text-center' role='heading'>What have you been working on?</h1>
          <p className='text-sm text-center text-gray-500 mt-2'>Add your documents and descriptions here, and you can upload</p>
        </div>
        <div 
          {...getRootProps()}
          className="w-full border-2 border-gray-300 border-dashed bg-[#f2f2fb] pt-4 pb-12 cursor-pointer"
          >
          <input  {...getInputProps()}/>
          <h3 className="text-black text-xs font-medium text-center">Drag and drop an image</h3>
          <p className="text-gray-400 text-sm text-center mt-2">Minimum 1600px width recommended. Max 10MB each (20MB for videos)</p>
          <p className="text-center font-bold text-slate-700 text-sm mt-6">Or</p>
          <div className="flex justify-center">
            <button 
              type="button" 
              className="mt-8 px-4 py-2 border border-gray-800 text-black text-xs rounded-full"
            >
              Browse Files
            </button>
          </div>
        </div>
        <div>
          <h1 className='text-md mt-6 font-semibold text-black'>Description Asset</h1>
          <div className='mb-2 mt-2 flex flex-col gap-2'>
            <label htmlFor="" className='text-sm text-black'>File asset</label>
            <input type="file" name="file" onChange={handleFileChange} className='w-full  rounded-md border text-black border-gray-300 text-xs' placeholder='Enter the Title'/>
          </div>
          <div className='mb-2  flex flex-col gap-2'>
            <label htmlFor="" className='text-sm text-black'>Title</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className='text-black w-full h-10 rounded-md border border-gray-300 text-xs px-4' placeholder='Enter the Title'/>
          </div>
          <div className='mb-2 flex flex-col gap-2'>
            <label htmlFor="" className='text-sm text-black'>Description</label>
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className='text-black w-full h-24 rounded-md border border-gray-300 text-xs py-4 px-4' placeholder='Enter the Description'/>
          </div>
          <div className='mb-2 mt-2 flex flex-col gap-2'>
            <label htmlFor="" className='text-sm text-black'>Category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text" className='w-full h-10 rounded-md border border-gray-300 text-xs px-4 gap-4 text-black' placeholder='Enter the Title'>
              <option  className='text-xs text-black py-2' value="">Select category</option>
              <option  className='text-xs text-black py-2' value="design">Design</option>
              <option  className='text-xs text-black py-2' value="development">Development</option>
              <option  className='text-xs text-black py-2' value="marketing">Marketing</option>
            </select>
          </div>
          <div className=' flex flex-col gap-2'>
            <label htmlFor="" className='text-sm text-black'>Tag</label>
            <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} className='text-black w-full h-10 rounded-md border border-gray-300 text-xs px-4' placeholder='Enter Tag'/>
          </div>
        </div>
      </div>
    </div>
  )
}
