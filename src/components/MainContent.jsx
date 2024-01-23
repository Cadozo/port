import React from 'react'
import AbouContainer from './AbouContainer'
import TecnologiesContainer from './TecnologiesContainer'
import ProjectsContainer from './ProjectsContainer'

import '../styles/components/maincontent.sass'


const MainContent = () => {
  return (
    <main id="main-content">
      <AbouContainer/>
      <ProjectsContainer/>
      <TecnologiesContainer/>
      
    </main>
  )
}

export default MainContent