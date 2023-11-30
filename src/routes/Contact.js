import React from 'react'
import Navbar from "../components/Navbar";
import '../components/portfolio.css'
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="Contacts." text="Let's Connect" />
            <Form />
            <Footer />
        </div>
    )
}

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Your Email</label>
                <input type='Email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Message</label>
                <textarea row="6" placeholder='Type your message' />
                <button className='btn'>Submit</button>
            </form>

        </div>
    )
}

export default Contact