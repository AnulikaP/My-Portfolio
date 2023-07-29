import React from 'react'
import { Link } from 'react-router-dom'
import tweet from '../Assets/twitter.png';
import email from '../Assets/message.png';
import linkedin from '../Assets/linkedin.png'
import Dummyimg from '../Assets/contactimge.png'
import github from '../Assets/git.png'

const Contact = () => {
  return (
    <div className='hero-section'>
        <div className='contact-div'>
    <div className='contact'>
        <h1><span><img src={Dummyimg} alt='contactimg' style={{width: '30px'}}/></span>Contact Me</h1>
        <p>For Job Offer, Networking, Collaboration, or a Chat?</p>
    </div>
    <div className='mid-sec'>
        <h2>To get in touch with me...</h2>
        <p>Send an email, or message me on social media.</p>
    </div>
    </div>
    <div className='contact-sec'>
        <div className='contact-flex'>
           <a href='https://mail.google.com/mail/?view=cm&to=anulinnedu@gmail.com&su=helloanuli&body=' target='_blank'> <img src={email} alt='email'/></a>
            <a href='https://mail.google.com/mail/?view=cm&to=anulinnedu@gmail.com&su=helloanuli&body=' target='_blank'>anulinnedu@gmail.com</a>
        </div>
        <div  className='contact-flex'>
        <a href='https://twitter.com/anuli_nnedu' target='_blank'><img src={tweet} alt='twitter'/></a>
        <a href='https://twitter.com/anuli_nnedu' target='_blank'>Twitter</a>
         </div>
         <div  className='contact-flex'>
         <a href='https://www.linkedin.com/in/anulika-nnedu-3b2695a6' target='blank'> <img src={linkedin} alt='LinkedIn'/></a>
         <a href='https://www.linkedin.com/in/anulika-nnedu-3b2695a6' target='blank'>LinkedIn</a>
         </div>
         <div  className='contact-flex'>
        <a href='https://github.com/AnulikaP' target='blank'> <img src={github} alt='github'/></a>
         <a href='https://github.com/AnulikaP' target='_blank'>Github</a>
         </div>

    </div>
    </div>
  )
}

export default Contact