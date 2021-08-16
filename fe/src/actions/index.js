import * as Types from "../constants/index";
import callAPI from "../utils/apiCall";

export const setUser = (user) => {
  return {
    type: Types.SET_USER,
    user,
  };
};

export const getAllRes = (allRes) => {
  return {
    type: Types.GET_ALL_RESTAURANT,
    allRes,
  };
};

export const getAllResRequest = () => {
  return (dispatch) => {
    callAPI("posts/list", "POST")
      .then((res) => dispatch(getAllRes(res.data)))
      .catch((err) => console.log(err));
  };
};
