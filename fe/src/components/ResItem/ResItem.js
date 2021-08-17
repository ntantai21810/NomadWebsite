import React from "react";
import "./ResItem.css";
import { Link } from "react-router-dom";

class ResItem extends React.Component {
  showRating = (rating) => {
    let result = [];
    let i;
    for (i = 1; i <= rating; i++) {
      result.push(
        <i
          className="fas fa-star restaurant-desc-star"
          key={Math.random() ** 2 + this.props.res._id}
        ></i>
      );
    }
    if (i - rating !== 1) {
      result.push(
        <i
          className="fas fa-star-half-alt restaurant-desc-star"
          key={Math.random() ** 2 + this.props.res._id}
        ></i>
      );
    }
    for (i = 4; i >= rating; i--) {
      result.push(
        <i
          className="far fa-star restaurant-desc-star"
          key={Math.random() ** 2 + this.props.res._id}
        ></i>
      );
    }

    return (
      <div className="restaurant-desc-right" key={Math.random()}>
        {result}
      </div>
    );
  };

  render() {
    let { res } = this.props;

    return (
      <div className="card resitem">
        <img
          src={res.avatar[0]}
          className="card-img-top"
          alt="restaurant-img"
        />
        <div className="card-body">
          <h5 className="card-title">{res.name}</h5>
          <p className="card-text" style={{ marginBottom: "8px" }}>
            {res.descriptionRestaurant}
          </p>
          {this.showRating(res.rating)}
          <div className="resitem-location">{res.location}</div>
          <Link
            to={`/restaurant/${res._id}`}
            className="btn btn-primary res-view"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    );
  }
}

export default ResItem;
