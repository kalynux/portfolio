import React from "react";
import "./home.css";
import img1 from "../../assets/analytics.jpg"
import img2 from "../../assets/books.jpg"
import img3 from "../../assets/computer.jpg"
import img4 from "../../assets/keyboard.jpg"
import img5 from "../../assets/aiRobot.jpg"
import img6 from "../../assets/car.jpg"

const home = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container port__container">
        <article className="port__item">
          <div className="port__item__img">
            <img src={img1} alt="project_1" />
          </div>
          <h3>Portfolio title</h3>
          <div className="port__item__cta">
            <a href="http://kalynux.bio" className="btn">GitHub</a>
            <a href="http://kalynux.bio" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="port__item">
          <div className="port__item__img">
            <img src={img2} alt="project_1" />
          </div>
          <h3>Portfolio title</h3>
          <div className="port__item__cta">
            <a href="http://kalynux.bio" className="btn">GitHub</a>
            <a href="http://kalynux.bio" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="port__item">
          <div className="port__item__img">
            <img src={img3} alt="project_1" />
          </div>
          <h3>Portfolio title</h3>
          <div className="port__item__cta">
            <a href="http://kalynux.bio" className="btn">GitHub</a>
            <a href="http://kalynux.bio" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="port__item">
          <div className="port__item__img">
            <img src={img4} alt="project_1" />
          </div>
          <h3>Portfolio title</h3>
          <div className="port__item__cta">
            <a href="http://kalynux.bio" className="btn">GitHub</a>
            <a href="http://kalynux.bio" className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        <article className="port__item">
          <div className="port__item__img">
            <img src={img5} alt="project_1" />
          </div>
          <h3>Portfolio title</h3>
          <div className="port__item__cta">
            <a href="http://kalynux.bio" className="btn">GitHub</a>
            <a href="http://kalynux.bio" className="btn btn-primary">Live Dem</a>
          </div>
        </article>
        <article className="port__item">
          <div className="port__item__img">
            <img src={img6} alt="project_1" />
          </div>
          <h3>Portfolio title</h3>
          <div className="port__item__cta">
            <a href="http://kalynux.bio" className="btn">GitHub</a>
            <a href="http://kalynux.bio" className="btn btn-primary">Live Dem</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default home;
