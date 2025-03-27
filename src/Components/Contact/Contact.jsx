import React from "react";
import "./Style/contact.css";
import contact from "../../Images/contact-map.png";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-container">
        <div className="contact-sub-container">
          <div className="contact-image">
            <img src={contact} alt="contact image" />
          </div>
          <div className="contact-form ">
            <h1>Get In Tech</h1>
            <form>
              <div className="form-grid-box">
                <div className="input-box">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className="input-box">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Phone" />
              </div>
              <div className="input-box">
                <textarea placeholder="Message" rows="3"></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
