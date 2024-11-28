import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Login = () => {
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    const handleClick=()=>{
        sessionStorage.setItem('username',username)
        sessionStorage.setItem('password',password)
        console.log(username,password);
        setUsername("")
        setPassword("")
        navigate('/home')
    }

  return (
    <>
        
            <div className=" mx-auto flex  justify-center items-center  h-screen">
                <div className=" border-2 border-cyan-600 w-96 h-80">
                    <p className='text-xl text-center text-green-700 font-bold underline underline-offset-4 p-4'>LOGIN</p>
                        <div className='p-2 flex flex-col justify-center items-center'>
                            <input value={username} onChange={e=>setUsername(e.target.value)} className=' border-2 border-blue-500 rounded-md p-2' type="text" placeholder='Username'/>
                        </div>
                        <div className='p-2 flex flex-col justify-center items-center'>
                            <input value={password} onChange={e=>setPassword(e.target.value)} className='border-2 border-blue-500 rounded-md p-2' type="password" placeholder='Password'/>
                        </div>
                        <button className='mx-auto flex justify-center border-4 p-2 w-20 rounded-md bg-green-500 text-white border-green-500 font-bold mt-5' onClick={handleClick}>Login</button>

                </div>
            </div>
            
        
    </>
  )
}

export default Login