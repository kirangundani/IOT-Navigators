// import React ,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import {UserDataContext} from '../contexts/UserContext';

// const UserSignup = () => {
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')
//   const [firstName, setFirstName]=useState('')
//   const [lastName,setLastName]=useState('')
//   const [userData,setUserData] = useState({})
  
//   const navigate = useNavigate();

//   const { user, setUser } = useContext(UserDataContext)

//   const submitHandler = async(e) =>{
//      e.preventDefault();
//      const newUser={
//       fullName:{
//         firstName:firstName,
//         lastName:lastName
//       },
//       email:email,
//       password:password
//      }

//      const response=await axios.post(`${import.meta.env.VITE_API_URL}/user/register`,newUser)
//      if(response.status===201){
//       const data=response.data
//       setUser(data.user)
//       navigate('/home')
//      }
     
//      setEmail('')
//      setFirstName('')
//      setLastName('')
//      setPassword('')
//   }
//   const handleClick = () => {
//     navigate('/login'); // Replace '/login' with your actual login route
//   };

//   const handleCaptain=()=>{
//     navigate('/captain-login')
//   }

//   return (
//     <div>
//       <div className='p-7 h-screen flex flex-col justify-between'>
//     <div>
//     <img  className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=''/>

//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//       <h3 className='text-lg w-1/2 font-medium mb-2'>What's Your name</h3>
//       <div className='flex gap-4 mb-6'>
//       <input
//        required 
       
//        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
//        type="text"
//         placeholder='First name' 
//         value={firstName}
//         onChange={(e)=>{
//           setFirstName(e.target.value);
//         }}
//         />
//       <input
//        required 
       
//        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
//        type="text"
//         placeholder='Last name' 
//         value={lastName}
//         onChange={(e)=>{
//           setLastName(e.target.value);
//         }}
//         />
//       </div>
//       <h3 className='text-lg font-medium mb-2'>What's Your email</h3>
//       <input
//        required 
//        value={email}
//         onChange={(e)=>{
//           setEmail(e.target.value);
//         }}
       
//        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//        type="email"
//         placeholder='email@example.com' 
//         />
//       <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
//       <input 
//       className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//       value={password}
//         onChange={(e)=>{
//           setPassword(e.target.value);
//         }}
//       required 
//       type="password" 
//        placeholder='password'
//       />
//       <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
//       >Create Account</button>

//       </form>
//       <p className='text-center'>Already have a account? <button className='text-blue-600'
//       onClick={handleClick}
//       >Login here</button></p>
//     </div>

//     {/* <div>
//       <button className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
//       onClick={handleCaptain}
//       >Sign in as Captain</button>
//     </div> */}
//     <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
//     </div>
//     </div>
//   )
// }

// export default UserSignup

import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserDataContext } from '../contexts/UserContext';

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
  
  const navigate = useNavigate();

  // Correct way to use context
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async(e) => {
     e.preventDefault();
     const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
     }

     try {
       const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser)
       if(response.status === 201){
         const data = response.data
         setUser(data.user)
         navigate('/home')
       }
     } catch (error) {
       console.error('Signup error:', error)
       // Optionally handle error (show message to user, etc.)
     }
     
     setEmail('')
     setFirstName('')
     setLastName('')
     setPassword('')
  }

  const handleClick = () => {
    navigate('/login');
  };

  const handleCaptain = () => {
    navigate('/captain-login')
  }

  return (
        <div>
          <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img  className='w-16 mb-10' src="https://tse3.mm.bing.net/th?id=OIP.ZfSSxFEGzyzFJDEGKo0m9gHaHa&pid=Api&P=0&h=180" alt=''/>
    
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
          <h3 className='text-lg w-1/2 font-medium mb-2'>What's Your name</h3>
          <div className='flex gap-4 mb-6'>
          <input
           required 
           
           className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
           type="text"
            placeholder='First name' 
            value={firstName}
            onChange={(e)=>{
              setFirstName(e.target.value);
            }}
            />
          <input
           required 
           
           className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base'
           type="text"
            placeholder='Last name' 
            value={lastName}
            onChange={(e)=>{
              setLastName(e.target.value);
            }}
            />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's Your email</h3>
          <input
           required 
           value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
           
           className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
           type="email"
            placeholder='email@example.com' 
            />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
          required 
          type="password" 
           placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Create Account</button>
    
          </form>
          <p className='text-center'>Already have a account? <button className='text-blue-600'
          onClick={handleClick}
          >Login here</button></p>
        </div>
    
        {/* <div>
          <button className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          onClick={handleCaptain}
          >Sign in as Captain</button>
        </div> */}
        <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
        </div>
      )
    }
    
    export default UserSignup
