import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        {/* FrontEnd START */}
        <div className="exp__front">
          <h3>FrontEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* BackEnd START */}
        <div className="exp__back">
        <h3>BackEnd Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details__icon"/>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
