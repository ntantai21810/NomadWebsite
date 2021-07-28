import React from "react";
import "./ResListContainer.css";
import ResList from "../../components/ResList/ResList";

class ResContainer extends React.Component {
  render() {
    return (
      <div>
        <h2 className="res-title">Restaurants</h2>
        <ResList />
        <ResList />
        <ResList />
      </div>
    );
  }
}

export default ResContainer;
