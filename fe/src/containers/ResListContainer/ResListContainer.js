import React from "react";
import "./ResListContainer.css";
import ResList from "../../components/ResList/ResList";
import { connect } from "react-redux";

class ResContainer extends React.Component {
  render() {
    let { allRes } = this.props;
    let trendingRes = allRes.filter((item) => item.type === "trending");
    let nearbyRes = allRes.filter((item) => item.type === "nearby");
    let discountRes = allRes.filter((item) => item.type === "discount");
    let newRes = allRes.filter((item) => item.type === "newres");

    return (
      <div>
        <h2 className="res-title">Restaurants</h2>
        <ResList type="Trending" allRes={trendingRes} />
        <ResList type="Near by" allRes={nearbyRes} />
        <ResList type="Discount" allRes={discountRes} />
        <ResList type="New restaurants" allRes={newRes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allRes: state.allRes,
  };
};

export default connect(mapStateToProps, null)(ResContainer);
