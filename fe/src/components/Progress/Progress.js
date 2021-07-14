import React from "react";
import "./Progress.css";

let browse = [
  {
    icon: "fas fa-star favor",
    title: "Favorite",
    to: "#",
  },
  {
    icon: "fas fa-fire trend",
    title: "Trending",
    to: "#",
  },
  {
    icon: "fas fa-map-marker-alt place",
    title: "Places",
    to: "#",
  },
  {
    icon: "fas fa-users user",
    title: "Users",
    to: "#",
  },
  {
    icon: "fas fa-money-bill-wave price",
    title: "Prices",
    to: "#",
  },
  {
    icon: "fas fa-smile rating",
    title: "Rating",
    to: "#",
  },
];

class Progress extends React.Component {
  render() {
    return (
      <div className="Browse-Places">
        <div className="container">
          <h3 className="col col-Browse-Places">Browse Places</h3>
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
