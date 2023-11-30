import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import '../components/portfolio.css'
import IntroImg from '../images/tech3.jpg'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Footer />
    </div>
  )
}

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I AM A SOFTWARE DEVELOPER</p>
        <h1>FULL STACK DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contacts</Link>
        </div>
      </div>
    </div>
  )
}

export default Home