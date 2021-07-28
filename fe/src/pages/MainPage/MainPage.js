import React from "react";
import Search from "../../components/Search/Search";
import Progress from "../../components/Progress/Progress";
import ResListContainer from "../../containers/ResListContainer/ResListContainer";
import FoodTypeContainer from "../../containers/FoodTyepContainer/FoodTypeContainer";

class MainPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Search />
        <Progress />
        <ResListContainer />
        <FoodTypeContainer />
      </div>
    );
  }
}

export default MainPage;
