import React from 'react'
import { Link } from "react-scroll"
import {
    Linkedin,
    GitHub,
    Instagram,
    Facebook,
    Twitter,
} from "react-feather"

const content = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h>  App Devloper, Web Designer  </h>
                <h1>👋, I'm Dhinesh Kumar</h1>
                <p>A professional Web Designer🕸️and Native app📱devloper</p>
                <a href='https://bit.ly/3aZ2NrY'>
                    <button className='topContent__dow'>Downloade CV 🗒️</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                    <button className='topContent__work'>My Work's 💪</button>
                </Link>
            </div>
            {/* social meadia section */}
            <div className='topContent__social'>
                <a href='https://www.linkedin.com/in/dhinesh-kumar-00aa8b1a5/'>
                    <Linkedin color='#fff' />
                </a>
                <a href='https://github.com/Dhinesh4668'>
                    <GitHub color='#fff'/>
                </a>
                <a href='https://www.instagram.com/dhinesh_thirupathi/'>
                    <Instagram color='#fff'/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100055003878666'>
                    <Facebook color='#fff'/>
                </a>
                <a href='https://twitter.com/dhinesh4668'>
                    <Twitter color='#fff'/>
                </a>
            </div>
        </div>
    )
}

export default content