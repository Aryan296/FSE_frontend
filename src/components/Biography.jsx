import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          ZeeCare Medical Institute is a leading healthcare facility focused on 
          providing top-notch medical services with a compassionate touch. Our 
          expert team is dedicated to offering personalized care, addressing each 
          patient's individual needs. At ZeeCare, your well-being is our top priority, 
          guiding you towards a healthier, happier life.
          </p>
          <p>We are all in 2024!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
