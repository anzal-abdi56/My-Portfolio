import React from 'react';
import '../styles/Contacts.css'; // Import your Contacts.css file
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'

function Contacts() {
  return (
    <div className='contacts'>
      <h2>Contact Me</h2>
      <p>Feel free to connect with me through the following channels:</p>
      <div className='connect-with-me'>
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
    </div>
  );
}

export default Contacts;
