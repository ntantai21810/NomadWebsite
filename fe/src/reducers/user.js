import * as Types from "../constants/index";

let initState = {};

let reducer = (state = initState, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return action.user;
    default:
      return state;
  }
};

export default reducer;
