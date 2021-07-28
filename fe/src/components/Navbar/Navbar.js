import React from "react";
import "./Navbar.css";
import Logo from "../../assets/image/logo-2.png";
import CustomLink from "../../components/CustomLink/CustomLink";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={Logo} alt="Nomad-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <CustomLink to="/" exact={true} label="Home" extra="1" />
              <CustomLink to="/about" exact={false} label="About" />
              <CustomLink to="/type/all" exact={false} label="Type" />
            </ul>

            <form className="d-flex me-auto navbar-form">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {this.showProfile(0)}
          </div>
        </div>
      </nav>
    );
  }

  showProfile = (user) => {
    if (user) {
      return [
        <Link key="0" to="" className="d-flex align-items-center user-profile">
          <span className="user-avatar mr-3" key="0">
            <img
              src="https://images.unsplash.com/photo-1624841592352-d1fb436f90bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="user-avatar"
            />
          </span>
          <span key="1" className="user-name">
            Tai
          </span>
        </Link>,
        <Link key="1" to="">
          <i className="far fa-bell bell" key="2"></i>
        </Link>,
      ];
    } else
      return (
        <Link to="/login" className="d-flex align-items-center user-profile">
          <span className="user-avatar mr-3" key="0">
            <i className="fas fa-user-circle"></i>
          </span>
          <span key="1" className="user-name">
            Đăng nhập
          </span>
        </Link>
      );
  };
}

export default Navbar;
