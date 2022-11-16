import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs';

import {SiSemanticweb} from 'react-icons/si'
import {RiContactsLine} from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav >
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about'? 'active':''}><AiOutlineUser/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active':''}><BsBookmark/></a>
      <a href="#skill"onClick={()=>setActiveNav('#skill')} className={activeNav==='#skill' ? 'active':''}><SiSemanticweb/></a>
      <a href="#contact"onClick={()=>setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active':''}><RiContactsLine/></a>
      
    </nav>
  )
}

export default Nav