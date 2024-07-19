'use client'
import Image from "next/image";
import gambar from './asset/image/Image.jpg'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handle = () =>{
    router.push('/home');
  }
  return (
    <main className="mx-auto container bg-white">
          <a href="http://localhost:3000/home" className="px-4 py-4 bg-blue-600">Pergi ke halaman web</a>
    </main>
  );
}
