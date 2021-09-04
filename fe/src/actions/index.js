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
      .then((res) => {
        dispatch(getAllRes(res.data));
        localStorage.setItem("allRes", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (id, comment) => {
  return {
    type: Types.ADD_COMMENT_RESTAURANT,
    id,
    comment,
  };
};

export const calcRating = () => {
  return {
    type: Types.CALC_RATING,
  };
};
