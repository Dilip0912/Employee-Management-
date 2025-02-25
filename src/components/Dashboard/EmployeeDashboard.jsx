import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-slate-800 h-screen '>
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard