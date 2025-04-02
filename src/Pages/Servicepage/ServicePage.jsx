import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";
import { GoArrowUpRight } from "react-icons/go";
import services01 from "../../Images/services_01-700x472.jpg";
import services02 from "../../Images/services_02-700x472.jpg";
import services03 from "../../Images/services_03-700x472.jpg";
import services04 from "../../Images/services_04-700x472.png";
import services05 from "../../Images/services_06-700x472.png";
import services06 from "../../Images/services_05-700x472.png";
import video from "../../Images/video.mp4";
import { FaArrowRight } from "react-icons/fa6";
import { PiArrowUpRightBold } from "react-icons/pi";
import { ReactTyped } from "react-typed";
import process1 from "../../Images/process-h4-img1.png";
import process2 from "../../Images/process-h4-img2.png";
import process3 from "../../Images/process-h4-img3.png";
import circle from "../../Images/circle.png";

const ServicePage = () => {
  const cards = [
    {
      title: "General Construction Services",
      image: services01,
      description:
        "Dedicated to briefly describe what your company does specialize in constructions building. ",
    },
    {
      title: "Pre-Construction Services",
      image: services02,
      description:
        "Dedicated to briefly describe what your company does specialize in constructions building. ",
    },
    {
      title: "Construction Management",
      image: services03,
      description:
        "Dedicated to briefly describe what your company does specialize in constructions building. ",
    },
    {
      title: "Specialized Construction Services",
      image: services04,
      description:
        "Dedicated to briefly describe what your company does specialize in constructions building. ",
    },
    {
      title: "Renovation and Remodeling",
      image: services05,
      description:
        "Dedicated to briefly describe what your company does specialize in constructions building. ",
    },
    {
      title: "Infrastructure and Civil Work",
      image: services06,
      description:
        "Dedicated to briefly describe what your company does specialize in constructions building. ",
    },
  ];

  const faqs = [
    {
      question: "Customer-Centered Approach",
      answer:
        "We are dedicated to sustainability and environmental responsibility. Our commitment to sustainable practices ensures that our solutions are not only effective but also environmentally conscious.",
    },
    {
      question: "Sustainability Commitment",
      answer:
        "We are dedicated to sustainability and environmental responsibility. Our commitment to sustainable practices ensures that our solutions are not only effective but also environmentally conscious.",
    },
    {
      question: "Customer-Centered Approach",
      answer:
        "We are dedicated to sustainability and environmental responsibility. Our commitment to sustainable practices ensures that our solutions are not only effective but also environmentally conscious.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="service-top-header">
        <h1>Services</h1>
        <p>
          <Link to="/">Home</Link> / <span>Services</span>
        </p>
      </div>
      <div className="service-item-container">
        <div className="service-item-grid-container">
          {cards.map((card, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-img-box">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="service-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#">
                  View details{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="service-vedio-bg-container">
        <div className="vedio-bg-absolute">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="vedio-bg-absolute opacity-40"></div>
        <div className="faq-container">
          <div class="sub-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="9"
              viewBox="0 0 31 9"
              fill="none"
            >
              <rect y="0.5" width="8" height="8" fill="#FB5B11"></rect>
              <line x1="8" y1="4" x2="31" y2="4" stroke="#FB5B11"></line>
            </svg>
            <span> Why Choose Us </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="9"
              viewBox="0 0 31 9"
              fill="none"
            >
              <rect
                width="8"
                height="8"
                transform="matrix(-1 0 0 1 31 0.5)"
                fill="#FB5B11"
              ></rect>
              <line
                y1="-0.5"
                x2="23"
                y2="-0.5"
                transform="matrix(-1 0 0 1 23 4.5)"
                stroke="#FB5B11"
              ></line>
            </svg>{" "}
          </div>

          <h1 className="fade-in-out">
            <ReactTyped
              startWhenVisible
              strings={["Expertise and Experience"]}
              typeSpeed={20}
              backSpeed={10}
              showCursor={false}
              loop={false}
            />
          </h1>
          <p>
            We bring decades of industry experience and expertise to every
            project Our team complexities
          </p>
          <div className="faq-mini-container">
            {faqs.map((faq, index) => (
              <div key={index} className="service-faq-item">
                <h2 className="service-faq-question">
                  {faq.question}
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      backgroundColor: openIndex === index ? "#fb5b11" : "#000",
                      transform:
                        openIndex === index
                          ? "translateY('10px')"
                          : "translateY('0px')",
                    }}
                  >
                    <PiArrowUpRightBold />
                  </button>
                </h2>
                <div
                  className={`service-faq-answer ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Working-process-container">
        <div class="sub-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="9"
            viewBox="0 0 31 9"
            fill="none"
          >
            <rect y="0.5" width="8" height="8" fill="#FB5B11"></rect>
            <line x1="8" y1="4" x2="31" y2="4" stroke="#FB5B11"></line>
          </svg>
          <span style={{ color: "#000" }}> Why Choose Us </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="9"
            viewBox="0 0 31 9"
            fill="none"
          >
            <rect
              width="8"
              height="8"
              transform="matrix(-1 0 0 1 31 0.5)"
              fill="#FB5B11"
            ></rect>
            <line
              y1="-0.5"
              x2="23"
              y2="-0.5"
              transform="matrix(-1 0 0 1 23 4.5)"
              stroke="#FB5B11"
            ></line>
          </svg>{" "}
        </div>
        <h1>Exploration To Processing</h1>
        <div className="Working-img-container">
          <div className="img-content">
            <div className="img-content-inner">
              <img src={process1} alt="" />
              <div className="number-box">01</div>
            </div>

            <h3>Share your Projects</h3>
            <p>Choose a convenient time and date for your cleaning service. </p>
          </div>
          <div className="circle">
            <img src={circle} alt="circle" />
          </div>
          <div className="img-content-middle">
            <div className="img-content-middle-inner">
              <img src={process2} alt="" />
              <div className="number-box-middle">02</div>
            </div>

            <h3>Testing Your Projects</h3>
            <p>Choose a convenient time and date for your cleaning service. </p>
          </div>
          <div className="circle">
            <img src={circle} alt="circle" />
          </div>
          <div className="img-content">
            <div className="img-content-inner">
              <img src={process3} alt="" />
              <div className="number-box">03</div>
            </div>
            <h3>Complete Project</h3>
            <p>Choose a convenient time and date for your cleaning service. </p>
          </div>
        </div>
      </div>
      <div className="service-bottom-container">
        <div className="service-bottom-box">
          <div className="service-bottom-box-absolute">
            <h1>Sign up for our newsletter to get weekly updates.</h1>
            <div className="service-bottom-inner">
              <input
                type="email"
                placeholder="Your Email Address"
                style={{
                  "::placeholder": { color: "#fd9667" },
                  placeholderColor: "#fd9667",
                }}
              />
              <button type="submit">
                Submit{" "}
                <span>
                  <GoArrowUpRight className="icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
