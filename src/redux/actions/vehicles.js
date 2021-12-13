import { parseISO } from "../../utils";
import { GET, POST, FETCH_VEHICLES, GET_VEHICLES, SEARCH_VEHICLE, CLEAR_SEARCH, ADD_VEHICLES, DELETE_VEHICLES } from "../constants";
import apiRequest from "../requests";

export const getVehicles = () => async (dispatch) => {
    const res = await apiRequest(GET, 'vehicles');
    dispatch({ type: GET_VEHICLES, payload: res.data.vehicles })
}

export const updateVehicles = (vehicle_id, from_dept_id, to_dept_id, count) => async (dispatch) => {
    await apiRequest(GET, `vehicles/${vehicle_id}/${from_dept_id}/${to_dept_id}/${count}`);
    
    dispatch({ type: FETCH_VEHICLES });

    setTimeout(async() => {
        const res = await apiRequest(GET, 'vehicles');
        dispatch({ type: GET_VEHICLES, payload: res.data.vehicles })
    }, 1000)
}

export const searchVehicles = (data, searchValue) => async (dispatch) => {
    const searchedValue = searchValue.toUpperCase();
    const result = data.filter(ele => ele.stock.toUpperCase().includes(searchedValue) || ele.make.toUpperCase().includes(searchedValue) || ele.model.toUpperCase().includes(searchedValue));
    if(searchedValue) dispatch({ type: SEARCH_VEHICLE, payload: result });
    else dispatch({ type: CLEAR_SEARCH });
}

export const addVehicles = (data) => async (dispatch) => {
    const payload = {
        ...data,
        "date_in": parseISO(data.date_in)
    }
     await apiRequest(POST, `vehicles`, payload)
     const res = await apiRequest(GET, `vehicles`)
    dispatch({type: ADD_VEHICLES, payload: res.data.vehicles})
}

export const deleteVehicles = (id) => async (dispatch) => {
    await apiRequest(GET, `vehicles/${id}`)
    const res = await apiRequest(GET, `vehicles`)
    dispatch({ type: DELETE_VEHICLES, payload: res.data.vehicles })
}