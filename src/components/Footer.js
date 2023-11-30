import React from 'react'
import './portfolio.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={
                            { color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>D-8/3, CCF , Varanasi, UP</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4> <Link to="Tel: 123-456-7890"> <FaPhone size={20} style={
                            { color: "#fff", marginRight: "2rem" }} />
                            123-456-789 </Link></h4>
                    </div>

                    <div className="Email">
                        <h4><Link to="mailto:kshetrapaldashottar@gmail.com"> <FaMailBulk size={20} style={
                            { color: "#fff", marginRight: "2rem" }} />
                            kshetrapaldashottar@gmail.com </Link></h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About Me</h4>
                    <p>This is Kshetrapal Dashottar, a Fullstack Developer</p>
                    <div className="social">
                        <Link to="https://www.facebook.com/"><FaFacebook size={30} style={
                            { color: "#fff", marginRight: "1rem" }} /></Link>

                        <Link to="https://www.twitter.com/"><FaTwitter size={30} style={
                            { color: "#fff", marginRight: "1rem" }} /></Link>

                        <Link to="https://www.linkdin.com/"><FaLinkedin size={30} style={
                            { color: "#fff", marginRight: "1rem" }} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer