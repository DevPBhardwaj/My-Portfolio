import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/open-menu_10027538.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <div className="desktopMenu">

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItems">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItems">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-35} duration={500} className="desktopMenuListItems">Portfolio</Link>
        <Link activeClass='active' to='TechStack' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItems">TechStack</Link>

      </div>

      <button className="desktopMenuBtn " onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
      }}>
        <p>Contact Me</p>  </button>



      



      <img className="mobMenu" src={menu} alt="Menu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }} >

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItems">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItems">About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="ListItems">Portfolio</Link>
        <Link activeClass='active' to='TechStack' spy={true} smooth={true} offset={-100} duration={500} className="ListItems">TechStack</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItems">Contact</Link>


      </div>

    </nav>
  )
}

export default Navbar