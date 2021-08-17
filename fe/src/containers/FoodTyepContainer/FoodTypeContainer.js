import React from "react";
import "./FoodTypeContainer.css";
import FoodType from "../../components/FoodType/FoodType";
import { connect } from "react-redux";

class FoodTypeContainer extends React.Component {
  render() {
    let { foodType } = this.props;
    return (
      <div className="foodtype-container">
        <h2 className="foodtype-title">Khám phá theo món ăn</h2>
        <FoodType foodType={foodType} />
        <button className="btn foodtype-btn">Hiển thị tất cả</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foodType: state.foodType,
  };
};

export default connect(mapStateToProps, null)(FoodTypeContainer);
