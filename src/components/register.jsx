import React, { useState } from 'react'
const Register = () => {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const handlesubmit=(e)=>{
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/api/register`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(
        {
          username:username,
          password:password
        }
      )
    })
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

export default Register
