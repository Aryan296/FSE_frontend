import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          ZeeCare Medical Institute is a state-of-the-art facility committed 
          to delivering comprehensive, compassionate healthcare. Our skilled 
          professionals provide personalized care tailored to each patient, 
          prioritizing your well-being for a harmonious journey towards optimal 
          health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" height={"500px"}/>
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
