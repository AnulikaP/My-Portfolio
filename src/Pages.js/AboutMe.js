import React from 'react'
import Slides from './Slides';
import { Link } from 'react-router-dom';
import Resume from './Resume';
import html from '../Assets/HTML.png';
import css from '../Assets/css.png';
import java from '../Assets/java.png';
import myapp from '../Assets/react.png';
import git from '../Assets/git.png';
import canva from '../Assets/canva.png';
import tailwind from '../Assets/tailwind.jpg';

const AboutMe = () => {
  return (
    <div className='about-main'>
        <div className='about-sec'>
        <div className='slide-show'>
            <Slides/>
        </div>
        
    <div className='my-speech'>
    <h1>About Me</h1>
     <p>I am a passionate Front-End Developer with a strong enthusiasm for developing visually appealing applications and websites. My commitment, excellent collaboration skills, and focus in achieving objectives make me an asset to any team.
     </p>
     <p className='a-sec'>
        When I'm not coding, I love to go shopping or spend time with family.
     </p>
     <div className='resume'>
    <Resume/>
    </div>

    </div>
    </div>
    <div className='skill-set'>
        <div><img src={html} alt='html'/><p>HTML</p></div>
        <div><img src={css} alt='css'/><p>CSS</p></div>
        <div><img src={java} alt='javascript'/><p>JavaScript</p></div>
        <div><img src={myapp} alt='react'/><p>React</p></div>
       <div> <img src={git} alt='git'/><p>Github</p></div>
       <div> <img src={tailwind} alt='tailwind'/><p>Tailwind</p></div>
        <div><img src={canva} alt='canva'/><p>Canva</p></div>
    </div>

    </div>
  )
}

export default AboutMe