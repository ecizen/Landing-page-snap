import React from 'react'
import Instagram from '../../asset/image/instagram.svg'
import Linkedin from '../../asset/image/Linkedin.svg'
import Whatsapp from '../../asset/image/Whatsapp.svg'
import X from '../../asset/image/X.svg'
import Image from 'next/image'

export default function Footer() {

    const content =[
        {name: 'Go home', href: '/'},
        {name: 'About me', href: '/'},
        {name: 'Blog and artikel', href: '/'},
        {name: 'Contact', href: '/'},
        {name: 'New Asset', href: '/'},
        {name: 'Trending photo', href: '/'},
    ]
    const information = [
        {id: 1,name: 'lorem ipsum l', href: '/'},
        {id: 2,name: 'lorem ipsum sff', href: '/'},
        {id: 3,name: 'lorem ipsum sda', href: '/'},
        {id: 4,name: 'lorem ipsum das', href: '/'},
    ]

    const legal = [
        {name: 'Terms & Conditions', href: '/'},
        {name: 'Privacy Policy', href: '/'},
        {name: 'Cookie Policy', href: '/'},
        {name: 'Sitemap', href: '/'},
    ]
    

    const socialMedia = [
        {icon: Instagram, href: '/', name: 'Instagram',},
        {icon: Linkedin, href: '/', name: 'Linkedin'},
        {icon: Whatsapp, href: '/', name:"Whatsapp",},
        {icon: X, href: '/', name:"X"},
    ]
  return (
    <footer className='w-full grid lg:grid-cols-4 md:grid grid-cols-2  lg:gap-0 md:gap-6 gap-6 bg-[#121212] px-8 py-8'>
        <div>
            <h1 className='text-md font-bold mb-4'>Content</h1>
            <div className='flex flex-col gap-4'>
            {content.map((contents)=>(
                    <a href={contents.href} key={contents.name} className='text-[#fff] font-medium text-sm  hover:text-[#F9F9F9]'>{contents.name}</a>
                ))}
                </div>
        </div>
        <div>
            <h1 className='text-md font-bold mb-4'>Content</h1>
            <div className='flex flex-col gap-4'>
            {information.map((contents)=>(
                    <a href={contents.href} key={contents.id} className='text-[#fff] font-medium text-sm  hover:text-[#F9F9F9]'>{contents.name}</a>
                ))}
                </div>
        </div>
        <div>
            <h1 className='text-md font-bold mb-4'>Content</h1>
            <div className='flex flex-col gap-4'>
            {legal.map((contents)=>(
                    <a href={contents.href} key={contents.name} className='text-[#fff] font-medium text-sm  hover:text-[#F9F9F9]'>{contents.name}</a>
                ))}
                </div>
        </div>
        <div>
            <h1 className='text-md font-bold mb-4'>Content</h1>
            <div className='flex  gap-4'>
            {socialMedia.map((contents)=>(
                    <a href={contents.href}>
                        <Image src={contents.icon} alt={contents.name}/>
                    </a>
                ))}
                </div>
        </div>
    </footer>
  )
}
