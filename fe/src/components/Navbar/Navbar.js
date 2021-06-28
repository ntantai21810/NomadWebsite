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
              <CustomLink to="/" exact={true} label="Home" />
              <CustomLink to="/about" exact={false} label="About" />
            </ul>

            <form className="d-flex me-auto">
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
            <Link
              to="/login"
              className="d-flex align-items-center user-profile"
            >
              {this.showProfile()}
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  showProfile = (user) => {
    return [
      <span className="user-avatar mr-3" key="0">
        <i className="fas fa-user-circle"></i>
      </span>,
      <span key="1">Đăng nhập</span>,
    ];
  };
}

export default Navbar;
