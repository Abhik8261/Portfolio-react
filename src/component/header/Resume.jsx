import React from 'react'
import Resume from '../../assets/Abhinav Resume .pdf'
const button = () => {
  return (
    <div className='buttons'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default button