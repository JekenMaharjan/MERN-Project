'use client'

import React, { useState } from 'react'

const Counter = () => {
    const[num,setNum] = useState(0);

    const increment = () => {
        setNum(num+1);
    };

    const decrement = () => {
        if(num <= 0)
            setNum(0);
        else setNum(num-1);
    };

  return (
    <div className='flex flex-col bg-gray-900 h-90 w-40 rounded-xl m-5 p-5'>
        <div className='p-5 m-5 bg-slate-400 h-20 w-20 text-center'>{num}</div>
        <button 
        onClick={increment}
        className='bg-slate-500 p-5 m-5 rounded-xl text-white text-2xl h-20 w-20 cursor-pointer'>
            +
        </button>
        <button 
        onClick={decrement}
        className='bg-slate-500 p-5 m-5 rounded-xl text-white text-2xl h-20 w-20 cursor-pointer'>
            -
        </button>
    </div>
  )
}

export default Counter