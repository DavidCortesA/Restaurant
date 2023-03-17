import React from 'react';
import AboutBackground from '@assets/about-background.png';
import AboutBackgroundImage from '@assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className='about__container'>
      <div className="about__container--backgroundImage">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about__container--image">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about__section">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
        <p className="primary-text">Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
        <div className="about__section--buttons">
          <button className="secondaryButton">Learn More</button>
          <button className="videoButton">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
