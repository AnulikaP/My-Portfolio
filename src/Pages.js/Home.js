import React from 'react'
import { Link } from 'react-router-dom'
import Anuli from '../Assets/Anuli.png';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Project from './Project';

const Home = () => {


  return (
    <>
    <main className='hero-section'>
    <div className='hero-speech' id='home'>
   <div className='hero-img'>
    <img src={Anuli} alt='myimg'/>
   </div>
    <div className='home-intro'>
    <h1><i>Hello,</i></h1>
    <h2>I am Anuli..</h2>
    <h4>A Frontend Developer</h4>
    <p>I can help you bring your captivating web ideas to reality. I am Nigerian, let's work together to create stunning web experiences. </p>
    <div className='contact-branch'>
        <Link to='/contact'>Contact Me</Link>

    </div>
    </div>
    </div>
   
   <div id='aboutme'><AboutMe /></div>
   <div id='project'><Project/></div>
   <div id='contact'><Contact/></div>
   
    </main>
   

    </>
  )
}

export default Home