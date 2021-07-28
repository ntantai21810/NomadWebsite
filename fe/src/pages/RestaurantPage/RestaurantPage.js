import React from "react";
import "./RestaurantPage.css";
import Restaurant from "../../components/Restaurant/Restaurant";

class RestaurantPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Restaurant />
      </div>
    );
  }
}

export default RestaurantPage;
