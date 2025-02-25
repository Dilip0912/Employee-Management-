import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>{data.firstName}</span> </h1>
        <button className='bg-red-400 text-white p-2 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header