import React from 'react'

export default function Filter() {
    const Item = [
        {id: 1, label: 'Photos', href: '/photos' },
        {id: 2, label: 'Vectors', href: '/vectorss' },
        {id: 3, label: 'Ilustator', href: '/ilustator' },
        {id: 4, label: 'Template', href: '/template' },
        {id: 5, label: '3D', href: '/3d' },
        {id: 6, label: 'Mockup', href: '/3d' },
       ]; 

  return (
    <div className='flex gap-6 items-center'>
        {Item.map((item) => (
            <a key={item.id} href={item.href}>
                <div className={`text-black text-xs hover:text-blue-600 transition-all duration-300 ease-in-out ${item.id === 1? 'font-semibold text-blue-500' : ''}`}>{item.label}</div>
            </a>
        ))}
    </div>
  )
}
