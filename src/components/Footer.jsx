import React from 'react';
import Logo from '@assets/Logo.svg';
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__sectionOne">
        <div className="footer__sectionOne--logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer__sectionOne--icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebook />
        </div>
      </div>
      <div className="footer__sectionTwo">
        <div className="footer__sectionTwo--columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer__sectionTwo--columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer__sectionTwo--columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
