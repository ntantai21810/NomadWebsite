import React from "react";
import "./FoodType.css";
import FoodTypeItem from "../FoodTypeItem/FoodTypeItem";

class FoodType extends React.Component {
  render() {
    let { foodType } = this.props;
    return (
      <div className="foodtype container">
        {foodType.map((item, index) => (
          <FoodTypeItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default FoodType;
