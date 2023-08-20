import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Service from './components/service/service.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import Portfolio from './components/home/home.jsx'

const app = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default app