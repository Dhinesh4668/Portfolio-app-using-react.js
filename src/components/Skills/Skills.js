import React from 'react'
import {
    Element
} from "react-scroll"
import './Skills.css'
import SkillImg from '../../assets/skill.png'
import { LinearProgress } from '@mui/material'



const Skills = () => {
  return (
    <Element className='skillcontainer' id='skills'>
        <div className='skillcontainer__image'>
            <img src={SkillImg} alt='learn_image' />
        </div>
        <div className='skillcontainer__text'>
            <h1>My Skills 🧠🦕</h1>
            <div className='skillcontainer__sub'>
                <h5>React ⚛️</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={40}/>
                </div>
                <h5>React Native ⚛️</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={70}/>
                </div>
                <h5>Python 🐍</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={40}/>
                </div>
                <h5>Java Basic 🍵</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={50}/>
                </div>
                <h5>HTML CSS and JS</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={65} />
                </div>
                <h5>Flutter 🍃</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={20}/>
                </div>
                <h5>Tailwind CSS 🤖</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={20}/>
                </div>
                <h5>Flutter 🍃</h5>
                <div className='skillcontainer__slider skillcontainer_slidder1'>
                    <LinearProgress variant='determinate' value={20}/>
                </div>
            </div>

        </div>
    </Element>
  )
}

export default Skills