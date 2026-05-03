import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()      
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

        if (res.ok) {
            alert("Registered successfully! Please login.")
            navigate("/login")
        } else {
            alert("Registration failed. Try again.")
        }
    }

    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray-50'>
            <div className='border border-gray-200 shadow-lg w-[30%] p-10 rounded-xl bg-white'>

                <div className='flex flex-col items-center mb-8'>
                    <h1 className='text-3xl font-bold italic text-blue-500 mb-2'>
                        ShopEase
                    </h1>
                    <h2 className='text-2xl font-bold text-gray-800'>
                        Create Account
                    </h2>
                </div>

                <form onSubmit={handlesubmit} className='flex flex-col gap-4'>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}  // ✅
                        className='border-2 border-gray-300 rounded-lg p-3
                                   focus:outline-none focus:border-blue-500'
                    />

                    <input
                        type="password"                                 // ✅
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}  // ✅
                        className='border-2 border-gray-300 rounded-lg p-3
                                   focus:outline-none focus:border-blue-500'
                    />

                    <button
                        type="submit"
                        className='bg-blue-600 text-white p-3 rounded-lg
                                   hover:bg-blue-700 font-semibold mt-2'
                    >
                        Register
                    </button>

                    <p className='text-center text-sm text-gray-500'>
                        Already have an account?{' '}
                        <span
                            onClick={() => navigate('/login')}
                            className='text-blue-500 font-semibold cursor-pointer hover:underline'
                        >
                            Login
                        </span>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Register