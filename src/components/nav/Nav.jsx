import React from 'react'
import { RiHomeFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { RiMessageFill } from "react-icons/ri";
import { useState } from 'react';
import { AiOutlineProject } from "react-icons/ai";
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
<nav>
  <a href="#" onClick={() => setActiveNav('#')} className={activeNav ==='#' ?'active':''}><RiHomeFill /></a>
  <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ?'active':''}><FaUserAlt /></a>
  <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ?'active':''}><IoBookSharp /></a>
  <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ?'active':''}><AiOutlineProject /></a> 
  <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ?'active':''}><RiMessageFill /></a> 

</nav>
  )
}

export default Nav