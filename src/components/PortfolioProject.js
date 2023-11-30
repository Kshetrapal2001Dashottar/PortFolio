
import React from 'react'
import { NavLink } from 'react-router-dom'
import './portfolio.css'
import pro1 from '../images/bizpro.jpg'
import pro2 from '../images/card.jpg'
import pro3 from '../images/javascript_week3.jpg'
import pro4 from '../images/todo_list.jpg'
import pro5 from '../images/qr.jpg'
import pro6 from '../images/clock.jpg'
import pro7 from '../images/weatherapp.jpg'
import pro8 from '../images/ai.jpg'
import pro9 from '../images/calculator.png'
import pro10 from '../images/userData.png'
import pro11 from '../images/shopCart.png'

const PortfolioProject = () => {

    const ProjectCardData = [
        {
            image: pro1,
            title: "Bizpro",
            text: "CSS Static",
            view: "https://kshetrapal2001dashottar.github.io/Bizpro/",
            source: "https://github.com/Kshetrapal2001Dashottar/Bizpro"
        },
        {
            image: pro2,
            title: "Orange",
            text: "CSS Responsive ",
            view: "https://kshetrapal2001dashottar.github.io/orange/",
            source: "https://github.com/Kshetrapal2001Dashottar/orange"
        },
        {
            image: pro3,
            title: "Javascript",
            text: "Javascript Logics ",
            view: "https://kshetrapal2001dashottar.github.io/JS_logics/",
            source: "https://github.com/Kshetrapal2001Dashottar/JS_logics"
        },
        {
            image: pro4,
            title: "Todo List",
            text: "Dom Manuplation",
            view: "https://kshetrapal2001dashottar.github.io/todo/todo.html",
            source: "https://github.com/Kshetrapal2001Dashottar/todo"
        },
        {
            image: pro4,
            title: "Chatbot",
            text: "Dom Manuplation ",
            view: "https://kshetrapal2001dashottar.github.io/chatapp/chatbot.html",
            source: "https://github.com/Kshetrapal2001Dashottar/chatapp"
        },
        {
            image: pro5,
            title: "QR Image",
            text: "JS with API ",
            view: "https://kshetrapal2001dashottar.github.io/qrImage/qr.html",
            source: "https://github.com/Kshetrapal2001Dashottar/qrImage"
        },
        {
            image: pro6,
            title: "Clock",
            text: "Javscript ",
            view: "https://kshetrapal2001dashottar.github.io/clock/clock.html",
            source: "https://github.com/Kshetrapal2001Dashottar/clock"
        },
        {
            image: pro7,
            title: "Weather App",
            text: "JS with API ",
            view: "https://kshetrapal2001dashottar.github.io/weather/weather.html",
            source: "https://github.com/Kshetrapal2001Dashottar/weather"
        },
        {
            image: pro8,
            title: "AI Image Generator",
            text: "JS with API ",
            view: "https://kshetrapal2001dashottar.github.io/aiImage/imageAI.html",
            source: "https://github.com/Kshetrapal2001Dashottar/aiImage"
        },
        {
            image: pro9,
            title: "Calculator",
            text: "React Logics",
            view: "https://github.com/Kshetrapal2001Dashottar/Calculator.git",
            source: "https://github.com/Kshetrapal2001Dashottar/Calculator.git"
        },
        {
            image: pro10,
            title: "GitHub User Data",
            text: "React Custom Api ",
            view: "https://github.com/Kshetrapal2001Dashottar/gitUsers",
            source: "https://github.com/Kshetrapal2001Dashottar/gitUsers"
        },
        {
            image: pro11,
            title: "Shop Cart",
            text: "React Context API ",
            view: "https://github.com/Kshetrapal2001Dashottar/ShopCart",
            source: "https://github.com/Kshetrapal2001Dashottar/ShopCart"
        }
    ];

    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {ProjectCardData.map((val, ind) => {

                    return (
                        <ProjectCards
                            key={ind}
                            image={val.image}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    )

                })}
            </div>
        </div>
    )
}

const ProjectCards = (props) => {
    return (
        <div className="project-card">
            <img src={props.image} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.source} className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    )
}


export default PortfolioProject