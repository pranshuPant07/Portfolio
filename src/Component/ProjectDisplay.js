import React from 'react'
import '../Style/ProjectDisplay.css'

function ProjectDisplay() {
    const projectOBJ = [
        {
            id: "1",
            Label: "Weather Forecast",
            Description: "Weather Forecast Application developed using React JS"
        },
        {
            id: "2",
            Label: "Movie Finder",
            Description: "Movie Finder Application developed using React JS"
        },
        {
            id: "3",
            Label: "Employee Management System",
            Description: "Employee Management System developed using React JS, Node JS, MongoDB"
        },
        {
            id: "4",
            Label: "E-commerce Website",
            Description: "E-commerce website developed using React JS"
        },
        {
            id: "5",
            Label: "Clone Websites",
            Description: "Recreated the frontends of several high-profile websites using HTML and CSS, Like Amazon, Netflix Login Page, Instagram Login Page, Facebook Login Page, etc"
        },
    ]

    function handleRedirectClick(e){
        const projectID = e.target.getAttribute("btn-clck-Attr");
        if(projectID === "1"){
            alert("Weather Forecast Application")
        } else if(projectID === "2"){
            alert("Movie Finder Application")
        } else if(projectID === "3"){
            window.open('https://github.com/pranshuPant07/FRONTEND-EMS.git', "_blank")
        } else if(projectID === "4"){
            alert("E-commerce Website")
        } else if(projectID === "5"){
            alert("Clone Websites")
        }
    }
    return (
        <div className='ListDiv'>
            {
                projectOBJ.map((project) => {
                    return (
                        <div class="card" key={project.id}>
                            <div class="tools">
                                <div class="circle">
                                    <span class="red box"></span>
                                </div>
                                <div class="circle">
                                    <span class="yellow box"></span>
                                </div>
                                <div class="circle">
                                    <span class="green box"></span>
                                </div>
                            </div>
                            <div class="card__content">
                                <div className='heading_Space'>
                                    {
                                        <h4>{project.Label}</h4>
                                    }
                                </div>
                                <div className='description_space'>
                                    {
                                        project.Description
                                    }
                                </div>
                                <div className='button-to-Redirect'>
                                    <button btn-clck-Attr={project.id} onClick={handleRedirectClick} class="button"></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectDisplay
