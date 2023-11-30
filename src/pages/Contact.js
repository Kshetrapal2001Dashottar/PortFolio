import React from 'react'
import Navbar from "../components/Navbar";
import '../components/portfolio.css'
import Footer from "../components/Footer"
import HeaderContent from '../components/HeaderContent';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeaderContent heading="Contacts." text="Let's Connect" />
            <div className='form'>
                <form>
                    <label>Your Name</label>
                    <input required type='text'></input>
                    <label>Your Email</label>
                    <input required type='Email'></input>
                    <label>Subject</label>
                    <input required type='text'></input>
                    <label>Message</label>
                    <textarea row="6" placeholder='Type your message' />
                    <button onSubmit={() => alert("Thank You for submitting details")} className='btn'>Submit</button>
                </form>

            </div>
            <Footer />
        </div>
    )
}

export default Contact