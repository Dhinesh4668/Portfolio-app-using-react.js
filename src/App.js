import React from 'react'
import "./App.css"
import {
  HeadderScreen,
  TopContainer,
  SkillsContainer,
  ProjectContainer,
  About,
  Fotter
} from "./components/index"


const App = () => {
  return (
    <div className='App'>
      <HeadderScreen />
      <TopContainer />
      <SkillsContainer />
      <ProjectContainer />
      <About />
      <Fotter />
    </div>
  )
}

export default App