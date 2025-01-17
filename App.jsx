import React from "react"
import './index.css'
import Home from './routes/Home.jsx'
import Projects from "./routes/Projects"
import About from "./routes/About"
import Contact from "./routes/Contact"
import { Routes, Route } from "react-router-dom"; // Importing Route


function App() {
  
    
  

  return (
    <>
   <Routes>
    <Route path = "/" element = {  <Home/>} />
    <Route path = "/projects" element = { <Projects/>} />
    <Route path = "/about" element = { <About/>} />
    <Route path = "/contact" element = {    <Contact/>} />

   </Routes>
    </>
  )
}

export default App
