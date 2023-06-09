import React from 'react'
import './experience.scss'
import Projects from './projects'
import VTimeline from './timeline'

const experience = () => {
  return (
    <div className='experience'>
      <h1>Projects</h1>
      <Projects />
      <hr />
      <h1>Timeline</h1>
      <VTimeline />
    </div>
  )
}

export default experience