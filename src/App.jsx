import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Notfound from './pages/Notfound';
import Project from './pages/Project';
import Resume from './pages/Resume';
function App() {
  return (
    <div>

    <Router>
      <Routes>
        <Route index element={<Home/>} />
    <Route path='about' element = {<About />} />
     <Route path='contact' element = {<Contact />} />
      <Route path='blog' element = {<Blog />} />
        <Route path='*' element = {<Notfound />} />
   <Route path='project' element = {<Project />} />
   <Route path='resume' element = {<Resume />} />
      </Routes>
    </Router>
    
    </div>
  )
}

export default App
