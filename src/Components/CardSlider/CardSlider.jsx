import React, { useState, useEffect } from "react";
import "./Style/CardSlider.css"; // Importing the CSS for styling
import "./Style/Project.css";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import services01 from "../../Images/services_01-700x472.jpg";
import services02 from "../../Images/services_02-700x472.jpg";
import services03 from "../../Images/services_03-700x472.jpg";
import services04 from "../../Images/services_04-700x472.png";
import services05 from "../../Images/services_06-700x472.png";
import services06 from "../../Images/services_05-700x472.png";

const CardSlider = () => {
  const cards = [
    {
      title: "General Construction Services",
      image: services01,
      description: "Consectetur ipiscing elit tellus ullam corper mattis",
    },
    {
      title: "Pre-Construction Services",
      image: services02,
      description: "Consectetur ipiscing elit tellus ullam corper mattis",
    },
    {
      title: "Construction Management",
      image: services03,
      description: "Consectetur ipiscing elit tellus ullam corper mattis",
    },
    {
      title: "Specialized Construction Services",
      image: services04,
      description: "Consectetur ipiscing elit tellus ullam corper mattis",
    },
    {
      title: "Renovation and Remodeling",
      image: services05,
      description: "Consectetur ipiscing elit tellus ullam corper mattis",
    },
    {
      title: "Infrastructure and Civil Work",
      image: services06,
      description: "Consectetur ipiscing elit tellus ullam corper mattis",
    },
  ];

  const totalCards = cards.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default 3 cards visible

  // Handle screen resize
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1); // Show 1 card on small screens
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2); // Show 2 cards on tablets
      } else {
        setVisibleCards(3); // Show 3 cards on large screens
      }
    };

    // Initial check
    updateVisibleCards();
    // Listen for window resize
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  // Get three cards dynamically (handles infinite looping)
  // const getCardsToDisplay = () => {
  //   return [
  //     cards[currentIndex % totalCards],
  //     cards[(currentIndex + 1) % totalCards],
  //     cards[(currentIndex + 2) % totalCards],
  //   ];
  // };

  return (
    <>
      <div className="slider-main-container">
        <div className="slider-container">
          <div className="slider-title-inner">
            <h5>Services</h5>
            <h1>Providing Solutions Of Every Kind</h1>
            <div className="slider-description">
              <p>Engines, prime movers, and exhaust gas turbochargers.</p>
            </div>
            <div className="slider-controls">
              <button onClick={prevSlide}>
                <FaArrowLeft />
              </button>
              <button onClick={nextSlide}>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Card Slider */}
          <motion.div
            className="slider-content"
            key={currentIndex}
            initial={{ x: "30%" }} // Start from the right
            animate={{ x: "0%" }} // Slide to position
            exit={{ x: "-30%" }} // Move left when leaving
            transition={{ type: "tween", duration: 0.1, ease: "easeInOut" }} // Smooth motion
          >
            {[...Array(visibleCards)].map((_, i) => {
              const index = (currentIndex + i) % totalCards;
              return (
                <div className="card" key={index}>
                  <div className="card-img-box">
                    <img src={cards[index].image} alt={cards[index].title} />
                  </div>
                  <div className="card-content">
                    <h3>{cards[index].title}</h3>
                    <p>{cards[index].description}</p>
                    <a href="#">
                      View details <FaArrowRight />
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="project-main-container">
        <div className="project-container">
          <div className="project-sub-container project-sub-container-01">
            <h1>110 +</h1>
            <h2>Completed Projects</h2>
          </div>
          <div className="project-sub-container project-sub-container-02">
            <h1>100%</h1>
            <h2>Clients Satisfaction</h2>
          </div>
          <div className="project-sub-container project-sub-container-03">
            <h1>280+</h1>
            <h2>Team Members</h2>
          </div>
          <div className="project-sub-container project-sub-container-04">
            <h1>25</h1>
            <h2>Awards</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
