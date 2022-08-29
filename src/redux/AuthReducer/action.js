import axios from "axios";
import * as types from "./actionType";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post(
      "https://login-register-nareshrajput.herokuapp.com/registeration",
      payload
    )
    .then((r) => {
      console.log(r);
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.REGISTER_FAILURE, payload: e }));
};

const login = () => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .get("https://login-register-nareshrajput.herokuapp.com/registeration")
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
    });
};

export { login, register };
