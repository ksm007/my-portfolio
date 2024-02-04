import React from "react";
import "./about.css";
import ME from "../../assets/myImg.jpeg";
import { BsFillAwardFill } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ years</small>
            </article>

            <article className="about__card">
              <VscLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>

          <p> have to fill it</p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
