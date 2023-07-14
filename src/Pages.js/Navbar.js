import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Resume from './Resume';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    }
   return (
    <div>
         <nav>
        <div className='nav-img'><p>Anulika Nnedu</p></div>
        <div className={`nav-flex ${menuOpen ? 'open' : ''}`}>
        <NavLink to='/' onClick={handleToggle}>Home</NavLink>
        <NavLink to='/projects' onClick={handleToggle}>Projects</NavLink>
        <NavLink to='/contact' onClick={handleToggle}>Contact</NavLink>
        <Resume/>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={handleToggle}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        </button>
    </nav>
    <Outlet/>

    </div>
  )
}

export default Navbar