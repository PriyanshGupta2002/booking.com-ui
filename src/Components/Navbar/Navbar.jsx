import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
            <span className="logo">GoBooking</span>
            <div className="navbarItems">
                <button className='navbar-btn'>Register</button>
                <button className='navbar-btn'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar