import React from "react";
import { Route, Link } from "react-router-dom";

let CustomLink = ({ to, label, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        let liClass = match ? "nav-item active" : "nav-item";
        return (
          <li className={liClass}>
            <Link to={to} className="nav-link navbar-link" aria-current="page">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

export default CustomLink;
