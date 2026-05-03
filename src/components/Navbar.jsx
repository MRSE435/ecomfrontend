import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ className, isloggedin, logout }) => {
  return (
    <nav className="shadow p-2 navbar">
      <ul className="flex justify-between items-center list-none ml-1 mr-1">

        {/* Logo */}
        <li className="font-bold italic text-3xl text-blue-500">
          ShopEase
        </li>

        <li className='relative rounded-xl'  >
          <input   type="search" name="" id="" className='shadow w-3xl p-2   rounded-xl ' />
          <button className="p-2   flex  justify-center w-[9%] absolute top-0   right-0 bottom-0  bg-blue-500 text-white  hover:bg-blue-600 transition rounded-r-xl">
            <svg  className='w-4'   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </li>



        {/* Right side menu */}
        <li>
          <ul className="flex gap-5 items-center font-serif text-xl">
            {
              isloggedin ? (
                <>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/">Home</Link></li>


                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Regsiter</Link></li>

                  <li><Link to="/about">#about</Link></li>
                </>
              )
            }
          </ul>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar;
