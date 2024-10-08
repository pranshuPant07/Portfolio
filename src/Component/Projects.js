import React from 'react'
import '../Style/Projects.css'
import ProjectDisplay from './ProjectDisplay'

function Projects() {
    return (
        <div className='projectsDiv'>
            <div className='pDiv'>
                <div className='projectHeading'>
                    <p>Projects</p>
                </div>
                <div className='projectsList'> 
                    <ProjectDisplay />
                </div>
            </div>
        </div>
    )
}

export default Projects
