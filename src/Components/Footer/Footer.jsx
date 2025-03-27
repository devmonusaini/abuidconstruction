import React from "react";
import "./Style/Footer.css";
import service01 from "../../Images/services_01-700x520.jpg";
import service02 from "../../Images/services_02-700x520.jpg";
import service03 from "../../Images/services_03-700x520.jpg";
import service04 from "../../Images/services_04-700x520.jpg";
import service05 from "../../Images/services_05-700x520.jpg";
import service06 from "../../Images/services_06-700x520.jpg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer-container">
        <div className="footer-sub-container">
          <div className="grid-container-box">
            <div className="footer-sub-box-1">
              <h2>Newsletter</h2>
              <p>
                Welcome to consaik , a leader in the industry/secto since With a
                passion for excellence.
              </p>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <button>Subscribe Now</button>
            </div>

            <div className="footer-sub-box-2">
              <div className="footer-sub-box-2-item-1">
                <h2>Quick links</h2>
                <div className="list-box">
                  <ul>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Our Services</a>
                    </li>
                    <li>
                      <a href="/pricing">Our Pricing</a>
                    </li>
                    <li>
                      <a href="/team">Our Team</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-sub-box-2-item-2">
                <h2>Services</h2>
                <div className="list-box">
                  <ul>
                    <li>
                      <a href="/about-us">Building Renovation</a>
                    </li>
                    <li>
                      <a href="/services">Generation Contacting</a>
                    </li>
                    <li>
                      <a href="/pricing">Repair & Expand</a>
                    </li>
                    <li>
                      <a href="/team">Architecture Design</a>
                    </li>
                    <li>
                      <a href="/contact-us">Building Construction</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-sub-box-3">
              <div>
                <h2>Gallery</h2>
                <div className="gallery-grid-box">
                  <img src={service01} alt="service01" />
                  <img src={service02} alt="service02" />
                  <img src={service03} alt="service03" />
                  <img src={service04} alt="service04" />
                  <img src={service05} alt="service05" />
                  <img src={service06} alt="service06" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <p>�� 2021 consaik. All rights reserved.</p>

            <div className="bottom-social-media-icon">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaXTwitter />{" "}
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaLinkedin />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
