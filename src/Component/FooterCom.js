import React from 'react'
import '../Style/FooterCom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function FooterCom() {
    return (
        <div className='FooterCom'>
            <div className='footerDivv'>
                <div className='headingDivv'>
                    <p className='pHeading'>CONNECT WITH ME</p>
                </div>
                <div className='ButtonsDiv'>
                    <a title='Instagram' href='https://www.instagram.com/pranshupant/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='2xl' style={{ color: "#ffffff", }} /></a>
                    <a title='LinkedIn' href='https://www.linkedin.com/in/pranshu-pant-b85ab323a' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2xl' style={{ color: "#ffffff", }} /></a>
                    <a title='GitHUB' href='https://github.com/pranshuPant07' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='2xl' style={{ color: "#ffffff", }} /></a>
                    <a title='Facebook' href='https://www.facebook.com/pranshu.pant.92' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size='2xl' style={{ color: "#ffffff", }} /></a>
                </div>
            </div>

        </div>
    )
}

export default FooterCom
