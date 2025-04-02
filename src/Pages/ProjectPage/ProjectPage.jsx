import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./ProjectPage.css";
import proDetails from "../../Images/pro-details.jpg";
import portfolioImg01 from "../../Images/portfolio-img1.png";
import portfolioImg02 from "../../Images/portfolio-img2.png";
import { IoMdClose } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "What is your typical project timeline and how do you ensure deadlines These titles are designed to capture the essence of your agency and make a strong first impression. are met Industry Solutions Start with a Simple Contact foram span mail?",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "What is your typical project timeline and how do you ensure deadlines These titles are designed to capture the essence of your agency and make a strong first impression. are met Industry Solutions Start with a Simple Contact?",
  },
  {
    question: "Where can I find more details?",
    answer:
      "What is your typical project timeline and how do you ensure deadlines These titles are designed to capture the essence of your agency and make a strong first impression. are met Industry Solutions Start with a Simple Contact foram span mail?",
  },
];

const ProjectPage = () => {
  const [openIndex, setOpenIndex] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className="project-top-header">
        <h1>Repair & Expand</h1>
        <p>
          <Link to="/">Home</Link> / <span>Repair & Expand</span>
        </p>
      </div>
      <div className="project-inner">
        <div className="project-inner-img">
          <img src={proDetails} alt="project image" />
        </div>
        <div className="inner-content-container">
          <div className="inner-grid-container">
            <div className="grid-column">
              <h6>Clients :</h6>
              <p>Clinex mex</p>
            </div>
            <div className="grid-column">
              <h6>Category :</h6>
              <p>Industry & Factory</p>
            </div>
            <div className="grid-column">
              <h6>Timeframe :</h6>
              <p>August 05, 2024</p>
            </div>
            <div className="grid-column">
              <h6>Website Link :</h6>
              <p>www.onnat.com</p>
            </div>
          </div>
          <div className="inner-content">
            <h2>
              Toshiba unveils electric atalyst technology for carbon recycling.
            </h2>
            <p>
              Phasellus non libero vel sapien consectetur lacinia in vitae nisl.
              Aliquam eget porta urna, eu hendrerit tellus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Vestibulum dignissim nisl
              in tortor tristique, et ornare nisl vulputate. Proin accumsan nibh
              a eros fermentum, sed luctus nunc facilisis. Phasellus vulputate
              diam quis fermentum auctor. Curabitur volutpat venenatis sodales.
              In fringilla justo vitae odio malesuada, eget viverra urna
              egestas.
            </p>
            <p>
              Nullam dapibus faucibus lorem. Mauris ullamcorper, lectus non
              imperdiet tempus, arcu justo blandit ante, et venenatis neque orci
              placerat diam. Pellentesque mollis tincidunt rhoncus. Integer non
              interdum sapien. Ut posuere interdum lacus, vitae euismod sem
              ultricies eget. Donec posuere leo sed porta venenatis. Aenean
              faucibus.
            </p>
            <div className="grid-image-container">
              {[portfolioImg01, portfolioImg02].map((img, index) => (
                <AnimatedImage key={index} src={img} />
              ))}
            </div>
            <div className=""></div>
          </div>

          <div className="inner-content">
            <div className="inner-content-box1">
              <h2>The Challenge Of Project</h2>
              <p>
                Phasellus non libero vel sapien consectetur lacinia in vitae
                nisl. Aliquam eget porta urna, eu hendrerit tellus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                dignissim nisl in tortor tristique, et ornare nisl vulputate.
                Proin accumsan nibh a eros fermentum, sed luctus nunc facilisis.
                Phasellus vulputate diam quis fermentum auctor. Curabitur
                volutpat venenatis sodales. In fringilla justo vitae odio
                malesuada, eget viverra urna egestas.
              </p>
            </div>
            <div className="inner-content-box2">
              <h2>Frequently asked questions</h2>
              <p>
                Etiam non ex enim. Proin sed dictum risus, ac molestie leo.
                Donec ut vehicula augue, at cursus nunc. Phasellus auctor turpis
                non leo malesuada, rhoncus fringilla felis interdum. Praesent
                porttitor purus turpis, vitae interdum justo placerat in. Cras
                consectetur sapien nec massa semper fermentum.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="project-faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="project-faq-item"
                style={{
                  borderTop: openIndex === index ? "none" : "1px solid #979797",
                }}
              >
                <div
                  className="project-faq-question"
                  style={{
                    borderBottom:
                      openIndex === index ? "1px solid #979797" : "none",
                  }}
                >
                  <h3> {faq.question}</h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      transform:
                        openIndex === index
                          ? "translateY('10px')"
                          : "translateY('0px')",
                    }}
                  >
                    {openIndex === index ? <IoMdClose /> : <IoMdAdd />}
                  </button>
                </div>
                <div
                  className={`project-faq-answer ${
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
      <div className="project-bottom-container">
        <div className="project-bottom-box">
          <div className="project-bottom-box-absolute">
            <h1>Sign up for our newsletter to get weekly updates.</h1>
            <div className="project-bottom-inner">
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
// ✅ Animated Image Component (Width Animation on Scroll)
const AnimatedImage = ({ src }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="grid-image"
      style={{ overflow: "hidden", height: "400px" }}
    >
      <motion.img
        src={src}
        alt=""
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ height: "100%", objectFit: "cover", display: "block" }}
      />
    </motion.div>
  );
};

export default ProjectPage;
