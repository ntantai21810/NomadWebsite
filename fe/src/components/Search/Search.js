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
                <h2 className="slogan">Tìm kiếm quán ăn cho bạn</h2>
                <span className="slogan-desc">
                  Sự thoải mái của bạn là niềm vui của chúng tôi
                </span>
              </div>
              <a href="#res" className="btn slogan-btn">
                Đi tới quán ăn
              </a>
            </div>
            <div className="col-md-4 search-right">
              <div className="input-container">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control location"
                    placeholder="Chọn địa điểm"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control food-type"
                    placeholder="Chọn loại thức ăn"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary search-find">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
