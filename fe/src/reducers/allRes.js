import * as Types from "../constants/index";

let initState = [];

let reducer = (state = initState, action) => {
  switch (action.type) {
    case Types.GET_ALL_RESTAURANT:
      return action.allRes;
    default:
      return state;
  }
};

export default reducer;
