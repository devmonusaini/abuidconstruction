import React from "react";
import "./style/about.css";
import about from "../../Images/about1.png";
import { ReactTyped } from "react-typed";
const About = () => {
  return (
    <div id="aboutUs" className="container">
      <div className="about-sub-container">
        <div className="about-image">
          <img src={about} alt="about image" />
          <div className="about-bottom-left-bg-container">
            <div className="about-color-left-container-bottom"></div>
          </div>
          <div className="about-bottom-right-bg-container">
            <div className="about-color-right-container-bottom">
              <h1>
                25 <span>+ years</span>
              </h1>
              <h5>Experience</h5>
            </div>
          </div>
        </div>
        <div className="about-part">
          <div className="about-title-inner">
            <h5>Who we are</h5>

            <h1 className="fade-in-out">
              <ReactTyped
                startWhenVisible
                strings={[
                  " We Are Commecial and Residential Construction Company Since 1999.",
                ]}
                typeSpeed={20}
                backSpeed={10}
                showCursor={false}
                loop={false}
              />
            </h1>
            <div className="about-description">
              <p>
                Welcome to Abuild, a leading industry innovator with a rich
                history excellence. With a passion for precision and a
                commitment to qualitywe have been empowering industries and
                driving progress. We specialize in helping individuals and
                families regain control of their financial future by repairing
                and improving their team.
              </p>
            </div>
            <div className="grid-box">
              <div className="sub-grid-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fb5b11"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
                </svg>
                <h4>Modern Technology</h4>
              </div>
              <div className="sub-grid-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fb5b11"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
                </svg>
                <h4>Experience Engineers</h4>
              </div>
              <div className="sub-grid-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fb5b11"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
                </svg>
                <h4>Labor preparation</h4>
              </div>
              <div className="sub-grid-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fb5b11"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
                </svg>
                <h4>Ad-hoc Labour Force</h4>
              </div>
            </div>
            <div className="btn-box">
              <div className="descover-btn">
                <a href="">Descover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
