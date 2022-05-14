import React from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "./Other.css"
const Other = () => {
  aos.init(
    {duration: 700,}
  );
  return (
    <div className="other">
      <div data-aos="slide-up" className="other-summary">
        <p align="justify">
          A good journey is the best way to eradicate the negative thinking
          inside you. It also helps you in improving yourself. A good journey
          helps in self-development, helps in making new friends, refreshing the
          mind, and bringing new ideas. You can learn about different cultures
          when you travel.
        </p>
      </div>
    </div>
  );
};

export default Other;
