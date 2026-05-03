import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setisloggedin,setuser}) => {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  const handlesubmit=async (e)=>{
    e.preventDefault();
     const res=await fetch(`${import.meta.env.VITE_API_URL}/api/login`,{
      method:"POST",
      credentials: "include",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(
        {
          username:username,
          password:password
        })
        
    })
     if (res.status === 200) {
      const data=await res.json();
      setisloggedin(true);           // 3. Update App.jsx state
      setuser(data.username);
      navigate("/")
    } else {
      alert("Invalid credentials")
    }
  }
return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-50'>
        <div className='border border-gray-200 shadow-lg w-[30%] p-10 rounded-xl bg-white'>
            
            {/* LOGO + TITLE */}
            {/* LOGO - same as navbar */}
        
            <div className='flex flex-col items-center mb-8'>
                <h1 className='text-3xl font-bold italic text-blue-500 mb-2'>
                            ShopEase
        </h1>
                <h2 className='text-2xl font-bold text-gray-800'>
                    Welcome Back
                </h2>
                <p className='text-gray-400 text-sm'>
                    Login to ShopEase
                </p>
            </div>

            <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
                
                {/* USERNAME */}
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-600'>
                        Username
                    </label>
                    <input 
                        type="text" 
                        name='username'
                        placeholder="Enter username"
                        value={username} 
                        onChange={(e) => setusername(e.target.value)}
                        className='border-2 border-gray-300 rounded-lg p-3 
                                   focus:outline-none focus:border-blue-500
                                   transition-all duration-200'
                    />
                </div>

                {/* PASSWORD */}
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-medium text-gray-600'>
                        Password
                    </label>
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Enter password"
                        value={password}  
                        onChange={(e) => setpassword(e.target.value)}
                        className='border-2 border-gray-300 rounded-lg p-3 
                                   focus:outline-none focus:border-blue-500
                                   transition-all duration-200'
                    />
                </div>

                {/* BUTTON */}
                <button 
                    type="submit"
                    className='bg-blue-600 text-white p-3 rounded-lg 
                               hover:bg-blue-700 font-semibold mt-2
                               transition-all duration-200'
                >
                    Login
                </button>
                <p className='text-center text-sm text-gray-500 mt-2'>
    First time here?{' '}
    <span 
        onClick={() => navigate('/register')}
        className='text-blue-500 font-semibold cursor-pointer hover:underline'
    >
        Register
    </span>
</p>

            </form>
        </div>
    </div>
)
}

export default Login
