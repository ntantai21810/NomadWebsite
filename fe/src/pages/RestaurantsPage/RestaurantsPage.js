import React from "react";
import "./RestaurantsPage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
// import ResItem from "../../components/ResItem/ResItem";
import { connect } from "react-redux";

class RestaurantsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarItems: [
        "All",
        "Trending",
        "Near by",
        "Discount",
        "New restaurant",
      ],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let allRes = this.props.allRes;

    console.log(allRes);

    return (
      <div className="container respage-container">
        <div className="respage-left">
          <Sidebar items={this.state.sidebarItems} />
        </div>
        <div className="respage-right"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allRes: state.allRes,
  };
};

export default connect(mapStateToProps, null)(RestaurantsPage);
