import React from 'react'

const UserCard = (props) =>{
    return(
        <div className='m-4 p-4 flex flex-row gap-x-5 bg-gray-500 rounded-lg'>
            {props.name}
            {props.isOnline ? <div className='bg-green-500 w-5 h-5 rounded-full items-center content-center'></div>:null}
        </div>
    )
}

const userList = [
    {name:"Ram", isOnline:true},
    {name:"Hari", isOnline:false},
    {name:"Shyam", isOnline:false},
    {name:"Gita", isOnline:true}
]

const Sidebar = () => {
    return (
          <div className='flex flex-col gap-4 bg-gray-900 p-4 h-205 text-white w-60 text-center item-center'>
              <ul className='flex flex-col gap-2 border rounded-lg'>
                {userList.map((item,id)=>{
                    return(
                    <UserCard key={id} name={item.name} isOnline={item.isOnline}/>
                    )
                })}
              </ul>
          </div>
    )
  }

export default Sidebar