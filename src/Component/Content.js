import React from 'react'
import '../Style/Content.css'
import img from '../Images/6cb604081ef3086569319ddb5adcae66298a28c5_x1d-ii-sample-01-web.jpg'

function Content() {

    return (
        <div className='Content'>
            <div className='mainContentDiv'>
                <div className='forPhotoDiv'>
                    <img src={img} />
                </div>
                <div className='forDescription'>
                    <p><i>Welcome to my portfolio! I’m Pranshu Pant, a dedicated and enthusiastic front-end developer with a passion for creating engaging and responsive web applications. As a recent graduate in Bachelor of Computer Applications, I’ve honed my skills in HTML, CSS, and JavaScript, with a particular focus on React.js.<br /><br />

                        My journey into web development began with a curiosity about how websites are built and a desire to create user-friendly interfaces that enhance the overall digital experience.<br /><br />

                        During my studies, I completed several projects that allowed me to apply theoretical concepts to practical scenarios. I developed a personal portfolio website, along with I developed Weather Forecast Application, Movie Finder Application, fully working CRUD operation program called Employee management system and also recently started creating E-commerce Website that showcases my ability to create responsive designs and implement interactive features. This project not only

                        strengthened my coding skills but also taught me the importance of user experience (UX) design. I believe that a great user interface should be both aesthetically pleasing and functional, making it easy for users to navigate and engage with content.

                        <br /><br />In addition to my academic projects, I actively sought opportunities to further develop my skills. I participated in Internship from Kaviech PVT LTD where I collaborated with other developers to solve real-world problems. This experience not only improved my technical abilities but also taught me the value of teamwork and effective communication in a fast-paced environment.

                        <br /><br /> My proficiency in React.js enables me to build dynamic single-page applications (SPAs) that provide seamless user experiences. I am familiar with component-based architecture, state management, and the React ecosystem, including libraries like Redux and React Router.
                        <br /><br />I enjoy experimenting with new technologies and frameworks, which allows me to stay updated with industry trends and best practices.

                        <br /><br />One of my key strengths is my attention to detail. I take pride in writing clean, maintainable code and conducting thorough testing to ensure that applications function smoothly across various devices and browsers. I also understand the importance of accessibility and strive to create inclusive web experiences for all users.

                        <br /><br />In addition to my technical skills, I am a lifelong learner who is always eager to expand my knowledge. I regularly explore online courses, tutorials, and developer communities to enhance my expertise and stay current with the evolving landscape of web development. I believe that continuous learning is essential in this field, and I’m excited to embrace new challenges that will further my growth as a developer.

                        <br /><br />I am particularly drawn to roles that allow for creativity and innovation. I enjoy brainstorming ideas and collaborating with teams to develop solutions that align with user needs and business goals. My aim is to contribute to projects that make a meaningful impact, whether through enhancing existing applications or developing new ones from the ground up.

                        <br /><br />Thank you for visiting my portfolio! I invite you to explore my projects and see firsthand the work I’ve done. If you’re looking for a motivated and detail-oriented front-end developer to join your team, I would love to connect and discuss how I can contribute to your next project. Let’s work together to create amazing web experiences!</i></p>
                    <br />
                    <button className='btnToDone' onClick={(() => {
                        window.scrollTo({
                            top: 1120,
                            behavior: 'smooth',
                        });
                    })}>FORWARD</button>
                </div>
            </div>
        </div>
    )
}

export default Content
