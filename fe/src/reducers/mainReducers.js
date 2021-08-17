import { combineReducers } from "redux";
import allRes from "./allRes";
import foodType from "./foodType";
import user from "./user";

let reducers = combineReducers({
  allRes,
  foodType,
  user,
});

export default reducers;
