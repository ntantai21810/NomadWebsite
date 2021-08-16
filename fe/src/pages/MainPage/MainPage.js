import React from "react";
import Search from "../../components/Search/Search";
import Progress from "../../components/Progress/Progress";
import ResListContainer from "../../containers/ResListContainer/ResListContainer";
import FoodTypeContainer from "../../containers/FoodTyepContainer/FoodTypeContainer";
import * as Actions from "../../actions/index";
import { connect } from "react-redux";

class MainPage extends React.Component {
  componentDidMount() {
    if (this.props.allRes.length === 0) {
      this.props.getAllRes();
    }
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

const mapStateToProps = (state) => {
  return {
    allRes: state.allRes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllRes: () => {
      dispatch(Actions.getAllResRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
