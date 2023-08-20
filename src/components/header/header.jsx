import React from 'react'
import CTA from "./CTA.jsx"
import HeaderSocials from "./headerSocials.jsx"
import Me from "../../assets/cat.jpg"
import "./header.css"

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Fante Ulrich</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
 
        <div className="me">
          <img className='img__Me' src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll down</a>
      </div>
    </header>
  )
}

export default header