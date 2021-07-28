import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    let { items } = this.props;
    return (
      <ul className="sidebar">
        {items.map((item, index) => (
          <li key={index}>
            <Link to="" className="sidebar-link">
              Trending
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Sidebar;
