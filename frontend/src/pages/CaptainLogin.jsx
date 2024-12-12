import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const CaptainLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [captainData,setCaptainData] = useState('')

  const submitHandler = (e) =>{
     e.preventDefault();
     setCaptainData({
      email:email,
      password:password
     })
     console.log(captainData);
     setEmail('')
     setPassword('')
  }
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/captain-signup'); // Replace '/login' with your actual login route
  };
  const handleCaptain=()=>{
    navigate('/login')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img  className='w-20 mb-2' src="https://static.vecteezy.com/system/resources/previews/014/455/904/original/delivery-truck-icon-icon-on-transparent-background-free-png.png" alt=''/>

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
      <p className='text-center'>Join a fleet? <button className='text-blue-600'
      onClick={handleClick}
      >Register as a Captain</button></p>
    </div>

    <div>
      <button className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
      onClick={handleCaptain}
      >Sign in as User</button>
    </div>
    </div>
  )
}

export default CaptainLogin
