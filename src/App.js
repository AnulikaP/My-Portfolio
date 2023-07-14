
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages.js/Home';
import Resume from './Pages.js/Resume';
import Project from './Pages.js/Project';
import Contact from './Pages.js/Contact';
import Hero from './Assets/anulika.png';
import Navbar from './Pages.js/Navbar';
import Footer from './Pages.js/Footer';

function App() {



  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
