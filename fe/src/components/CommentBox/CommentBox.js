import React from "react";
import "./CommentBox.css";
import callAPI from "../../utils/apiCall";
import { connect } from "react-redux";
import * as Actions from "../../actions/index";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      star: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      message: "",
    });
  };

  showRating = (rating) => {
    let result = [];
    let i;
    for (i = 1; i <= rating; i++) {
      result.push(
        <i className="fas fa-star comment-star" key={Math.random()}></i>
      );
    }
    if (i - rating !== 1) {
      result.push(
        <i
          className="fas fa-star-half-alt comment-star"
          key={Math.random()}
        ></i>
      );
    }
    for (i = 4; i >= rating; i--) {
      result.push(
        <i className="far fa-star comment-star" key={Math.random()}></i>
      );
    }
    return (
      <div className="restaurant-desc-right" key={Math.random()}>
        {result}
      </div>
    );
  };

  submitComment = () => {
    let user = this.props.user;
    let { comment, star } = this.state;

    if (Object.keys(user).length === 0 || comment === "" || star === "") return;

    if (star <= 0 || star > 5) {
      this.setState({
        message: "Star must from 1 to 5",
        comment: "",
        star: "",
      });
      return;
    }

    callAPI(`posts/${this.props.res._id}`, "PUT", {
      avatar: user.avatar,
      username: user.username,
      rating: Number(star),
      comment: comment,
    }).then((res) => {
      this.props.addComment(this.props.res._id, {
        avatar: user.avatar,
        username: user.username,
        rating: Number(star),
        comment: comment,
      });
      this.setState({
        comment: "",
        star: "",
      });
    });
  };

  render() {
    let { user, res } = this.props;

    return (
      <div className="comment-box">
        <div className="comment-box-title-container">
          <h3 className="comment-box-title">{res.comment.length} Bình luận</h3>
        </div>
        <div className="your-comment-container">
          <div className="your-comment">
            <img
              className="comment-avatar"
              src={
                Object.keys(user).length !== 0
                  ? user.avatar
                  : "https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
              }
              alt="user-avatar"
            />
            <div className="comment-container">
              <input
                className="type-box"
                type="text"
                placeholder="Viết đánh giá của bạn"
                value={this.state.comment}
                name="comment"
                onChange={this.handleChange}
              />
              <input
                className="star-box"
                type="number"
                min="0"
                max="5"
                value={this.state.star}
                name="star"
                onChange={this.handleChange}
              />
              <i className="fas fa-star comment-star"></i>
            </div>

            <button className="post-comment-btn" onClick={this.submitComment}>
              Đánh giá
            </button>
          </div>
          {this.state.message ? (
            <span className="comment-message">{this.state.message}</span>
          ) : (
            ""
          )}
        </div>
        <div className="others-comment">
          <ul>
            {res.comment.map((item, index) => (
              <li className="other-comment-item" key={index}>
                <div className="other-comment-info">
                  <img
                    className="comment-avatar"
                    src={item.avatar}
                    alt="user-avatar"
                  />
                  <div className="other-comment-desc">
                    <span>{item.username}</span>
                    {this.showRating(item.rating)}
                  </div>
                </div>
                <p className="comment">{item.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (id, comment) => dispatch(Actions.addComment(id, comment)),
  };
};

export default connect(null, mapDispatchToProps)(CommentBox);
