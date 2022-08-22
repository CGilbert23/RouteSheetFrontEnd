import * as constants from "../constants";
import * as services from "../services";
import apiRequest from "../requests";

export const isAuth = (data) => async (dispatch) => {
  try {
    const res = await apiRequest(constants.POST, `users/auth`, data);
    const token = res && res.data && res.data.token ? res.data.token : false;
    if (token) {
      services.setToken(token);
      const userRes = await apiRequest(constants.GET, `users`, null, token);
      if (userRes && userRes.data && userRes.data.user) {
        dispatch({ type: constants.LOGIN_SUCCESS, payload: userRes.data.user });
      } else {
        alert("Invalid Credentials");
        dispatch({ type: constants.LOGIN_FAIL, payload: false });
      }
    } else {
      alert("Invalid Credentials");
      dispatch({ type: constants.LOGIN_FAIL, payload: false });
    }
  } catch (err) {
    dispatch({ type: constants.LOGIN_FAIL, payload: err.response.data });
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const res = await apiRequest(constants.POST, `users`, data);
    const token = res && res.data && res.data.token ? res.data.token : false;
    if (token) {
      services.setToken(token);
      const userRes = await apiRequest(constants.GET, `users`, null, token);
      if (userRes && userRes.data && userRes.data.user) {
        dispatch({ type: constants.LOGIN_SUCCESS, payload: userRes.data.user });
      } else {
        alert("Invalid Credentials");
        dispatch({ type: constants.LOGIN_FAIL, payload: false });
      }
    } else {
      alert("Invalid Credentials");
      dispatch({ type: constants.LOGIN_FAIL, payload: false });
    }
  } catch (err) {
    dispatch({ type: constants.LOGIN_FAIL, payload: false });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const userRes = await apiRequest(constants.GET, `users`);
    if (userRes && userRes.data && userRes.data.user) {
      dispatch({ type: constants.LOGIN_SUCCESS, payload: userRes.data.user });
    } else {
      dispatch({ type: constants.LOGIN_FAIL, payload: false });
    }
  } catch (err) {
    dispatch({ type: constants.LOGIN_FAIL, payload: err.response.data });
  }
};

export const logOut = () => async (dispatch) => {
  services.removeToken();
  dispatch({ type: constants.LOGOUT_SUCCESS });
};
