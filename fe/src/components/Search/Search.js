import React from "react";
import "./Search.css";
import Carousel from "../Carousel/Carousel";

class Search extends React.Component {
  render() {
    return (
      <div className="search container-fluid">
        <Carousel />
        <div className="blur" />
        <div className="container search-content">
          <div className="row">
            <div className="col-md-8  search-left">
              <div>
                <h2 className="slogan">Choose, Order and Checkout</h2>
                <span className="slogan-desc">
                  Sự thoải mái của bạn là niềm vui của chúng tôi
                </span>
              </div>
              <a href="" className="btn slogan-btn">
                Go to restaurant
              </a>
            </div>
            <div className="col-md-4 search-right">123</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
