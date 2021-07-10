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
                  Specify your address to suggest you the fast delivery
                </span>
              </div>
              <a href="" className="btn slogan-btn">
                Go to restaurant
              </a>
            </div>
            <div className="col-md-4 search-right">
              <div class="input-container">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control location"
                    placeholder="Choose your location"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control food-type"
                    placeholder="Choose food type"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary search-find">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
