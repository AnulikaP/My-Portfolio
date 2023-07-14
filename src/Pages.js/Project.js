import React, { useState } from 'react'
import { Link } from 'react-router-dom'


 const projectData = [
    { id: '1', name: 'Omega Loan Prediction App', picture:  'https://loan-prediction-app-group-1b.netlify.app/', description: 'React App', img: require('../Assets/Omega.png') },

    {id: '3', name: 'List Rendering & Filtering', picture: 'https://stupendous-profiterole-21b30a.netlify.app/', description: 'React.Js', img: require('../Assets/Omega.png')},

    {id: '2', name: 'StarWars Movie App', picture: 'https://incomparable-piroshki-913acb.netlify.app/', description: 'React.Js', img: require('../Assets/StarWars.png') },

    {id: '4', name: 'Udemy Landing Page', picture: 'https://thunderous-eclair-49a799.netlify.app/', description: 'HTML & CSS', img: require('../Assets/udemy.png')},

    {id: '5', name: 'Google Landing Page', picture: 'https://magenta-bunny-b85287.netlify.app/', description: 'HTML & CSS', img: require('../Assets/googleP.png')},

    {id: '6', name: 'Instagram Home Page', picture: 'https://unrivaled-cobbler-fb4511.netlify.app/', description: 'HTML & CSS', img: require('../Assets/Insta.png')},


 ]

const Project = () => {

    const [item, setItem] = useState(projectData);

    const projectList = item.map((work, index) => 

    <div>
        <div className='project' key={work.id}>
        <a key={index} href={work.picture} target='_blank'><img src={work.img} alt='projects'/></a>
            
            <a key={index} href={work.picture} target='_blank'>{work.name}</a>
            <p>{work.description}</p>

        </div>
    </div>
    )
    const content = projectList?.length ? projectList : '';
     
  return (
    <div className='project-div hero-section'>
        <ul>{content}</ul>
    </div>
  )
}

export default Project