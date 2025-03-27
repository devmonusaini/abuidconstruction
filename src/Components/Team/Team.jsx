import React from "react";
import "./Style/Team.css";
import team01 from "../../Images/team-thumb-6-768x842.jpg";
import team02 from "../../Images/team-thumb-5-768x842.jpg";
import team03 from "../../Images/team-thumb-4-768x842.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Team = () => {
  return (
    <>
      <div id="team" className="team-container">
        <div className="team-sub-container">
          <div className="team-about-part">
            <div className="team-about-title-inner">
              <h5>Our Team Member </h5>
              <h1>Our Dedicated Team Members</h1>
            </div>
            <div className="team-all-member-btn-box">
              <a href="" className="">
                See All Members
              </a>
            </div>
          </div>
          <div className="team-card">
            <div className="card-box">
              <div className="card-image">
                <div className="social-media-icon">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>{" "}
                  <span>
                    <FaXTwitter />
                  </span>
                </div>
                <img src={team01} alt="" />
              </div>
              <div className="card-sub-box">
                <h2>Bradley Roy</h2>
                <h5>CEO of industrie</h5>
              </div>
            </div>
            <div className="card-box">
              <div className="card-image">
                <div className="social-media-icon">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>{" "}
                  <span>
                    <FaXTwitter />
                  </span>
                </div>
                <img src={team02} alt="" />
              </div>
              <div className="card-sub-box">
                <h2>Lawrence Peter</h2>
                <h5>Four Man</h5>
              </div>
            </div>{" "}
            <div className="card-box">
              <div className="card-image">
                <div className="social-media-icon">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>{" "}
                  <span>
                    <FaXTwitter />
                  </span>
                </div>
                <img src={team03} alt="" />
              </div>
              <div className="card-sub-box">
                <h2>Peter Hase</h2>
                <h5>Sr. Engineer</h5>
              </div>
            </div>
          </div>

          <div className="bottom-line"></div>
        </div>
      </div>
    </>
  );
};

export default Team;
