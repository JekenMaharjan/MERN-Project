import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white p-10 flex flex-row gap-x-10 justify-evenly'>
        <h1 className='font-sans text-xl'>Welcome to the ChatApp</h1>
        <a href='/chatapp' className='border p-2 rounded-md'>Home</a>
    </div>
  )
}

export default Navbar