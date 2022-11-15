import React from 'react'
import Header from './component/header/Header';
import Navbar from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience'
import Skill from './component/Skills/Skill';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonials from './component/testimonials/testimonials';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer'
const App = () => {
  return (
    <>
      <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Skill/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App