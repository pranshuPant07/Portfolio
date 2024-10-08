import React from 'react'
import '../Style/Home.css'
import Explore from '../Component/Explore'
import Content from '../Component/Content'
import Form from '../Component/Form'
import FooterCom from '../Component/FooterCom'
import Projects from '../Component/Projects'

function Home() {
    return (
        <div className='main'>
            <Explore />
            <Content />
            <Projects />
            <Form />
            <FooterCom />
        </div>
    )
}

export default Home
