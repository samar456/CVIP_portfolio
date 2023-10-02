import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <div className="App">

              
       <Navbar/>

           <Routes>

            <Route path='/'  element={<Home/>} />
            <Route path='/about'  element={<About/>} />
            <Route path='/skills'  element={<Skills/>} />
            <Route path='/projects'  element={<Projects/>} />
            <Route path='/contact'  element={<Contact/>} />


           </Routes>

      
      
    </div>
    </Router>
  );
}

export default App;
