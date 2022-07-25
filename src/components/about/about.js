import React from 'react'
import './about.css'
import {
    Element
} from 'react-scroll'
import {
    Mail,
    PhoneCall,
    Linkedin,
    GitHub
} from 'react-feather'

const about = () => {
    return (
        <Element id='contact' className='contactcontainer'>
            <h1>Contact 📱🤙</h1>
            <div className='contactcontainer__brodder'>
                <p>
                    Gmail  <Mail /> : <span> dhinesh4668@gmail.com</span> 
                </p>
               
                <p>
                    GitHub UserName <a href='https://github.com/Dhinesh4668'> <GitHub color='#fff'/></a>: <span>Dhinesh4668</span>
                </p>
                <p>
                    Linkedin Accound  <a href='https://www.linkedin.com/in/dhinesh-kumar-00aa8b1a5/'> <Linkedin color='#fff'/></a> : <span>dhinesh4668</span>
                </p>
                <p>
                    Phone <PhoneCall /> : <span>+91 9150507530</span>
                </p>
            </div>
        </Element>
    )
}

export default about