import './NavBar.css'

import React from 'react'

function NavBar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Aroundtheworld</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar