import React from 'react'
import './TopCon.css'
import {Element} from "react-scroll"

import ContentScreen from './Content/content'


function TopCon() {
  return (
    <Element name='about' className='topcon'>
        <ContentScreen />
    </Element>
    
  
  )
}

export default TopCon