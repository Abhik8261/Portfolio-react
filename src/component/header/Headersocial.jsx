import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiCoursera} from 'react-icons/si'
const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abhinav-kumar-799725228/" target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com/Abhik8261" target={'_blank'}><BsGithub/></a>
        <a href="https://in.coursera.org/user/50747acde3cdf235178d8f79042484a7"><SiCoursera/></a>
    </div>
  )
}

export default Headersocial