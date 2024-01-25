import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Instagram/>
        <LinkedIn/>
        <Email/>
      </div>
      <p> &copy; 2024 Anzalabdinoor</p>
    </div>
  )
}

export default Footer
