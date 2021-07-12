import React from "react";
import "./FoodTypeContainer.css";
import FoodType from "../../components/FoodType/FoodType";
import { connect } from "react-redux";

class FoodTypeContainer extends React.Component {
  render() {
    let { foodType } = this.props;
    return (
      <div className="foodtype-container">
        <h2 className="foodtype-title">Explore Your Favorite Recipes</h2>
        <FoodType foodType={foodType} />
        <button className="btn foodtype-btn">Show all</button>
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
