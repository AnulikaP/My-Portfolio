import React from 'react'
import {FaRegCopyright} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='footer-flex'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact Me</Link>
        <Link to='/projects'>Projects</Link>
        </div>
        <div className='foot-sec'>
           <FaRegCopyright/> <p> 2023 | Designed & Built by Anulika Nnedu</p>
        </div>




    </footer>
  )
}

export default Footer