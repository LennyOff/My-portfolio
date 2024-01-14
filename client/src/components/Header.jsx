import React from 'react'
import './header.css'
import profileIcon from "../../assets/profileIcon.svg"

const Header = () => {
  return (
    <div id='top' className='header'>
        <img className='headerProfileIcon' src={profileIcon} alt="" />
        <div className='headerNavbar'>
            <a href="#music"><p>Music</p></a>
            <a href="#projects"><p>Projects</p></a>
            <a href="#contact"><p>Contact</p></a>
        </div>
    </div>
  )
}

export default Header