import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/kartik.kartik.7505468/"  target='_blank'><FaFacebook/></a>
        <a href="https://twitter.com/ksm0073"  target='_blank'><FaTwitter/></a>
      <a href="https://www.instagram.com/kartikmarathe007" target='_blank'><FaInstagram/></a>

      </div>
    </footer>
  );
};

export default Footer;
