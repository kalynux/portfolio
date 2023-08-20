import React from 'react'
import "./service.css"
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='services'>
      <h5>what I Offer</h5>
      <h2>Services</h2>

      <div className="container serv__container">

        {/* UI/UX START */}
        <article className='serv'>
          <div className="serv__header">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="serv__list">
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Web Development START */}
        <article className='serv'>
          <div className="serv__header">
            <h3>Web Development</h3>
          </div>

          <ul className="serv__list">
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* CopyWriting */}
        <article className='serv'>
          <div className="serv__header">
            <h3>CopyWriting</h3>
          </div>

          <ul className="serv__list">
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list__icon'/>
              <p>Lorem ipsum dolor, sit adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default service