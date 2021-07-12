import React from "react";
import "./MainPage.css";
import Search from "../../components/Search/Search";
import Progress from "../../components/Progress/Progress";
import ResContainer from "../../containers/ResContainer/ResContainer";
import FoodTypeContainer from "../../containers/FoodTyepContainer/FoodTypeContainer";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Progress />
        <ResContainer />
        <FoodTypeContainer />
      </div>
    );
  }
}

export default MainPage;
