import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2';
import Portfolio_project from '../components/Portfolio_project';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects." text="Some of my most recent works" />
      <Portfolio_project />
      <Footer />

    </div>
  )
}

export default Project