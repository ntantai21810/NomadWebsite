import React from "react";
import "./Footer.css";
import Logo from "../../assets/image/logo-2.png";
import { Link } from "react-router-dom";

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
          <div className="container footer-mid-container">
            <div>
              <img className="footer-img" src={Logo} alt="nomad-logo" />
              <p className="footer-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                interdum leo at finibus ornare. Aliquam gravida condimentum
                neque, vel ultrices purus dignissim a.
              </p>
            </div>
            <div className="footer-about">
              <h3 className="footer-subtitle">About Nomad</h3>
              <div>
                <Link className="footer-link" to="/about">
                  About us
                </Link>
                <Link className="footer-link" to="">
                  Blog
                </Link>
                <Link className="footer-link" to="">
                  Developers
                </Link>
                <Link className="footer-link" to="">
                  Mobile apps
                </Link>
                <Link className="footer-link" to="">
                  Contact
                </Link>
              </div>
            </div>
            <div className="footer-business">
              <h3 className="footer-subtitle">Business</h3>
              <div>
                <Link className="footer-link" to="">
                  Add a restaurant
                </Link>
                <Link className="footer-link" to="">
                  Book
                </Link>
                <Link className="footer-link" to="">
                  Advertise
                </Link>
              </div>
            </div>
            <div className="footer-partner">
              <h3 className="footer-subtitle">Partner With Us</h3>
              <div>
                <Link className="footer-link" to="">
                  For Restaurant
                </Link>
                <Link className="footer-link" to="">
                  For Driver
                </Link>
              </div>
              <div className="footer-social">
                <Link className="footer-icon" to="">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link className="footer-icon" to="">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="footer-icon" to="">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className="footer-copyright">
          <i className="far fa-copyright copyright-icon"></i>Copyright 2021{" "}
          <Link to="">Nomad</Link> by Noname. All Rights Reserved
        </h3>
      </div>
    );
  }
}
export default Footer;
