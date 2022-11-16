import React from 'react'
import './About.css'
import ME from '../../assets/images.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 month intenship</small>

            </article>
            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>the sparks Foundation</h5>
              <small> </small>

            </article>
            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Banking system</small>

            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi earum ipsum, libero eaque natus voluptatem, dolores aut quae nostrum, aliquid labore incidunt.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About