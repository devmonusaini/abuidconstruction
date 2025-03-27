import React, { useState, useEffect } from "react";
import "./Style/Testimonial.css";
import rec from "../../Images/rec.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const totalCards = 4;
  const cards = [
    {
      name: "Abdur Rashid",
      Worker: "Founder & CEO",
      description:
        "Working with consik a fantastic experience. They truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were exceptional.",
    },
    {
      name: "Brish Jhonson",
      Worker: "Web Developer",
      description:
        "Working with consik a fantastic experience. They truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were exceptional.",
    },
    {
      name: "Marry Jaen",
      Worker: "Web Designer ",
      description:
        "Working with consik a fantastic experience. They truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were exceptional.",
    },
    {
      name: "Alen Walker",
      Worker: "Manager",
      description:
        "Working with consik a fantastic experience. They truly understood our vision and turned our dream home into a reality. The attention to detail and dedication were exceptional.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const card = cards[currentIndex];

  return (
    <div id="testimonial" className="testimonial-container">
      <div className="testimonial-sub-container">
        <div className="testimonial-about-part">
          <div className="testimonial-about-title-inner">
            <h5>Our Testimonial</h5>
            <h1>What Our Clients Say About Our Work.</h1>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-card-box">
            <div className="testimonial-card-image">
              <img src={rec} alt="testimonial image" />
            </div>
            <h1>Let’s Build Future</h1>
            <p>
              We denounce righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment.
            </p>
            <button>Get Started Now</button>
          </div>
        </div>
      </div>
      <div className="slider-testimonial">
        <div className="slider-testimonial-container">
          <motion.div
            className="slider-testimonial-about"
            key={currentIndex}
            initial={{ x: "90%" }}
            animate={{ x: "2%" }}
            exit={{ x: "-90%" }}
            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
          >
            {[...Array(1)].map((_, i) => {
              const index = (currentIndex + i) % totalCards;
              return (
                <div className="slider-testimonial-about-title-inner">
                  <h4>{card.description}</h4>
                  <div className="icon-box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="87"
                      height="62"
                      viewBox="0 0 87 62"
                      fill="none"
                    >
                      <path
                        d="M60.6082 0H83.9995C85.6564 0 86.9995 1.34315 86.9995 3V33.6957L66.7821 62V34.3696H53.6082C51.9514 34.3696 50.6082 33.0264 50.6082 31.3696V10C50.6082 4.47715 55.0854 0 60.6082 0Z"
                        fill="#FB5B11"
                      ></path>
                      <path
                        d="M10.741 0H34.1323C35.7892 0 37.1323 1.34315 37.1323 3V33.6957L16.9149 62V34.3696H3.74103C2.08418 34.3696 0.741028 33.0264 0.741028 31.3696V10C0.741028 4.47715 5.21819 0 10.741 0Z"
                        fill="#FB5B11"
                      ></path>
                    </svg>
                    <div className="icon-box-content">
                      <h2>{card.name}</h2>
                      <h4>{card.Worker}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          <div className="testimonial-navigation-buttons">
            {[...Array(totalCards)].map((_, index) => (
              <button
                key={index}
                className={currentIndex === index ? "active" : ""}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
