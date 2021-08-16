import React from "react";
import "./Navbar.css";
import Logo from "../../assets/image/logo-2.png";
import CustomLink from "../../components/CustomLink/CustomLink";
import { Link } from "react-router-dom";
import * as Types from "../../constants/index";
import { connect } from "react-redux";

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
              <CustomLink
                to={[...Types.TYPE_URL]}
                exact={false}
                label="Restaurants"
              />
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
            {this.showProfile(this.props.user)}
          </div>
        </div>
      </nav>
    );
  }

  showProfile = (user) => {
    if (Object.keys(user).length) {
      return [
        <Link key="0" to="" className="d-flex align-items-center user-profile">
          <span className="user-avatar mr-3" key="0">
            <img src={user.avatar} alt="user-avatar" />
          </span>
          <span key="1" className="user-name">
            {user.username}
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Navbar);
