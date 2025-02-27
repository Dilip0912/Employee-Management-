import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between '>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-red-500'>
          <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-blue-500'>
          <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-green-600'>
          <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
          <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-5 px-8 mx-2 bg-yellow-700'>
          <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      </div>
  )
}

export default TaskListNumbers