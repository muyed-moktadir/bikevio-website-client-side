import React from "react";
import banner from "../../../images/banner.jpg";
import "./Banner.css"
const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h1>Bike<span >sensation</span></h1>
        <p>
          "Travel doesn’t become adventure until you leave yourself behind".
        </p>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

// style={{color: "tomato"}}