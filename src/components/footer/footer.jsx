import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoYoutube} from "react-icons/io"
import {IoLogoTwitter} from "react-icons/io"

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>K.A.L.Y.N.U.X</a>

      <ul className="permalinks">
        <li><a href="#"></a> Home</li>
        <li><a href="#about"> About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">PortFolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF className='footer__social__icon'/></a>
        <a href="https://twitter.com"><IoLogoTwitter className='footer__social__icon'/></a>
        <a href="https://youtube.com"><IoLogoYoutube className='footer__social__icon'/></a>
        <a href="https://instagram.com"><FiInstagram className='footer__social__icon'/></a>
      </div>
      <div className="footer__copyright"><small>&copy; Kalynux | All rights reserved</small></div>
    </footer>
  )
}

export default footer