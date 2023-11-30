import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeaderContent from '../components/HeaderContent';
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeaderContent heading='About' text="I am a Full Stack Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

const AboutContent = () => {
  return (
    <div >
      <div className='left'>
        <h1>Who Am I</h1>
        <p>I am a full stack Developer who enjoys programming</p>
        <Link to="/contact">
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <h2 className='h2'>My Skills</h2>
        <p>HTML, CSS, Javascript, React.js, C++, Node.js, Express.js </p>

      </div>

    </div>
  )
}

export default About