import React from "react";
import "./CommentBox.css";

class CommentBox extends React.Component {
  showRating = (rating) => {
    let result = [];
    let i;
    for (i = 1; i <= rating; i++) {
      result.push(<i className="fas fa-star comment-star" key={i}></i>);
    }
    if (i - rating !== 1) {
      result.push(
        <i className="fas fa-star-half-alt comment-star" key={0}></i>
      );
    }
    for (i = 4; i >= rating; i--) {
      result.push(<i className="far fa-star comment-star" key={i}></i>);
    }
    return <div className="restaurant-desc-right">{result}</div>;
  };

  render() {
    return (
      <div className="comment-box">
        <div className="comment-box-title-container">
          <h3 className="comment-box-title">15 Comments</h3>
        </div>
        <div className="your-comment">
          <img
            className="comment-avatar"
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            alt="user-avatar"
          />
          <input
            className="type-box"
            type="text"
            placeholder="Write your comment"
          />
          <button className="post-comment-btn">Post comment</button>
        </div>
        <div className="others-comment">
          <ul>
            <li className="other-comment-item">
              <div className="other-comment-info">
                <img
                  className="comment-avatar"
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                  alt="user-avatar"
                />
                <div className="other-comment-desc">
                  <span>Rock Smith</span>
                  {this.showRating(4.5)}
                </div>
              </div>
              <p className="comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </li>
            <li className="other-comment-item">
              <div className="other-comment-info">
                <img
                  className="comment-avatar"
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                  alt="user-avatar"
                />
                <div className="other-comment-desc">
                  <span>Rock Smith</span>
                  {this.showRating(4.5)}
                </div>
              </div>
              <p className="comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </li>
            <li className="other-comment-item">
              <div className="other-comment-info">
                <img
                  className="comment-avatar"
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                  alt="user-avatar"
                />
                <div className="other-comment-desc">
                  <span>Rock Smith</span>
                  {this.showRating(4.5)}
                </div>
              </div>
              <p className="comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CommentBox;
