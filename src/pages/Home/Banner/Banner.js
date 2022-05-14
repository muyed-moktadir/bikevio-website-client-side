import React from "react";
import aos from "aos";
import "aos/dist/aos.css";
import banner from "../../../images/banner.jpg";
import "./Banner.css"
const Banner = () => {
  aos.init();
  return (
    <div className="banner">
      <div data-aos="fade-right">
        <h1 data-aos="fade-right">Bike<span style={{color: "tomato"}}>Vio</span></h1>
        <p>
          "Travel doesn’t become adventure until you leave yourself behind".
        </p>
      </div>
      <div data-aos="fade-left">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

// style={{color: "tomato"}}