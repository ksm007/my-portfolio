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
              <small>1.5+ years as Full Stack Developer</small>
              <br />
              <h6 className="company__name">Boeing India Private Limited</h6>
            </article>
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>6 Months as Research Intern</small>
              <br />
              <h6 className="company__name">Indian Institute of Science</h6>
            </article>
            <article className="about__card">
              <VscLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p>
            {" "}
            Graduate student in Computer science with 2 years of valuable experience in
            Information Technology. Proven ability to work on complex tasks,
            combined with a strong academic foundation, demonstrates dedication
            to personal and professional development. Eager to leverage my
            skills and knowledge in a rigorous academic environment to
            contribute effectively to the program and advance my career goals.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
