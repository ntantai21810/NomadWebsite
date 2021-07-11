import React from "react";
import "./ResItem.css";
import { Link } from "react-router-dom";

class ResItem extends React.Component {
  render() {
    return (
      <div className="card resitem">
        <img src="..." className="card-img-top" alt="restaurant-img" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text" style={{ marginBottom: "8px" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    );
  }
}

export default ResItem;
