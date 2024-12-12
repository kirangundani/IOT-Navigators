import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login'); // Replace '/login' with your actual login route
  };
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://wallpaperaccess.com/full/26177.jpg)] h-screen pt-8 flex justify-between flex-col w-full '>
      <img  className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started with IOT Navigators</h2>
          <button
      className='w-full bg-black text-white py-3 rounded mt-5'
      onClick={handleClick}
    >
      Continue
    </button>
        </div>
      </div>
    </div>
  )
}

export default Home
