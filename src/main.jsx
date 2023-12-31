import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import ProjectData from './components/ProjectData.jsx'
import MobileProject from './components/MobileProject.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/Project",
    element: <Project/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path:'/MobileProject',
    element: (
      <ProjectData>
        <MobileProject/>
      </ProjectData>
    )
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}> </RouterProvider>
)
