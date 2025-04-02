import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import CardSlider from "../../Components/CardSlider/CardSlider";
import Work from "../../Components/Work/Work";
import Team from "../../Components/Team/Team";
import Testimonial from "../../Components/Testimonial/Testimonial";
// import Contact from "../../Components/Contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <CardSlider />
      <Work />
      <Team />
      <Testimonial />
      {/* <Contact /> */}
    </>
  );
};

export default HomePage;
