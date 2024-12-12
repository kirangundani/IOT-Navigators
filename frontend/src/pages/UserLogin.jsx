import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [userData,setUserData] = useState({})

  const submitHandler = (e) =>{
     e.preventDefault();
     setUserData({
      email:email,
      password:password
     })
     console.log(userData);
     setEmail('')
     setPassword('')
  }
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup'); // Replace '/login' with your actual login route
  };

  const handleCaptain=()=>{
    navigate('/captain-login')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img  className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=''/>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <h3 className='text-lg font-medium mb-2'>What's Your email</h3>
      <input
       required 
       value={email}
       onChange={(e)=>{
          setEmail(e.target.value)
       }}
       className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
       type="email"
        placeholder='email@example.com' 
        />
      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
      <input 
      className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      value={password}
       onChange={(e)=>{
          setPassword(e.target.value)
       }}
      required type="password" 
       placeholder='password'
      />
      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
      >Login</button>

      </form>
      <p className='text-center'>New here? <button className='text-blue-600'
      onClick={handleClick}
      >Create new Account</button></p>
    </div>

    <div>
      <button className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
      onClick={handleCaptain}
      >Sign in as Captain</button>
    </div>
    </div>
  )
}

export default UserLogin
