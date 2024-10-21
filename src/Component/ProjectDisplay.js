import React from 'react'
import '../Style/ProjectDisplay.css'

function ProjectDisplay() {
    const projectOBJ = [
        {
            id: "1",
            Label: "WEATHER FORECAST",
            Description: "Weather Forecast Application developed using React JS"
        },
        {
            id: "2",
            Label: "MOVIE FINDER",
            Description: "Movie Finder Application developed using React JS"
        },
        {
            id: "3",
            Label: "EMPLOYEE MANAGEMENT SYSTEM",
            Description: "Employee Management System developed using React JS, Node JS, MongoDB"
        },
        {
            id: "4",
            Label: "E-COMMERCE WEBSITE",
            Description: "E-commerce website developed using React JS"
        },
        {
            id: "5",
            Label: "CLONE WEBSITES",
            Description: "Recreated the frontends of several high-profile websites using HTML and CSS, Like Amazon, Netflix Login Page, Instagram Login Page, Facebook Login Page, etc"
        },
    ]

    function handleRedirectClick(e) {
        const projectID = e.target.getAttribute("btn-clck-Attr");
        if (projectID === "1") {
            window.open('https://github.com/pranshuPant07/Weather-Forecast.git', "_blank")
        } else if (projectID === "2") {
            window.open("https://github.com/pranshuPant07/Movie-Finder.git", "_blank")
        } else if (projectID === "3") {
            window.open('https://github.com/pranshuPant07/Employee-Management-System.git', "_blank")
        } else if (projectID === "4") {
            window.open('https://github.com/pranshuPant07/E-Commerce-website.git', "_blank")
        } else if (projectID === "5") {
            window.open('https://github.com/pranshuPant07/Clone-Websites.git', "_blank")
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
                                        <h5>{project.Label}</h5>
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
