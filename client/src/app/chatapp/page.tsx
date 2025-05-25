import Chatsection from '@/components/chatsection'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/> 
      <div className='flex flex-row'>
        <Sidebar/>
        <Chatsection/>
      </div> 
    </div>
  )
}

export default page