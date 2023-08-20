import React from "react";
import "./about.css";
import me from "../../assets/ticket.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={me} alt="about me image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Months Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Experience</h5>
              <small>342+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Experience</h5>
              <small>298+ Completed Project</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum consequuntur autem, aspernatur temporibus voluptatem odit dolore, molestiae aliquid cumque corporis exercitationem ab cupiditate, rem quia dolores explicabo amet unde corrupti.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
