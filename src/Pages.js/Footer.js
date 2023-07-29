import React from 'react'
import {FaRegCopyright} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='footer-flex'>
        <a href='#home'>Home</a>
        <a href='#aboutme'>About Me</a>
        <a href='#project'>Projects</a>
        <a href='#contact'>Contact</a>
       </div>
        <div className='foot-sec'>
           <FaRegCopyright/> <p> 2023 | Designed & Built by Anulika Nnedu</p>
        </div>




    </footer>
  )
}

export default Footer