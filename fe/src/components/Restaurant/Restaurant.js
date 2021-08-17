import React from "react";
import CommentBox from "../CommentBox/CommentBox";
import "./Restaurant.css";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  showRating = (rating) => {
    let result = [];
    let i;
    for (i = 1; i <= rating; i++) {
      result.push(
        <i className="fas fa-star restaurant-desc-star" key={Math.random()}></i>
      );
    }
    if (i - rating !== 1) {
      result.push(
        <i
          className="fas fa-star-half-alt restaurant-desc-star"
          key={Math.random()}
        ></i>
      );
    }
    for (i = 4; i >= rating; i--) {
      result.push(
        <i className="far fa-star restaurant-desc-star" key={Math.random()}></i>
      );
    }
    result.push(
      <span className="restaurant-desc-rating" key={Math.random()}>
        {rating}/5
      </span>
    );
    return (
      <div className="restaurant-desc-right" key={Math.random()}>
        {result}
      </div>
    );
  };

  handleClick = (index) => {
    this.setState({
      idx: index,
    });
  };

  render() {
    let res = this.props.res;

    let imageSrc = res.image.map(
      (item, index) => item + "/?random&t=" + new Date().getTime() + index
    );

    return (
      <div className="container">
        <div className="restaurant-container">
          <div className="restaurant-left">
            <img
              src={imageSrc[this.state.idx]}
              alt="restaurant"
              className="restaurant-img"
            />
            <ul className="restaurant-food-list">
              {imageSrc.map((item, index) => (
                <li
                  className="restaurant-food-item"
                  key={index}
                  onClick={() => this.handleClick(index)}
                >
                  <img src={item} alt="restaurant-food" key={index} />
                </li>
              ))}
            </ul>
            <div className="restaurant-desc">
              <div className="restaurant-desc-left">
                <img src={res.avatar} alt="restaurant-avatar" />
                <div>
                  <h3 className="restaurant-desc-name">{res.name}</h3>
                  <span className="restaurant-desc-location">
                    <i className="fas fa-map-marker-alt restaurant-desc-icon"></i>
                    {res.location}
                  </span>
                </div>
              </div>
              {this.showRating(res.rating)}
            </div>
          </div>
          <div className="restaurant-right">
            <h3 className="restaurant-desc-name">{res.name}</h3>
            <span className="restaurant-desc-subtitle">Mô tả</span>
            <p>{res.descriptionRestaurant}</p>

            <span className="restaurant-price">
              $ {res.price[this.state.idx]}
            </span>
            <ul className="restaurant-desc-info">
              <li className="restaurant-desc-info-item">
                <i className="fas fa-heart text-danger"></i> {res.likes}
              </li>
              <li className="restaurant-desc-info-item">
                <i
                  className="fas fa-comment text-primary"
                  style={{ marginRight: "4px" }}
                ></i>
                {res.comment.length}
              </li>
              <li className="restaurant-desc-info-item">
                <i className="fas fa-eye text-info"></i> {res.views}
              </li>
            </ul>

            <div className="restaurant-desc-time">
              <i className="far fa-clock restaurant-desc-time-icon"></i>Mở cửa:
              <span className="open-time">{res.openTime}</span>
            </div>
            <div className="restaurant-desc-member">
              <i className="far fa-calendar-alt restaurant-desc-time-icon"></i>
              Thành viên từ {res.member}
            </div>
          </div>
        </div>
        <CommentBox user={this.props.user} res={res} />
      </div>
    );
  }
}

export default Restaurant;
