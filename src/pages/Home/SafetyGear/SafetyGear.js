import React from "react";
import safetygear from "../../../images/safetygear.jpg";
import "./SafetyGear.css";
const SafetyGear = () => {
  return (
    <div>
      <h2>safety gear</h2>
      <div className="safety-gear">
        <div>
          <p>
            "Know pain if there’s no safety, and know safety if there’s no pain
            if there’s no safety"
          </p>
        </div>
        <div className="safty">
          <img src={safetygear} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SafetyGear;
