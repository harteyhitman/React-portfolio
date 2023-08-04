import React from 'react'
import {projects} from './ToolsData'

const Projects = () => {
  return (
    <div className='projects-main-div'>
      {projects.map((project) =>(
        <div key={project.id} className="projects">
         <p className='projects-tools'>
      {project.projectsTools}  
         </p>
       <img src={project.realProjects}  id='real-projects' alt="" />
        </div>
      ))}
    </div>
  )
}

export default Projects