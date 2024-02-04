import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g394pyh', 'template_8x0xdll', form.current, 'zUjD-z4-6fXi_ZvpN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
<section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact__container">

    <div className="contact__ooptions">
    <article className='contact__option'>
    <MdEmail className='contact__option-icon' />
      <h4>Email </h4>
      <h5>kartiksm0007@gmail.com</h5>
      <a href="mailto:kartiksm0007@gmail.com" target='_blank'>Send A Message</a>
    </article>

    <article className='contact__option'>
    <FaInstagram className='contact__option-icon' />
      <h4>Instagram </h4>
      <h5>kartikmarathe007</h5>
      <a href="https://www.instagram.com/kartikmarathe007" target='_blank'>Send A Message</a>
    </article>

    <article className='contact__option'>
    <FaWhatsapp className='contact__option-icon' />
      <h4>Whatsapp</h4>
      <a href="https://api.whatsapp.com/send?phone=+917022023039" target='_blank'>Send A Message</a>
    </article>
    </div>

    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your Full Name' required />
    <input type="email" name='email' placeholder='Your Email' required />
    <textarea name="message" placeholder='Your message'  rows="7" required></textarea>
    <button type='submit' className='btn btn-primary'> Send Message</button>

    </form>
  </div>

</section>
  )
}

export default Contact