import { combineReducers } from "redux";
import filters from "./filters";
import sushis from "./sushis";
import cart from "./cart";

const rootReducer = combineReducers({
  filters,
  sushis,
  cart,
});

export default rootReducer;
