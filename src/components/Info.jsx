import React from 'react'
import photo from '../assets/myImage.jpg'
import About from './About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Interests from './Interests';
import Footer from './Footer';


const handleEmailClick = () => {
    window.location.href = "mailto:uwemutuk50@gmail.com";
}

const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/uwem-utuk-a57905292/", "_blank");
}

export default function Info() {
    return (
        <div className='infoSection'>
            <div className='infoContainer'>
                <div className='info'>
                    <img src={photo} alt='Profile Photo' className='img' />
                    <h2 className='name'>Uwem Utuk</h2>
                    <small className='title'>Frontend Developer</small>
                    <p><a href='#' className='website'>uwemutuk.com</a></p>
                    <div className="buttons">
                        <button onClick={handleEmailClick} className='email'>
                            <FontAwesomeIcon icon={faEnvelope} className="email-icon" /> Email</button>
                        <button onClick={handleLinkedInClick} className='linkedin'>
                            <FontAwesomeIcon icon={faLinkedinIn} className='linkedinIcon'/>LinkedIn</button>
                    </div>
                    
                </div>
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}

