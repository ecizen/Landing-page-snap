import React from 'react'

export default function Editmenu() {

  const editprofile = [
    { id: 1, name: 'general'},
    { id: 2, name: 'password'},
    { id: 3, name: 'description'},
    { id: 4, name: 'company'},
  ]
  return (
    <div className='flex flex-col gap-4'>
        {editprofile.map((d) =>(
          <div key={d.id} className='flex flex-col gap-4'>
            <p className='text-black text-xs'>{d.name}</p>
          </div>
        ))}
    </div>
  )
}
