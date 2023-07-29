import React, { Component, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Resume from './Resume';
import { HiMenu } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr'


  const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => { setMenuOpen(!menuOpen)};
    
    return (
    <div>
         <nav>
        <div className='nav-hero'><p>Anulika Nnedu</p></div>
        
        <div className={`nav-flex ${menuOpen ? 'nav-flex active' : 'navflex'}`}>
        <NavLink to='/' onClick={handleClick}>Home</NavLink>
        <NavLink to='/aboutme' onClick={handleClick}>About Me</NavLink>
        <NavLink to='/projects' onClick={handleClick}>Projects</NavLink>
        <NavLink to='/contact' onClick={handleClick}>Contact</NavLink>
        <Resume/>
        </div>
        <div id='mobile' onClick={handleClick}>
        <div className='bar'>
            {menuOpen ? <GrFormClose/> : <HiMenu/>}
         </div>
        </div>
    </nav>

    </div>
  )
}

export default Navbar