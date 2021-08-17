import React from "react";
import "./Progress.css";

let browse = [
  {
    icon: "fas fa-star favor",
    title: "Được yêu thích",
    to: "#",
  },
  {
    icon: "fas fa-fire trend",
    title: "Đang hot",
    to: "#",
  },
  {
    icon: "fas fa-map-marker-alt place",
    title: "Địa điểm",
    to: "#",
  },
  {
    icon: "fas fa-users user",
    title: "Phù hợp ",
    to: "#",
  },
  {
    icon: "fas fa-money-bill-wave price",
    title: "Giá",
    to: "#",
  },
  {
    icon: "fas fa-smile rating",
    title: "Đánh giá",
    to: "#",
  },
];

class Progress extends React.Component {
  render() {
    return (
      <div className="Browse-Places">
        <div className="container">
          <h3 className="col col-Browse-Places">Tìm kiếm theo loại</h3>
          <div className="row-icon">
            {browse.map((item, index) => (
              <div key={index}>
                <a href={item.to} className="a-icon">
                  <i className={item.icon}></i>
                  <div className="text-underline-icon">{item.title}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
