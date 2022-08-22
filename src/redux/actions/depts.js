import * as constants from "../constants";
import apiRequest from "../requests";

export const getDepts = () => async (dispatch) => {
  try {
    dispatch({ type: constants.GET_DEPARTMENTS_REQUEST });
    const res = await apiRequest(constants.GET, "departments");
    dispatch({ type: constants.GET_DEPARTMENTS_SUCCESS, payload: res.data.depts });
  } catch (err) {
    dispatch({ type: constants.GET_DEPARTMENTS_FAIL, payload: err.response.data });
  }
};