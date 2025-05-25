import React from 'react'

const Chatsection = () => {
  return (
    <div className='bg-gray-700 text-white flex flex-col w-screen h-205 items-center gap-y-6 p-7'>
        <h1 className='text-xl'>Chat Section</h1>
        <div className='flex flex-col gap-y-5 g-gray-600 w-250 h-150 border-2 border-black p-5 rounded-md'>
          <div className='flex justify-end'>
            <p className='bg-blue-500 text-white px-4 py-2 rounded-lg max-w-fit'>
              Hello, Gita! How are you?
            </p>
          </div>
          <div className='flex justify-start'>
            <p className='bg-slate-500 text-white px-4 py-2 rounded-lg max-w-fit'>
              Hello, Ram! I'm all good.
            </p>
          </div>
        </div>
        <div>
            <input type="text" placeholder='Enter the Message ...' className='w-150 border-2 border-black p-2 rounded-md'/>
        </div>
    </div>
  )
}

export default Chatsection