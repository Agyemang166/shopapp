import React from "react";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="row">
        <div className="col-md-6 hero-left">
          <p className="text-center">
            {" "}
            Welcome Luxhut Campus Online Apparel!{" "}
            <br />
            <br />
            <Typewriter
              words={[
                "Merry Christmas to You🧑‍🎄❄️🤶🎄",
                "Freshers Sales Begins On 6th January 💙😉🎄",
                "Free Delivery On Campus And Hostels 🆓🚚"
              ]}
              loop={true}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>
        </div>

        <div className="col-md-6 hero-right d-flex justify-content-center align-items-center">
          <img src={hero_image} alt="Luxhut Apparel" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
