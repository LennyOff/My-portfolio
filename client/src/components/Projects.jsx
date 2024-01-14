import React from 'react'
import './projects.css'

const Card = ({name, theme}) => {
  const waveStyle = `wave ${theme}`

  return(
      <div className="e-card playing">
        <div className="image"></div>
        <div className={waveStyle}></div>
        <div className={waveStyle}></div>
        <div className={waveStyle}></div>
        <div className="infotop">
          {name}
        </div>
      </div>
  )
}

const Projects = () => {
  return (
    <div className='projects' id="projects">
        <div className='projectsTitle'>Projects</div>
        <div className='projectCardsContainer'>
          <a href="#top"> <Card name={"My Portfolio"} theme={"blue"}/> </a>
          <Card name={"Comming soon"} theme={"red"}/>
        </div>
        <div className='projectsMore'><h1>see more</h1></div>
    </div>
  )
}

export default Projects