import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { handleCart } from "./reducer";

const rootReducers = combineReducers({
  handleCart
});
const store = legacy_createStore(rootReducers);
export { store };
