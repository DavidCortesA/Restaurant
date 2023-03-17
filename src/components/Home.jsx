import React from 'react';
import BannerBackground from '@assets/home-banner-background.png';
import BannerImage from '@assets/home-banner-image.png';
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home__container'>
      <Navbar />
      <div className="home__banner">
        <div className="home__banner--bannerImage">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home__section">
          <h1 className="primary-heading">
          Your Favorite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondaryButton">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home__section--image">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
