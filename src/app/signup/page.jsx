'use client'

import '../globals.css'
import { useState, useEffect } from 'react';
import { auth } from '../../../lib/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification,} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import gambar from '../asset/image/Image.jpg';

export default function page() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isVerifying, setIsVerifying] = useState('');

    const handlesignIn = async(e) =>{
        e.preventDefault();
        try{
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredentials.user);
            setMessage('Verification email sent. Please check your inbox.');
            setIsVerifying(true);
        } catch(error){
            setMessage(error.message);
        }
    }

    // bagian redirect ke halaman tertentu jika berhasil
    useEffect(() =>{
        let interval;
        if(isVerifying){
            interval = setInterval(async() =>{
                const user = auth.currentUser;
                if(user){
                    await user.reload();
                    if(user.emailVerified){
                        clearInterval(interval);
                        setMessage("Verification email verified successfully.");
                        router.push('/home')
                    }  
                }
            })
        }
    })
    return (
        <main className="h-screen bg-white grid lg:grid-cols-2 grid-cols-1">
            <div className="bg-red-200 lg:block md:hidden hidden max-h-screen">
                <Image src={gambar} alt="Gambar" className="w-full h-screen object-cover" />
            </div>
            <div className="bg-white lg:py-8 py-4 lg:px-12 px-8 justify-center flex flex-col">
                <h1 className="text-3xl text-black font-semibold text-center">Sign in to your account</h1>
                <p className="text-sm text-black font-medium text-center mt-2">Or
                    <a href="/signup" className="text-blue-500 hover:underline ease-out transition-all duration-300"> register for a new account</a>
                </p>
                <form onSubmit={handlesignIn}  className="mt-6">
                    <div className="mb-6">
                        <input name="email" id="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email Address" className="px-4 text-sm text-black w-full h-10 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <input name="password" id="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" className="px-4 text-sm text-black w-full h-10 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb- flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="" />
                            <p className="text-sm text-gray-600 font-medium">Remember me</p>
                        </div>
                        <a href="/home" className="text-blue-500 font-medium">Forget your password?</a>
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign In</button>
                    </div>
                    <p className="text-sm text-gray-500 text-center mb-6">OR CONTINUE WITH</p>
                    <div>
                        <button className="text-black font-semibold text-sm w-full h-10 border border-gray-200 rounded-md hover:bg-gray-100 hover:border-none transition-all duration-300 ease-in-out">Sign in with Google</button>
                    </div>
                </form>
                {message && <p className='text-center text-md font-bold text-green-500 mt-4'>{message}</p>}
            </div>
        </main>
    );
}
