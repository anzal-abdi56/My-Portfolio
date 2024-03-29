import "../styles/Home.css"
import React from 'react'
import {GitHub} from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'

function Home() {
  return (
    <div className='home'>
      <h2>Welcome to My Portfolio!</h2>
      <p>Hello, I'm Anzal Abdinoor, a seasoned software engineer on a mission to transform innovative ideas into exceptional digital experiences.</p>
      <a href='mailto:anzalabdinoor5@gmail.com' className='social-link'>
          <Email/>
        </a>
        <a href='https://www.linkedin.com/in/anzal-abdinoor-1629b5285' className='social-link' target='_blank' rel='noopener noreferrer'>
          <LinkedIn/>
        </a>
        <a href='https://github.com/anzal-abdi56' className='social-link' target='_blank' rel='noopener noreferrer'>
          <GitHub/>
        </a>
    </div>
  )
}

export default Home
