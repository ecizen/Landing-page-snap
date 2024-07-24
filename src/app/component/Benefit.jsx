import React from 'react'
import { faLightbulb ,faCog, faLock, faDatabase, faMicrochip, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Benefit() {

    const benefits = [
        {
            id: 1,  title: 'Endless Inspiration', description: 'Explore our vast library of high-quality vectors, templates, icons, and photos to bring your ideas to life.', icon: faLightbulb
        },
        {
            id: 2,  title: 'Effortless Workflow', description: 'Streamline your design process with our user-friendly tools and seamless integration with your favorite apps.', icon: faCog
        },
        {
            id: 3,  title: 'Secure and Reliable', description: 'Rest assured that your designs and assets are safe and secure with our robust security measures.', icon: faLock
        },
        {
            id: 4,  title: 'Diverse Content', description: 'Explore a wide range of design resources, from vectors and templates to icons and photos, to suit all your needs.', icon: faDatabase
        },
        {
            id: 5,  title: 'Cutting-Edge Technology', description: 'Leverage the latest advancements in design technology to create stunning visuals and enhance your projects.', icon: faMicrochip
        },
        {
            id: 6,  title: 'Collaborative Community', description: 'Connect with a vibrant community of designers, artists, and creatives to share ideas, get feedback, and grow together.', icon: faUser
        },
    ]
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4'>
        {benefits.map((b) =>(
        <div key={b.id} className='lg:p-6 p-4 lg:border-none border-b border-gray-200'>
            <div className='flex gap-3 items-center mb-4'>
              <FontAwesomeIcon icon={b.icon} width={18} className='text-black'/>
              <p className='text-xl font-semibold text-black'>{b.title}</p>
            </div>
            <div>
              <p className='text-gray-500'>{b.description}</p>
            </div>
       </div>
    ))}
    </div>
  )
}
