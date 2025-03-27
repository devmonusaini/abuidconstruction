import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dark_logo from "../../Images/logo_dark.png";
import fg1 from "../../Images/fg1.png";
import fg2 from "../../Images/fg2.png";
import fg3 from "../../Images/fg3.png";
import fg4 from "../../Images/fg4.png";
import fg5 from "../../Images/fg5.png";
import fg6 from "../../Images/fg6.png";

import { LuSearch } from "react-icons/lu";
import { MdKeyboardArrowUp } from "react-icons/md";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { SlSocialDribbble } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";

import "./style/style.css";
const Navbar = ({ handleScrollToSection }) => {
  const [pageDown, setPageDown] = useState(false);
  const [searchBar, serSearchBar] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [sidebarmenu, setSidebarMenu] = useState(false);
  const togglePageDown = () => {
    serSearchBar(!searchBar);
  };

  const [scrolling, setScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100; // Convert to percentage
      setScrollProgress(progress);
      setScrolling(scrollTop > 50); // Show button after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG Circle properties
  const circleRadius = 24; // Radius of the circle
  const circleCircumference = 2 * Math.PI * circleRadius; // Circumference
  const progressOffset =
    circleCircumference - (scrollProgress / 100) * circleCircumference;

  // cos
  return (
    <>
      <div id="navbar" className="navbar">
        <div className="header-top">
          <div className="header-top-box header-top-box-1">
            <div className="top-content-box">
              <a href="">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                  </svg>
                </span>
                <h4>818 Suite 161, Oregon, 9999 USA.</h4>
              </a>
            </div>
            <div className="horizontal-line"></div>
            <div className="top-content-box">
              <a href="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                  >
                    <path d="M15.8147 12.407C15.4047 11.98 14.9101 11.7518 14.3859 11.7518C13.866 11.7518 13.3671 11.9758 12.9402 12.4028L11.6044 13.7344C11.4945 13.6752 11.3846 13.6202 11.2789 13.5653C11.1267 13.4892 10.983 13.4173 10.8604 13.3412C9.6091 12.5465 8.47196 11.5108 7.38132 10.1708C6.85291 9.50286 6.49782 8.94063 6.23995 8.36994C6.58659 8.0529 6.90786 7.72317 7.22068 7.40612C7.33905 7.28776 7.45741 7.16517 7.57577 7.0468C8.4635 6.15908 8.4635 5.00926 7.57577 4.12153L6.42173 2.96748C6.29068 2.83643 6.15541 2.70116 6.02859 2.56589C5.77495 2.3038 5.50863 2.03325 5.23386 1.77961C4.82381 1.37379 4.33345 1.1582 3.81772 1.1582C3.30199 1.1582 2.80317 1.37379 2.38045 1.77961C2.37622 1.78384 2.37622 1.78384 2.37199 1.78807L0.934715 3.23803C0.393623 3.77912 0.0850311 4.43857 0.0173946 5.20371C-0.0840601 6.43808 0.279486 7.5879 0.558487 8.34035C1.24331 10.1877 2.26631 11.8997 3.79236 13.7344C5.64391 15.9452 7.87168 17.6911 10.4165 18.9212C11.3888 19.382 12.6866 19.9273 14.1365 20.0203C14.2253 20.0246 14.3183 20.0288 14.4028 20.0288C15.3793 20.0288 16.1994 19.6779 16.842 18.9804C16.8462 18.972 16.8547 18.9677 16.8589 18.9593C17.0787 18.693 17.3323 18.452 17.5987 18.1941C17.7804 18.0208 17.9664 17.8391 18.1482 17.6488C18.5667 17.2134 18.7865 16.7061 18.7865 16.1862C18.7865 15.662 18.5625 15.159 18.1355 14.7362L15.8147 12.407ZM17.3281 16.8583C17.3239 16.8583 17.3239 16.8626 17.3281 16.8583C17.1632 17.0359 16.9942 17.1965 16.8124 17.3741C16.5376 17.6361 16.2586 17.9109 15.9965 18.2195C15.5696 18.6761 15.0665 18.8916 14.4071 18.8916C14.3437 18.8916 14.276 18.8916 14.2126 18.8874C12.9571 18.8071 11.7904 18.3167 10.9153 17.8982C8.52269 16.74 6.42173 15.0955 4.67586 13.0115C3.23436 11.2741 2.27054 9.66772 1.63222 7.94299C1.23908 6.8904 1.09535 6.0703 1.15876 5.29671C1.20103 4.80212 1.39126 4.39207 1.74213 4.04121L3.18363 2.59971C3.39077 2.40525 3.61058 2.29957 3.82618 2.29957C4.09249 2.29957 4.30809 2.46021 4.44336 2.59548C4.44759 2.59971 4.45181 2.60393 4.45604 2.60816C4.7139 2.84912 4.95909 3.09853 5.21695 3.36484C5.348 3.50012 5.48327 3.63539 5.61854 3.77489L6.77259 4.92894C7.22068 5.37703 7.22068 5.7913 6.77259 6.2394C6.65 6.36199 6.53163 6.48458 6.40904 6.60294C6.05395 6.96649 5.71577 7.30467 5.348 7.6344C5.33954 7.64285 5.33109 7.64708 5.32686 7.65553C4.96331 8.01908 5.03095 8.37417 5.10704 8.61513C5.11127 8.62781 5.1155 8.64049 5.11972 8.65317C5.41986 9.38026 5.84259 10.0651 6.48514 10.8809L6.48936 10.8852C7.65609 12.3225 8.88623 13.4427 10.2432 14.3008C10.4165 14.4107 10.5941 14.4995 10.7631 14.584C10.9153 14.6601 11.0591 14.732 11.1816 14.8081C11.1986 14.8165 11.2155 14.8292 11.2324 14.8377C11.3761 14.9095 11.5114 14.9434 11.6509 14.9434C12.0017 14.9434 12.2216 14.7235 12.2934 14.6517L13.7391 13.206C13.8829 13.0622 14.1112 12.8889 14.3775 12.8889C14.6396 12.8889 14.8552 13.0538 14.9862 13.1975C14.9904 13.2017 14.9904 13.2017 14.9947 13.206L17.3239 15.5352C17.7593 15.9664 17.7593 16.4102 17.3281 16.8583Z"></path>
                    <path d="M10.8096 4.76393C11.9171 4.94993 12.9232 5.47412 13.7264 6.2773C14.5296 7.08048 15.0496 8.08658 15.2398 9.19412C15.2863 9.47312 15.5272 9.66758 15.802 9.66758C15.8358 9.66758 15.8654 9.66335 15.8992 9.65912C16.2121 9.6084 16.4192 9.31249 16.3685 8.99967C16.1402 7.65962 15.5061 6.43794 14.5381 5.46989C13.57 4.50184 12.3483 3.86775 11.0083 3.63948C10.6955 3.58875 10.4038 3.79589 10.3488 4.10448C10.2939 4.41307 10.4968 4.71321 10.8096 4.76393Z"></path>
                    <path d="M19.9914 8.83526C19.6152 6.62862 18.5752 4.62066 16.9773 3.02275C15.3794 1.42484 13.3715 0.384928 11.1648 0.00870037C10.8562 -0.0462543 10.5645 0.16511 10.5096 0.473701C10.4589 0.78652 10.666 1.0782 10.9788 1.13316C12.9487 1.46711 14.7453 2.40134 16.1741 3.82594C17.603 5.25476 18.533 7.05135 18.8669 9.02126C18.9134 9.30026 19.1544 9.49472 19.4292 9.49472C19.463 9.49472 19.4926 9.49049 19.5264 9.48626C19.835 9.43976 20.0463 9.14385 19.9914 8.83526Z"></path>
                  </svg>
                </span>
                <h4> 561-555-7689</h4>
              </a>
            </div>
          </div>
          <div className="header-top-box">
            <div className="top-content-box">
              <a href="">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
                  </svg>
                </span>
                <h4>abuild@example.com</h4>
              </a>
            </div>
            <div className="horizontal-line"></div>
            <div className="social-icon">
              <a href="">
                <span>
                  <FaFacebookF />
                </span>
              </a>
              <a href="">
                <span>
                  <FaXTwitter />
                </span>
              </a>
              <a href="">
                <span>
                  <SlSocialDribbble />
                </span>
              </a>
              <a href="">
                <span>
                  <FaLinkedin />
                </span>
              </a>
            </div>
          </div>
        </div>

        <header className="header">
          <div className="header-container">
            <div className="logo-box">
              <img src={dark_logo} />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/" className="menu-link">
                    Home
                  </Link>
                </li>
                <li className="menu-link-box">
                  <a
                    href="/#pages"
                    onMouseEnter={() => setPageDown(true)}
                    onMouseLeave={() => setPageDown(false)}
                    className="menu-link"
                  >
                    Pages{" "}
                    <span className="arrow-down">
                      {pageDown ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </span>
                  </a>

                  <ul className="dropdown">
                    <li>
                      <a
                        href="/#pages/aboutUs"
                        target=""
                        onClick={() => handleScrollToSection("aboutUs")}
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#pages/pricing"
                        target=""
                        onClick={() => handleScrollToSection("pricing")}
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#pages/team"
                        target=""
                        onClick={() => handleScrollToSection("team")}
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#pages/testimonial"
                        target=""
                        onClick={() => handleScrollToSection("testimonial")}
                      >
                        Testimonial
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#pages/faq"
                        target=""
                        onClick={() => handleScrollToSection("faq")}
                      >
                        Faq
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#pages/clients"
                        target=""
                        onClick={() => handleScrollToSection("clients")}
                      >
                        Clients & Partners
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/#pages/services"
                    target=""
                    onClick={() => handleScrollToSection("services")}
                    className="menu-link"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#pages/projects"
                    target=""
                    onClick={() => handleScrollToSection("projects")}
                    className="menu-link"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/#pages/blog"
                    target=""
                    onClick={() => handleScrollToSection("blog")}
                    className="menu-link"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/#pages/contact"
                    target=""
                    onClick={() => handleScrollToSection("contact")}
                    className="menu-link"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="rightbox">
              <div className="btn-box relative-box-search">
                <button className="btn btn-search" onClick={togglePageDown}>
                  {" "}
                  <span>
                    {searchBar ? (
                      <IoMdClose style={{ color: "#fb5b11" }} />
                    ) : (
                      <LuSearch />
                    )}
                  </span>
                </button>
                <div className="absolute-search-box">
                  <div
                    className={`search-box ${
                      searchBar ? "search-box-show" : "search-box-hidden"
                    }`}
                  >
                    <div className="search-input-box">
                      <input type="text" placeholder="Search..." />
                      <button>
                        <LuSearch />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightborder"></div>
              <div className="btn-box">
                <button
                  className="btn btn-nav-line"
                  onClick={() => {
                    setSideBar(!sideBar);
                  }}
                >
                  <span>
                    <HiOutlineBars3BottomRight />
                  </span>
                </button>
              </div>
              <div className="btn-box padding-20 lets-talk-btn-box">
                <button className="btn lets-talk-btn">Let's Talk</button>
              </div>
            </div>
          </div>
        </header>
        <div
          className={`side-nav ${
            sideBar ? "side-nav-show" : "side-nav-hidden"
          }`}
        >
          {/* <div className="mobile-nav">
            <div className="mobile-nav-container"></div>
          </div> */}
        </div>
        <div
          className={`side-nav-container ${
            sideBar ? "side-nav-container-show" : "side-nav-container-hidden"
          }`}
        >
          <div className="side-nav-header">
            <div className="logo-box">
              <img src={dark_logo} />
            </div>
            <div
              className="side-nav-close-btn"
              onClick={() => {
                setSideBar(false);
              }}
            >
              <IoMdClose />
            </div>
          </div>
          <div className="side-nav-part-1">
            <div className="side-nav-inner">
              <p>
                When we go to the office every day, we carry on a time-honored
                tradition of getting to know our clients on a first-name basis,
                and personally meeting their insurance needs.
              </p>
            </div>
            <div className="grid-box-container">
              <img src={fg1} alt="" />
              <img src={fg2} alt="" />
              <img src={fg3} alt="" />
              <img src={fg4} alt="" />
              <img src={fg5} alt="" />
              <img src={fg6} alt="" />
            </div>
            <div className="side-contact-info">
              <div className="side-contact-info-list">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
                  </svg>
                </span>
                <a href="">
                  <h4>818 Suite 161, Oregon, 9999 USA.</h4>
                </a>
              </div>
              <div className="side-contact-info-list">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                  >
                    <path d="M15.8147 12.407C15.4047 11.98 14.9101 11.7518 14.3859 11.7518C13.866 11.7518 13.3671 11.9758 12.9402 12.4028L11.6044 13.7344C11.4945 13.6752 11.3846 13.6202 11.2789 13.5653C11.1267 13.4892 10.983 13.4173 10.8604 13.3412C9.6091 12.5465 8.47196 11.5108 7.38132 10.1708C6.85291 9.50286 6.49782 8.94063 6.23995 8.36994C6.58659 8.0529 6.90786 7.72317 7.22068 7.40612C7.33905 7.28776 7.45741 7.16517 7.57577 7.0468C8.4635 6.15908 8.4635 5.00926 7.57577 4.12153L6.42173 2.96748C6.29068 2.83643 6.15541 2.70116 6.02859 2.56589C5.77495 2.3038 5.50863 2.03325 5.23386 1.77961C4.82381 1.37379 4.33345 1.1582 3.81772 1.1582C3.30199 1.1582 2.80317 1.37379 2.38045 1.77961C2.37622 1.78384 2.37622 1.78384 2.37199 1.78807L0.934715 3.23803C0.393623 3.77912 0.0850311 4.43857 0.0173946 5.20371C-0.0840601 6.43808 0.279486 7.5879 0.558487 8.34035C1.24331 10.1877 2.26631 11.8997 3.79236 13.7344C5.64391 15.9452 7.87168 17.6911 10.4165 18.9212C11.3888 19.382 12.6866 19.9273 14.1365 20.0203C14.2253 20.0246 14.3183 20.0288 14.4028 20.0288C15.3793 20.0288 16.1994 19.6779 16.842 18.9804C16.8462 18.972 16.8547 18.9677 16.8589 18.9593C17.0787 18.693 17.3323 18.452 17.5987 18.1941C17.7804 18.0208 17.9664 17.8391 18.1482 17.6488C18.5667 17.2134 18.7865 16.7061 18.7865 16.1862C18.7865 15.662 18.5625 15.159 18.1355 14.7362L15.8147 12.407ZM17.3281 16.8583C17.3239 16.8583 17.3239 16.8626 17.3281 16.8583C17.1632 17.0359 16.9942 17.1965 16.8124 17.3741C16.5376 17.6361 16.2586 17.9109 15.9965 18.2195C15.5696 18.6761 15.0665 18.8916 14.4071 18.8916C14.3437 18.8916 14.276 18.8916 14.2126 18.8874C12.9571 18.8071 11.7904 18.3167 10.9153 17.8982C8.52269 16.74 6.42173 15.0955 4.67586 13.0115C3.23436 11.2741 2.27054 9.66772 1.63222 7.94299C1.23908 6.8904 1.09535 6.0703 1.15876 5.29671C1.20103 4.80212 1.39126 4.39207 1.74213 4.04121L3.18363 2.59971C3.39077 2.40525 3.61058 2.29957 3.82618 2.29957C4.09249 2.29957 4.30809 2.46021 4.44336 2.59548C4.44759 2.59971 4.45181 2.60393 4.45604 2.60816C4.7139 2.84912 4.95909 3.09853 5.21695 3.36484C5.348 3.50012 5.48327 3.63539 5.61854 3.77489L6.77259 4.92894C7.22068 5.37703 7.22068 5.7913 6.77259 6.2394C6.65 6.36199 6.53163 6.48458 6.40904 6.60294C6.05395 6.96649 5.71577 7.30467 5.348 7.6344C5.33954 7.64285 5.33109 7.64708 5.32686 7.65553C4.96331 8.01908 5.03095 8.37417 5.10704 8.61513C5.11127 8.62781 5.1155 8.64049 5.11972 8.65317C5.41986 9.38026 5.84259 10.0651 6.48514 10.8809L6.48936 10.8852C7.65609 12.3225 8.88623 13.4427 10.2432 14.3008C10.4165 14.4107 10.5941 14.4995 10.7631 14.584C10.9153 14.6601 11.0591 14.732 11.1816 14.8081C11.1986 14.8165 11.2155 14.8292 11.2324 14.8377C11.3761 14.9095 11.5114 14.9434 11.6509 14.9434C12.0017 14.9434 12.2216 14.7235 12.2934 14.6517L13.7391 13.206C13.8829 13.0622 14.1112 12.8889 14.3775 12.8889C14.6396 12.8889 14.8552 13.0538 14.9862 13.1975C14.9904 13.2017 14.9904 13.2017 14.9947 13.206L17.3239 15.5352C17.7593 15.9664 17.7593 16.4102 17.3281 16.8583Z"></path>
                    <path d="M10.8096 4.76393C11.9171 4.94993 12.9232 5.47412 13.7264 6.2773C14.5296 7.08048 15.0496 8.08658 15.2398 9.19412C15.2863 9.47312 15.5272 9.66758 15.802 9.66758C15.8358 9.66758 15.8654 9.66335 15.8992 9.65912C16.2121 9.6084 16.4192 9.31249 16.3685 8.99967C16.1402 7.65962 15.5061 6.43794 14.5381 5.46989C13.57 4.50184 12.3483 3.86775 11.0083 3.63948C10.6955 3.58875 10.4038 3.79589 10.3488 4.10448C10.2939 4.41307 10.4968 4.71321 10.8096 4.76393Z"></path>
                    <path d="M19.9914 8.83526C19.6152 6.62862 18.5752 4.62066 16.9773 3.02275C15.3794 1.42484 13.3715 0.384928 11.1648 0.00870037C10.8562 -0.0462543 10.5645 0.16511 10.5096 0.473701C10.4589 0.78652 10.666 1.0782 10.9788 1.13316C12.9487 1.46711 14.7453 2.40134 16.1741 3.82594C17.603 5.25476 18.533 7.05135 18.8669 9.02126C18.9134 9.30026 19.1544 9.49472 19.4292 9.49472C19.463 9.49472 19.4926 9.49049 19.5264 9.48626C19.835 9.43976 20.0463 9.14385 19.9914 8.83526Z"></path>
                  </svg>
                </span>
                <a href="">
                  <h4> 561-555-7689</h4>
                </a>
              </div>
              <div className="side-contact-info-list">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
                  </svg>
                </span>
                <a href="">
                  <h4>abuild@example.com</h4>
                </a>
              </div>
            </div>
            <div className="side-social-icon">
              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaXTwitter />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="side-nav-part-2">
            <div className="side-nav-menu-link">
              <a href=""> Home </a>
            </div>
            <div className="side-nav-menu-link">
              <div className="side-nav-menu-link-container">
                <a href=""> Page</a>
                <span
                  onClick={() => {
                    setSidebarMenu(!sidebarmenu);
                  }}
                >
                  {sidebarmenu ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </div>
              <div className="more-menu-link-overflow">
                <div
                  className={`more-menu-link  ${
                    sidebarmenu
                      ? "more-menu-link-show"
                      : "more-menu-link-hidden"
                  }`}
                >
                  <a target="" onClick={() => handleScrollToSection("aboutUs")}>
                    {" "}
                    About Us
                  </a>
                  <a target="" onClick={() => handleScrollToSection("pricing")}>
                    {" "}
                    Pricing
                  </a>
                  <a target="" onClick={() => handleScrollToSection("team")}>
                    {" "}
                    Team
                  </a>
                  <a
                    target=""
                    onClick={() => handleScrollToSection("testimonial")}
                  >
                    {" "}
                    Testomonial
                  </a>
                  <a target="" onClick={() => handleScrollToSection("faq")}>
                    {" "}
                    Faq
                  </a>
                  <a target="" onClick={() => handleScrollToSection("clients")}>
                    {" "}
                    Clints & Partners
                  </a>
                </div>
              </div>
            </div>
            <div className="side-nav-menu-link">
              <a
                href="/#services"
                target=""
                onClick={() => handleScrollToSection("services")}
              >
                {" "}
                Services{" "}
              </a>
            </div>
            <div className="side-nav-menu-link">
              <a
                href="/#projects"
                target=""
                onClick={() => handleScrollToSection("projects")}
              >
                {" "}
                Projects{" "}
              </a>
            </div>
            <div className="side-nav-menu-link">
              <a
                href="/#blog"
                target=""
                onClick={() => handleScrollToSection("blog")}
              >
                {" "}
                Blog{" "}
              </a>
            </div>
            <div className="side-nav-menu-link">
              <a
                href="/#contact"
                target=""
                onClick={() => handleScrollToSection("contact")}
              >
                {" "}
                Contact{" "}
              </a>
            </div>
          </div>
        </div>
        <div
          className="scrollup"
          style={{
            display: scrolling ? "flex" : "none",
          }}
          onClick={() => handleScrollToSection("navbar")}
        >
          {/* SVG Circular Progress */}
          <svg width="50" height="50" viewBox="0 0 60 60">
            <circle
              cx="30"
              cy="30"
              r={circleRadius}
              stroke="#fff"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray={circleCircumference}
              strokeDashoffset={progressOffset}
              strokeLinecap="round"
              transform="rotate(-90 30 30)" // Rotates to start from the top
              style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
          </svg>

          {/* Arrow Icon */}
          <FaArrowUp
            size={16}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#fff",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
