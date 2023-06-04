import React from "react";
import NavBar from "./NavBar";
import BannerImage from "../Assets/background-removebg-preview.png";
import { FiArrowRight } from "react-icons/fi";
import FoodImage from "../Assets/home-removebg-preview.png"

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-text-section ">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section" >
          <img src= {FoodImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
