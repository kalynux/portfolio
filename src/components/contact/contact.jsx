import React from 'react'
import "./contact.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsMessenger} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>ulrichdilane770@gmail.com</h5>
            <a target='_blank' href="mailto:ulrichdilane770@gmail.com"> Send An Email</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option__icon'/>
            <h4>FaceBook</h4>
            <h5>Kalynux Stywall</h5>
            <a target='_blank' href="https://m.me/100080209403180"> Send A Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>WhatsApp</h4>
            <h5>Kalynux Dev</h5>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=237672745831"> Send A Message</a>
          </article>
        </div>

        {/* contact form START */}
        <div className="contact__form">
          <form action="">
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="msg" id="msg" rows="7" placeholder='Enter your message' required></textarea>

            <button type="submit" className='btn btn-primary'> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default contact