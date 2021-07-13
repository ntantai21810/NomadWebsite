import React from "react";
import "./Footer.css";
import Logo from "../../assets/image/logo-2.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="container footer-top-container">
            <div className="col-4">
              <span className="footer-input-title">
                Connect with us for update and offers
              </span>
              <div className="input-group footer-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                <div className="input-group-append">
                  <span className="input-group-text">Subcribe now</span>
                </div>
              </div>
            </div>
            <div className="select-language">
              <i className="fas fa-globe-asia"></i>
              <select name="languages" className="languages">
                <option value="English">English</option>
                <option value="Vietnamese">Vietnamese</option>
              </select>
              <i className="fas fa-sort-down"></i>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="container">
            <div className="footer-logo">
              <img className="footer-img" src={Logo} alt="nomad-logo" />
              <p className="footer-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                interdum leo at finibus ornare. Aliquam gravida condimentum
                neque, vel ultrices purus dignissim a.
              </p>
            </div>
            <div className="footer-about">
              <h3>About Nomad</h3>
              <ul>
                <li>About us</li>
                <li>Blog</li>
                <li>Developers</li>
                <li>Mobile apps</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-business">
              <h3>Business</h3>
              <ul>
                <li>Add a restaurant</li>
                <li>Book</li>
                <li>Advertise</li>
              </ul>
            </div>
            <div className="footer-partner">
              <h3>Partner With Us</h3>
              <ul>
                <li>For Restaurant</li>
                <li>For Driver</li>
              </ul>
              <ul className="footer-social">
                <li>
                  <i className="fab fa-facebook"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className="footer-copyright">
          Copyright 2021 Nomad by Noname. All Rights Reserved
        </h3>
      </div>
    );
  }
}
export default Footer;
