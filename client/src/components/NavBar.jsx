import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './styles.css';

const NavBar = () => {
const [isNavOpen, setIsNavOpen] = useState(false)
const [isTransparent, setIsTransparent] = useState(true);

const toggleNav = () => {
  setIsNavOpen(!isNavOpen)
}

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    setIsTransparent(scrollPosition === 1);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    setIsNavOpen(!width > 591);
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize); 

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize)
  };
}, []); 

  return (
    <nav className={`navbar ${isTransparent ? 'transparent' : ''}`}>
    <h1 className="logo">Chris Shaw Portfolio</h1>
    <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
    <Link to={'/'}><span className='nav-slash'>//</span> home</Link>
      <a href="#about"><span className='nav-slash'>//</span> toolkit</a>
      <a href="#projects"><span className='nav-slash'>//</span>work</a>
      <a href="#contact"><span className='nav-slash'>//</span>experience</a>
      <a href="#contact"><span className='nav-slash'>//</span>about</a>
      <a href="#contact"><span className='nav-slash'>//</span>contact</a>
    </div>
    <div className="menu-icon" onClick={toggleNav}>
      <div className={`bar ${isNavOpen ? 'active' : ''}`} />
      <div className={`bar ${isNavOpen ? 'active' : ''}`} />
      <div className={`bar ${isNavOpen ? 'active' : ''}`} />
    </div>
  </nav>
);
}

export default NavBar