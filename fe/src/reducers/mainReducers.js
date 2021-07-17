import { combineReducers } from "redux";
import trendingRes from "./trendingRes";
import foodType from "./foodType";

let reducers = combineReducers({
  trendingRes,
  foodType,
});

export default reducers;
