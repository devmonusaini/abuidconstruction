import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import CardSlider from "./CardSlider/CardSlider";
import Work from "./Work/Work";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <CardSlider />
      <Work />
      <Team />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
