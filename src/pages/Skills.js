import React from 'react';
import "../styles/Skills.css"

function Skills() {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2> Front-End </h2>
          <span>
            ReactJS, Redux, HTML, CSS, BootStrap, MaterialUI, TailWindCSS
          </span>
        </li>
        <li className='item'>
          <h2>Back-End</h2>
          <span>
            NodeJS, Flask
          </span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>
            Javascript, Python
          </span>
        </li>
      </ol>
    </div>
  )
}

export default Skills
