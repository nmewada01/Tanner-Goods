import { legacy_createStore } from "redux";
import { combineReducers, compose, applyMiddleware } from "redux";
import handleCart from "./reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducers = combineReducers({
  cart: handleCart,
  AuthReducer,
});
const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export { store };
