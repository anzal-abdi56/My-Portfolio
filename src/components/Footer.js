import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
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
      <p> &copy; 2024 Anzalabdinoor</p>
    </div>
  )
}

export default Footer
