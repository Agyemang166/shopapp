import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="row">
                <div className="col-md-6 hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>

                    <div className="hero-hand-icon d-flex align-items-center">
                        <p>new</p>
                        <img className="w-20" src={hand_icon} alt="Luxhut Apparel" />
                    <p>collections</p>
                    </div>
                    <div className="hero-latest-btn d-flex justify-content-center align-items-center">
                        <div className="">Latest Collection</div>
                        <img src={arrow_icon} alt="Luxhut Apparel" />
                    </div>
                </div>


                <div className="col-md-6 hero-right">
                <img src={hero_image} alt="Luxhut Apparel"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
