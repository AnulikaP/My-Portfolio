import React from 'react'
import { Link } from 'react-router-dom'
import Anuli from '../Assets/Anuli.png';

const Home = () => {


  return (
    <>
    <main className='hero-section'>
    <div className='hero-speech'>
   <div className='hero-img'>
    <img src={Anuli} alt='myimg'/>
   </div>
    <div className='home-intro'>
    <h1><i>Hello,</i></h1>
    <h2>I am Anulika Nnedu</h2>
    <h4>A Frontend Developer</h4>
    <p>I possess a strong enthusiasm for developing visually appealing applications and websites for clients. My commitment, excellent collaboration skills, and focus on achieving objectives make me an asset to any team. </p>
    <div className='skill-sec'>
        <h5>Skills</h5>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            <li>Github</li>
            <li>Canva Graphics</li>
            <li>Collaborative</li>
            <li>Goal Oriented</li>
        </ul>
    </div>
    <div className='contact-branch'>
        <Link to='/contact' id='btn'>Contact Me</Link>

    </div>
    </div>
    </div>

   
    </main>
   

    </>
  )
}

export default Home