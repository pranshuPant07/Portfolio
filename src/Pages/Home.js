import React, { useState } from 'react'
import '../Style/Home.css'
import Explore from '../Component/Explore'
import Content from '../Component/Content'
import Form from '../Component/Form'
import FooterCom from '../Component/FooterCom'
import Projects from '../Component/Projects'
import Loader from '../Component/Loader'

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className='main'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Explore />
                    <Content />
                    <Projects />
                    <Form
                        setIsLoading={setIsLoading}
                    />
                    <FooterCom />
                </>
            )}

        </div>
    )
}

export default Home
