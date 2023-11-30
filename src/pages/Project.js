import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import HeaderContent from '../components/HeaderContent';
import Portfolio_project from '../components/PortfolioProject';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeaderContent heading="Projects." text="Some of my most recent works" />
      <Portfolio_project />
      <Footer />

    </div>
  )
}

export default Project