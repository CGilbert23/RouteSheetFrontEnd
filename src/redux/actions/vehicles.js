import { dateDifference, parseISO } from "../../utils";
import {
  GET,
  PUT,
  POST,
  FETCH_VEHICLES,
  GET_VEHICLES,
  SEARCH_VEHICLE,
  CLEAR_SEARCH,
  ADD_VEHICLES,
  DELETE_VEHICLES,
  GET_SUMMARY
} from "../constants";
import apiRequest from "../requests";

export const getVehicles = () => async (dispatch) => {
  const res = await apiRequest(GET, "vehicles");
  dispatch({ type: GET_VEHICLES, payload: res.data.vehicles });
};

export const updateVehicles = (vehicle_id, to_dept_id) => async (dispatch) => {
  const payload = {
    vehicle_id, to_dept_id
  }
  
  await apiRequest(PUT, `vehicles`, payload);

  dispatch({ type: FETCH_VEHICLES });

  setTimeout(async () => {
    const res = await apiRequest(GET, "vehicles");
    dispatch({ type: GET_VEHICLES, payload: res.data.vehicles });
  }, 1000);
};

export const searchVehicles = (data, searchValue) => async (dispatch) => {
  const searchedValue = searchValue.toUpperCase();
  const result = data.filter(
    (ele) =>
      ele.stock.toUpperCase().includes(searchedValue) ||
      ele.make.toUpperCase().includes(searchedValue) ||
      ele.model.toUpperCase().includes(searchedValue)
  );
  if (searchedValue) dispatch({ type: SEARCH_VEHICLE, payload: result });
  else dispatch({ type: CLEAR_SEARCH });
};

export const addVehicles = (data) => async (dispatch) => {
  const payload = {
    ...data,
    ucm_in: parseISO(data.ucm_in),
    date_in: parseISO(data.date_in),
  };
  await apiRequest(POST, `vehicles`, payload);
  const res = await apiRequest(GET, `vehicles`);
  dispatch({ type: ADD_VEHICLES, payload: res.data.vehicles });
};

export const deleteVehicles = (id) => async (dispatch) => {
  await apiRequest(GET, `vehicles/${id}`);
  const res = await apiRequest(GET, `vehicles`);
  dispatch({ type: DELETE_VEHICLES, payload: res.data.vehicles });
};

export const getSummary = () => async (dispatch) => {
  const res = await apiRequest(GET, "summary");
  dispatch({ type: GET_SUMMARY, payload: res.data.summary })
};

export const getCombineCounts = (vehicles, dept_id) => {
  const result = vehicles.reduce((res, ele) => {
    if (ele.dept_id === dept_id) res.push(dateDifference(ele.date_in));
    return res;
  }, []);
  const lengthOfResult = result.length;
  const average = result.reduce((a, b) => a + b, 0) / lengthOfResult;
  const value = average % 1 !== 0 ? average.toFixed(1) : average;
  if (!isNaN(value)) return value;
  else return 0;
};
