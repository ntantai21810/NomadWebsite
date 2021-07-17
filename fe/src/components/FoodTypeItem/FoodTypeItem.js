import React from "react";
import "./FoodTypeItem.css";

class FoodTypeItem extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <div className="foodtype-item">
        <img className="foodtype-img" src={item.img} alt="foodtype" />
        <div className="foodtype-desc">
          <span className="foodtype-type">{item.type}</span>
          <span className="foodtype-quantity">{item.quantity} restaurants</span>
        </div>
      </div>
    );
  }
}

export default FoodTypeItem;
