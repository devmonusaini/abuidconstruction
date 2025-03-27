import React, { useEffect } from "react";
import "./Style/Work.css";
import { ReactTyped } from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import process from "../../Images/process.png";
import serviceSine from "../../Images/services-sline-2.png";
const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="work" className="work-container">
        <div className="work-sub-container">
          <div className="work-about-part">
            <div className="work-about-title-inner">
              <h5>How to process</h5>
              <h1 className="fade-in-out">
                <ReactTyped
                  startWhenVisible
                  strings={["Steps Of Construction Work Process"]}
                  typeSpeed={20}
                  backSpeed={10}
                  showCursor={false}
                  loop={false}
                />
              </h1>

              <div className="work-description">
                <p>
                  On the other hand we denounce righteou indignation and dislike
                  men who are so beguiled and demoralized by the charms of
                  pleasure of the demor alized by the charms of pleasure of the
                  moment.
                </p>
              </div>
            </div>
          </div>
          <div className="work-image" data-aos="fade-left">
            <img src={process} alt="work image" />
          </div>
        </div>
        <div className="work-container-bottom">
          <div className="work-sub-container-bottom">
            <div className="Work-sub-container-bottom-part">
              <img src={serviceSine} alt="work image" />
              <div className="Work-sub-container-bottom-part-content">
                <div className="content-title">
                  <h1>
                    <span>01</span>
                    Step
                  </h1>
                </div>
                <div className="content-description">
                  <h2>Planning</h2>
                  <p>
                    Industry standard dummy text took since the when an unknown
                    printer galley type scrambled.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="Work-sub-container-bottom-part">
              <img src={serviceSine} alt="work image" />
              <div className="Work-sub-container-bottom-part-content">
                <div className="content-title">
                  <h1>
                    <span>02</span>
                    Step
                  </h1>
                </div>
                <div className="content-description">
                  <h2>Design</h2>
                  <p>
                    Industry standard dummy text took since the when an unknown
                    printer galley type scrambled.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="Work-sub-container-bottom-part">
              <img src={serviceSine} alt="work image" />
              <div className="Work-sub-container-bottom-part-content">
                <div className="content-title">
                  <h1>
                    <span>03</span>
                    Step
                  </h1>
                </div>
                <div className="content-description">
                  <h2>Development</h2>
                  <p>
                    Industry standard dummy text took since the when an unknown
                    printer galley type scrambled.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="Work-sub-container-bottom-part">
              <img src={serviceSine} alt="work image" />
              <div className="Work-sub-container-bottom-part-content">
                <div className="content-title">
                  <h1>
                    <span>04</span>
                    Step
                  </h1>
                </div>
                <div className="content-description">
                  <h2>Deliver</h2>
                  <p>
                    Industry standard dummy text took since the when an unknown
                    printer galley type scrambled.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
