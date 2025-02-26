import React from 'react'

const Header = ({data}) => {

  let username;
  if(!data){
    username="Admin";
  }
  else{
    username=data.firstName;
  }

  const logOutUser=()=>{
    localStorage.setItem("loggedInUser","");
    window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>{username}</span> </h1>
        <button onClick={logOutUser} className='bg-red-400 text-white p-2 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header