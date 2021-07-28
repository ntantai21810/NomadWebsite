import React from "react";
import { Route, Link } from "react-router-dom";

let CustomLink = ({ to, label, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        let pathname = window.location.pathname;
        let toURL = typeof to === "object" ? to[0] : to;
        let liClass =
          match ||
          (toURL === "/" &&
            pathname !== "/about" &&
            pathname.indexOf("/type") === -1)
            ? "nav-item active"
            : "nav-item";
        return (
          <li className={liClass}>
            <Link
              to={toURL}
              className="nav-link navbar-link"
              aria-current="page"
            >
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

export default CustomLink;
