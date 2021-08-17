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
        "Tất cả",
        "Đang hot",
        "Gần bạn",
        "Đang giảm giá",
        "Nhà hàng mới",
      ],
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
        <div className="respage-right">Coming soon</div>
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
