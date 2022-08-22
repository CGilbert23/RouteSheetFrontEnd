import * as utils from "../../utils";
import * as constants from "../constants";
import apiRequest from "../requests";

export const getVehicles = (type = "fresh") => async (dispatch) => {
  try {
    if(type === "fresh") dispatch({ type: constants.GET_VEHICLES_REQUEST });
    const res = await apiRequest(constants.GET, "vehicles");
    dispatch({ type: constants.GET_VEHICLES_SUCCESS, payload: res.data.vehicles });
  } catch (err) {
    dispatch({ type: constants.GET_VEHICLES_FAIL, payload: err.response.data });
  }
};

export const updateVehicles = (vehicle_id, from_dept_id, to_dept_id, days) => async (dispatch) => {
  try {
    dispatch({ type: constants.UPDATE_VEHICLE_REQUEST });
    const payload = {
      vehicle_id, 
      from_dept_id,
      to_dept_id,
      days
    }
    await apiRequest(constants.PUT, `vehicles`, payload);
    dispatch({ type: constants.UPDATE_VEHICLE_SUCCESS });
  } catch (err) {
    dispatch({ type: constants.UPDATE_VEHICLE_FAIL });
  }
};

export const searchVehicles = (data, searchValue) => async (dispatch) => {
  const searchedValue = searchValue.toUpperCase();
  const result = data.filter(
    (ele) =>
      ele.stock.toUpperCase().includes(searchedValue) ||
      ele.make.toUpperCase().includes(searchedValue) ||
      ele.model.toUpperCase().includes(searchedValue)
  );
  if (searchedValue) dispatch({ type: constants.SEARCH_VEHICLE, payload: result });
  else dispatch({ type: constants.CLEAR_SEARCH });
};

export const addVehicles = (data) => async (dispatch) => {
  try {
    dispatch({ type: constants.ADD_VEHICLE_REQUEST });
    const payload = {
      ...data,
      ucm_in: utils.parseISO(data.ucm_in),
      date_in: utils.parseISO(data.date_in),
    };
    await apiRequest(constants.POST, `vehicles`, payload);
    dispatch({ type: constants.ADD_VEHICLE_SUCCESS });
  } catch (err) {
    dispatch({ type: constants.ADD_VEHICLE_FAIL, payload: err.response.data });
  }
};

export const deleteVehicles = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.DELETE_VEHICLE_REQUEST });
    await apiRequest(constants.DELETE, `vehicles/${id}`);
    dispatch({ type: constants.DELETE_VEHICLE_SUCCESS });
  } catch (err) {
    dispatch({ type: constants.DELETE_VEHICLE_FAIL, payload: err.response.data });
  }
};

export const getSummary = () => async (dispatch) => {
  try {
    dispatch({ type: constants.GET_SUMMARY_REQUEST });
    const res = await apiRequest(constants.GET, "summary");
    dispatch({ type: constants.GET_SUMMARY_SUCCESS, payload: res.data.summary });
  } catch (err) {
    dispatch({ type: constants.GET_SUMMARY_FAIL, payload: err.response.data });
  }
};

export const resetSummary = () => async (dispatch) => {
  try {
    dispatch({ type: constants.RESET_SUMMARY_REQUEST });
    await apiRequest(constants.GET, "summary/resetSummary");
    dispatch({ type: constants.RESET_SUMMARY_SUCCESS });
  } catch (err) {
    dispatch({ type: constants.RESET_SUMMARY_FAIL });
  }
};
