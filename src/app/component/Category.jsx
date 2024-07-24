import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBuilding, faUser, faFileAlt, faUtensils, faShapes, faIcons, faVectorSquare, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function Category() {
  const category = [
    { id: 1, label: 'Potraits', href: '/potraits', icon: faUser },
    { id: 2, label: 'Template', href: '/template', icon: faFileAlt },
    { id: 3, label: 'Abstract', href: '/abstract', icon: faShapes },
    { id: 4, label: 'Icon', href: '/icon', icon: faIcons },
    { id: 5, label: 'Vectors', href: '/vectors', icon: faVectorSquare },
    { id: 6, label: 'Video', href: '/video', icon: faVideo },
  ];

  return (
    <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6'>
      {category.map((categories) => (
        <a key={categories.id} href={categories.href}>
        <div key={categories.id} className="bg-[#F1F5F9] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors group" data-id="3">
          <FontAwesomeIcon icon={categories.icon} width={24} className='group-hover:text-blue-600 text-slate-500' />
          <p className='text-black text-md group-hover:text-blue-600'>{categories.label}</p>
        </div>
        </a>
      ))}
    </div>
  );
}
