import React from 'react'
import './headder.css'
import {
    Link,
} from "react-scroll"

const headder = () => {
    return (
        <div className='headder'>
            <div className='headder__left'>
                <h2>Dhinesh<span> Kumar</span></h2>
            </div>
            <div className='headder__right'>
                <Link to="about" smooth={true} duration={600}>
                    <p>About Me</p>
                </Link>
                <Link to="skills" smooth={true} duration={600}>
                    <p>Skills</p>
                </Link>
                <Link to="projects" smooth={true} duration={600}>
                    <p>projects</p>
                </Link>
                <Link to="contact" smooth={true} duration={600}>
                    <p>Contact</p>
                </Link>
                <Link  smooth={true} duration={600}>
                    <p>Blogs</p>
                </Link>
                
                
            </div>
        </div>
    )
}

export default headder