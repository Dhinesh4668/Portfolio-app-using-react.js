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
          <h4>A.I using python 🐍🦕</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>A.I using python 🐍🦕</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>A.I using python 🐍🦕</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
        <div className='projectcontainer__det'>
          <h4>A.I using python 🐍🦕</h4>
          <img src='../../assets/skills.svg' alt='' />
        </div>
      </div>

    </Element>
  )
}

export default project