import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  POST,
  GET,
  LOGOUT_SUCCESS,
} from "../constants";
import { removeToken, setToken } from "../services";
import apiRequest from "../requests";

export const isAuth = (data) => async (dispatch) => {
  const res = await apiRequest(POST, `users/auth`, data);
  const token = res && res.data && res.data.token ? res.data.token : false;
  if (token) {
    setToken(token);
    const userRes = await apiRequest(GET, `users`, null, token);
    if (userRes && userRes.data && userRes.data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: userRes.data.user });
    } else {
      alert("Invalid Credentials");
      dispatch({ type: LOGIN_FAIL, payload: false });
    }
  } else {
    alert("Invalid Credentials");
    dispatch({ type: LOGIN_FAIL, payload: false });
  }
};

export const registerUser = (data) => async (dispatch) => {
  const res = await apiRequest(POST, `users`, data);
  const token = res && res.data && res.data.token ? res.data.token : false;
  if (token) {
    setToken(token);
    const userRes = await apiRequest(GET, `users`, null, token);
    if (userRes && userRes.data && userRes.data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: userRes.data.user });
    } else {
      alert("Invalid Credentials");
      dispatch({ type: LOGIN_FAIL, payload: false });
    }
  } else {
    alert("Invalid Credentials");
    dispatch({ type: LOGIN_FAIL, payload: false });
  }
};

export const getUser = () => async (dispatch) => {
  const userRes = await apiRequest(GET, `users`);

  if (userRes && userRes.data && userRes.data.user) {
    dispatch({ type: LOGIN_SUCCESS, payload: userRes.data.user });
  } else {
    dispatch({ type: LOGIN_FAIL, payload: false });
  }
};

export const logOut = () => async (dispatch) => {
  removeToken();
  dispatch({ type: LOGOUT_SUCCESS });
};
