import React from "react";
import "./Restaurant.css";

class Restaurant extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  showRating = (rating) => {
    let result = [];
    let i;
    for (i = 1; i <= rating; i++) {
      result.push(<i className="fas fa-star restaurant-desc-star"></i>);
    }
    if (i - rating !== 1) {
      result.push(
        <i className="fas fa-star-half-alt restaurant-desc-star"></i>
      );
    }
    for (i = 4; i >= rating; i--) {
      result.push(<i className="far fa-star restaurant-desc-star"></i>);
    }
    result.push(<span className="restaurant-desc-rating">{rating}/5</span>);
    return <div className="restaurant-desc-right">{result}</div>;
  };

  render() {
    return (
      <div className="container restaurant-container">
        <div className="restaurant-left">
          <img
            src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80"
            alt="restaurant"
            className="restaurant-img"
          />
          <ul className="restaurant-food-list">
            <li className="restaurant-food-item">
              <img
                src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80"
                alt="restaurant-food"
              />
            </li>
            <li className="restaurant-food-item">
              <img
                src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80"
                alt="restaurant-food"
              />
            </li>
            <li className="restaurant-food-item">
              <img
                src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80"
                alt="restaurant-food"
              />
            </li>
            <li className="restaurant-food-item">
              <img
                src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80"
                alt="restaurant-food"
              />
            </li>
          </ul>
          <div className="restaurant-desc">
            <div className="restaurant-desc-left">
              <img
                src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80"
                alt="restaurant-avatar"
              />
              <div>
                <h3 className="restaurant-desc-name">Restaurant Name</h3>
                <span className="restaurant-desc-location">
                  <i className="fas fa-map-marker-alt restaurant-desc-icon"></i>
                  Location , US
                </span>
              </div>
            </div>
            {this.showRating(3.5)}
          </div>
        </div>
        <div className="restaurant-right">
          <h3 className="restaurant-desc-name">Restaurant Name</h3>
          <span className="restaurant-desc-subtitle">Description</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <span className="restaurant-price">$ 11.00</span>
          <ul className="restaurant-desc-info">
            <li className="restaurant-desc-info-item">
              <i className="fas fa-heart text-danger"></i> 52
            </li>
            <li className="restaurant-desc-info-item">
              <i className="fas fa-comment text-primary"></i> 52
            </li>
            <li className="restaurant-desc-info-item">
              <i className="fas fa-eye text-info"></i> 52
            </li>
          </ul>

          <div className="restaurant-desc-time">
            <i className="far fa-clock restaurant-desc-time-icon"></i>Mo cua:
            7:00 - 18:00
          </div>
          <div className="restaurant-desc-member">
            <i className="far fa-calendar-alt restaurant-desc-time-icon"></i>
            Member since August 2018
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
