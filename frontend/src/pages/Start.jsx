import React from 'react'
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login'); // Replace '/login' with your actual login route
  };
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://w0.peakpx.com/wallpaper/319/144/HD-wallpaper-cloud-rays-glow.jpg)] h-screen pt-8 flex justify-between flex-col w-full '>
      <img  className='w-16 ml-8' src="" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-[30px] font-bold'>Get Started with IOT Navigators</h2>
          <button
      className='w-full bg-black text-white py-3 rounded-lg mt-5'
      onClick={handleClick}
    >
      Continue
    </button>
        </div>
      </div>
    </div>
  )
}

export default Start
