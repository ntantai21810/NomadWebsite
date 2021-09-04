import * as Types from "../constants/index";

let allRes = localStorage.getItem("allRes");
let initState = allRes ? JSON.parse(allRes) : [];

let reducer = (state = initState, action) => {
  let newRes = [];
  switch (action.type) {
    case Types.GET_ALL_RESTAURANT:
      newRes = action.allRes;
      for (let item of newRes) {
        if (item.comment.length === 0) item.rating = 0;
        else {
          item.rating =
            item.comment.reduce((acc, cur) => acc + Number(cur.rating), 0) /
            item.comment.length;
        }
      }
      return [...newRes];
    case Types.ADD_COMMENT_RESTAURANT:
      newRes = [...state];
      for (let item of newRes) {
        if (item._id === action.id) {
          item.comment.push(action.comment);
          item.rating =
            item.comment.reduce((acc, cur) => acc + Number(cur.rating), 0) /
            item.comment.length;
          return [...newRes];
        }
      }

      return [...newRes];
    default:
      return state;
  }
};

export default reducer;
