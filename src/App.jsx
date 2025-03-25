import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import CardSlider from "./Components/CardSlider/CardSlider";
import Work from "./Components/Work/Work";
import Team from "./Components/Team/Team";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CardSlider />
      <Work />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
