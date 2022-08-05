import React from 'react'
import {
  Element
} from 'react-scroll'
import './Project.css'

const project = () => {
  return (
    <Element id='projects' className='projectcontainer'>
      <div className='projectcontainer__title'>
        <h1>Our <span>Projects</span></h1>
        <p>Here are some Projects Witch I done for making lives of peoples easy.</p>
        <div className='projectcontainer__det'>
          <h4>Portfolio Web Using React.js ⚛️</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>Portfolio Web Using HTML-CSS (annimation)</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>To-Do app📱 using Rect Native ⚛️</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>Telegram Clone Using Flutter 📞</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>Login Page Using HTML-CSS-JS</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>E-Learning app📱 using React-native ⚛️</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
      </div>

    </Element>
  )
}

export default project