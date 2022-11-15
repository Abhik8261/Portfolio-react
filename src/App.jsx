import React from 'react'
import Header from './component/header/Header';
import Navbar from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience'
import Skill from './component/Skills/Skill';
import Portfolio from './component/Portfolio/Portfolio'
const App = () => {
  return (
    <>
      <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Skill/>
    <Portfolio/>
    </>
  )
}

export default App