import React from "react";
import "./MainPage.css";
import Search from "../../components/Search/Search";
import Progress from "../../components/Progress/Progress";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Progress />
      </div>
    );
  }
}

export default MainPage;
