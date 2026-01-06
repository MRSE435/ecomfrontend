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
    <div>
      <div className='border'>
        <div className="loginbox">
          <form onSubmit={handlesubmit} method="POST">
            <input type="text" name='username ' value={username} onChange={(e)=>setusername(e.target.value)} />
            <input type="text" name="password" value={password}  onChange={(e)=>setpassword(e.target.value)}/>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
