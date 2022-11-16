import React from 'react'
import './header.css'
import  Resume from './Resume'
import ME from '../../assets/download.jpg'
import Headersocial from './Headersocial';
const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Abhinav Kumar</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <Resume/>
      <Headersocial/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header