import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ className, isloggedin,logout }) => {
  return (
    // We keep the border/layout on the nav, 
    // but put 'flex' on the 'ul' to align the links
    <nav className="border">
      <ul className="flex" style={{ listStyle: 'none', gap: '20px' }}>
        {
          isloggedin ? (
            <>
              <li><Link to="/cart">#cart</Link></li>
              <button onClick={logout}>Logout</button>
            </>

          ) : (
            <li><Link to="/login">#Register</Link></li>

          )

        }

        <li><Link to="/register">#Register</Link></li>
        <li><Link to="/about">#about</Link></li>
        <li><Link to="/">#Home</Link></li>



      </ul>
    </nav>
  )
}

export default Navbar