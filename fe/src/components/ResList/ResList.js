import React from "react";
import "./ResList.css";
import ResItem from "../ResItem/ResItem";
import { Link } from "react-router-dom";

class ResList extends React.Component {
  render() {
    return (
      <div className="container res-container">
        <h3 className="reslist-title">Trending</h3>
        <div className="reslist">
          <ResItem />
          <ResItem />
          <ResItem />
          <Link to="" className="next">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default ResList;
