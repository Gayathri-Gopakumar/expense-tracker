import React from 'react'
import { useNavigate } from 'react-router-dom'
import Add from './Add'
// import Chart from './Chart'



const Home = () => {
    const username=sessionStorage.getItem('username')
    const navigate=useNavigate()

    const handleLogout=()=>{
        sessionStorage.clear('username')
        sessionStorage.clear('password')
        navigate('/')
    }

  return (
    <>
      <div className='flex justify-center items-center mt-10'>
            <p className='text-2xl text-orange-500 font-bold'>WELCOME <span className='text-red-600 hover:text-green-600'>{username}</span></p>
           
      </div>
      <button onClick={handleLogout} className='text-white font-bold bg-yellow-600 p-2 rounded-md hover:bg-cyan-800 flex mx-auto fixed right-2 top-6'>Logout</button>
      <Add/>
      {/* <Chart/> */}
    </>
  )
}

export default Home