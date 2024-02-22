import React from "react";
import "./Hero.css";
import bg from "/images/bg.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <div className="videobg">
        <video autoPlay loop muted>
          <source src={bg} type="video/mp4" />
        </video>

        <div className="content">
            <h1 >welocome to <br /> <span className="btn-shine"> jethwa pottery</span></h1>
        </div>

      </div>
    </div>
  );
};

export default Hero;
