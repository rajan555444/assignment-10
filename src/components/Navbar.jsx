import React from 'react'

function navbar() {
  return (

    <nav className='bg-black text-white fixed w-full'>
      <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='text-xl font-semibold'>DropKart</div>
          <div className='hidden md:flex space-x-6'>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Cart</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar
