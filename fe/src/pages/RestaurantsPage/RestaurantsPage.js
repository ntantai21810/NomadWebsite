import React from "react";
import "./RestaurantsPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ResItem from "../../components/ResItem/ResItem";

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarItems: ["Trending", "Trending", "Trending", "Trending"],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container respage-container">
        <div className="respage-left">
          <Sidebar items={this.state.sidebarItems} />
        </div>
        <div className="respage-right">
          <ResItem />
          <ResItem />
          <ResItem />
          <ResItem />
          <ResItem />
          <ResItem />
          <ResItem />
          <ResItem />
        </div>
      </div>
    );
  }
}

export default RestaurantsPage;
