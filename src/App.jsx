import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ContactPage from "./Pages/Contactpage/contactpage";
import ServicePage from "./Pages/Servicepage/ServicePage";

function App() {
  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Router>
      <Navbar handleScrollToSection={handleScrollToSection} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-page" element={<ProjectPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/service-page" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
