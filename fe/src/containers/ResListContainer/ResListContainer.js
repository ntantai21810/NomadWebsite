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
      <div id="res">
        <h2 className="res-title">Quán ăn</h2>
        <ResList type="Đang hot" allRes={trendingRes} />
        <ResList type="Gần bạn" allRes={nearbyRes} />
        <ResList type="Đang giảm giá" allRes={discountRes} />
        <ResList type="Quán ăn mới" allRes={newRes} />
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
