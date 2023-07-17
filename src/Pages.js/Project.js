import React, { useState } from 'react'
import { Link } from 'react-router-dom'


 const projectData = [
    { id: '1', name: 'Omega Loan Prediction App', picture:  'https://loan-prediction-app-group-1b.netlify.app/', img: require('../Assets/Omega.png'), statement: 'The App was built to help Financial Institutes ascertain if an applicant is eligible for the loan requested, thereby reducing Loan defaulters .' },

    {id: '3', name: 'List Rendering & Filtering', picture: 'https://stupendous-profiterole-21b30a.netlify.app/', img: require('../Assets/Omega.png'), statement: 'Built with React Js, this App enables users to find a search name by filtering through the name available in the data.'},

    {id: '2', name: 'StarWars Movie App', picture: 'https://incomparable-piroshki-913acb.netlify.app/',img: require('../Assets/StarWars.png'), statement: 'This App renders information to users by fetching data from an API.' },

    {id: '4', name: 'Udemy Landing Page', picture: 'https://thunderous-eclair-49a799.netlify.app/',img: require('../Assets/udemy.png'), statement: 'Cloned Udemy Landing Page built with HTML & css.  '},

    {id: '5', name: 'Google Landing Page', picture: 'https://magenta-bunny-b85287.netlify.app/', img: require('../Assets/googleP.png'), statement: 'Cloned Google Ronaldo search Page built with HTML & css.'},

    {id: '6', name: 'Instagram Home Page', picture: 'https://unrivaled-cobbler-fb4511.netlify.app/', img: require('../Assets/Insta.png'), statement: 'Cloned Instagram home Page built with HTML & css.'},


 ]

const Project = () => {

    const [item, setItem] = useState(projectData);

    const projectList = item.map((work, index) => 

    <div>
        <div className='project' key={work.id}>
        <a key={index} href={work.picture} target='_blank'><img src={work.img} alt='projects'/></a>
            
            <a key={index} href={work.picture} target='_blank'>{work.name}</a>
            <p>{work.statement}</p>
        

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