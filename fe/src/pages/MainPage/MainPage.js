import React from "react";
import "./MainPage.css";
import Carousel from "../../components/Carousel/Carousel";
import Progress from "../../components/Progress/Progress";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Progress />
      </div>
    );
  }
}

export default MainPage;
