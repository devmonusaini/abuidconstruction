import React from "react";
import "./style/style.css";
import building from "../../Images/building.jpg";
import part1 from "../../Images/1st.png";
import part2 from "../../Images/part-2.jpg";
import shape01 from "../../Images/shape1.png";
import shape02 from "../../Images/shape-2.png";
import icon_logo from "../../Images/img-logo.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="top-bg-container">
        <div className="color-container-top"></div>
      </div>
      <div className="main-container">
        <div className="sub-container">
          <div className="content-part">
            <div className="title-inner">
              <h5>Welcome to Our company</h5>
              <h1>
                We <span>Build</span> Your Dream{" "}
                <img src={building} alt="dream home picture" /> Home
              </h1>
            </div>
            <div className="description">
              <p>
                We specialize in helping individuals and families regain control
                of their financial future by repairing and improving their
                credit scores team.
              </p>
            </div>
            <div className="contact-box">
              <div className="btn get-contact-btn">
                <a href="/contact-us" className="">
                  Get Started Now
                </a>
              </div>
              <div className="img-logo">
                <img src={icon_logo} />
                <h4>
                  <span>2k+ </span> Reviews
                </h4>
              </div>
            </div>
          </div>
          <div className="inner-image">
            <div className="shape02">
              <img src={shape02} alt="shape 2" />
            </div>
            <img src={part1} alt="part 2" />
            <div className="shape01">
              <img src={shape01} alt="shape 1" />
            </div>
            <div className="sub-inner-image">
              <img src={part2} alt="part 2" />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bg-container">
        <div className="color-container-bottom"></div>
      </div>
    </div>
  );
};

export default Hero;
