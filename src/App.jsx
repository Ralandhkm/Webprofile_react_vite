import { Routes, Route } from "react-router-dom"
import Navbar from "./componen/Navbar"
import Header from "./componen/Header"
import Skill from "./componen/Skill"
import Project from "./componen/Project"
import Footer from "./componen/Footer"

function App() {
  return <div>
    <Navbar/>
    <div className="bg">
      <Header/>
      <Skill/>
      <Project/>
      <Footer/>
    </div>
    
  </div>
}

export default App
