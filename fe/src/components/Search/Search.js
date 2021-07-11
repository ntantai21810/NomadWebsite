import React from "react";
import "./Search.css";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

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
              <Link to="" className="btn slogan-btn">
                Go to restaurant
              </Link>
            </div>
            <div className="col-md-4 search-right">
              <div className="input-container">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control location"
                    placeholder="Choose your location"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control food-type"
                    placeholder="Choose food type"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary search-find">
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
