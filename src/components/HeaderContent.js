import './portfolio.css'
import React from 'react'

const HeaderContent = ({ heading, text }) => {
    return (
        <div className='hero-img' >
            <div className='heading'>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default HeaderContent