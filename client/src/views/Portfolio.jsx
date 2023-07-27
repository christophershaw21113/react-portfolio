import React from 'react'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import ToolKit from '../components/ToolKit'
import Work from '../components/Work'
import Experience from '../components/Experience'
import About from '../components/About'
import Contact from '../components/Contact'

const Portfolio = () => {
  return (
    <section>
        <NavBar />
        <Intro />
        <ToolKit />
        <Work />
        <Experience />
        <About />
        <Contact />
    </section>
  )
}

export default Portfolio