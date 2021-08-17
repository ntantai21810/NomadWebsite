import React from "react";
import "./RestaurantPage.css";
import Restaurant from "../../components/Restaurant/Restaurant";
import { connect } from "react-redux";

class RestaurantPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let res = this.props.allRes.find(
      (res) => res._id === this.props.match.params.id
    );

    return (
      <div>
        <Restaurant res={res} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allRes: state.allRes,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(RestaurantPage);
