import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between '>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-red-500'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-blue-500'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-green-500'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-yellow-700'>
          <h2 className='text-2xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
      </div>
  )
}

export default TaskListNumbers