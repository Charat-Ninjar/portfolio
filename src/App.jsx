import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Me from './pages/Me'
import Project from './pages/Project'
import Contact from './pages/Contact'
function App() {
  
  return (
    <div>
      <Me/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
