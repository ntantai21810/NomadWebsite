import React from "react";
import "./ResList.css";
import ResItem from "../ResItem/ResItem";
import { Link } from "react-router-dom";

class ResList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      idx1: 1,
      idx2: 2,
    };
  }

  handleClick = () => {
    this.setState((state, props) => {
      return {
        idx: state.idx + 1 >= props.allRes.length - 1 ? 0 : state.idx + 3,
        idx1: state.idx1 + 1 >= props.allRes.length - 1 ? 0 : state.idx1 + 3,
        idx2: state.idx2 + 1 >= props.allRes.length - 1 ? 0 : state.idx2 + 3,
      };
    });
  };

  render() {
    let allRes = this.props.allRes;
    return (
      <div className="container res-container">
        <div className="reslist-top">
          <h3 className="reslist-title">{this.props.type}</h3>
          <Link to="/type/trending" className="reslist-link">
            View all
          </Link>
        </div>
        <div className="reslist">
          {allRes[this.state.idx] ? (
            <ResItem res={allRes[this.state.idx]} />
          ) : (
            ""
          )}
          {allRes[this.state.idx1] ? (
            <ResItem res={allRes[this.state.idx1]} />
          ) : (
            ""
          )}
          {allRes[this.state.idx2] ? (
            <ResItem res={allRes[this.state.idx2]} />
          ) : (
            ""
          )}
          <span
            className="next"
            style={{ color: "green", cursor: "pointer" }}
            onClick={this.handleClick}
          >
            <i className="fas fa-chevron-circle-right"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default ResList;
