import React from "react";
import aos from "aos";
import "aos/dist/aos.css";


import safetygear from "../../../images/safetygear.jpg";
import "./SafetyGear.css";
const SafetyGear = () => {
  aos.init(
    {duration: 600,}
  );
  return (
    <div>
      <h1>Safety Gear</h1>
      <div className="safety-gear">
        <div>
          <p data-aos="fade-left">
            "Know pain if there’s no safety, and know safety if there’s no pain
            if there’s no safety"
          </p>
        </div>
        <div data-aos="fade-right" className="safty">
          <img src={safetygear} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SafetyGear;
