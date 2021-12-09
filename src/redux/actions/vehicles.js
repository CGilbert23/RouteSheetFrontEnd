import { FETCH_VEHICLES, GET_VEHICLES, SEARCH_VEHICLE, CLEAR_SEARCH, ADD_VEHICLES, DELETE_VEHICLES } from "../constants";
import { vehicles } from "../data"
export const getVehicles = () => async (dispatch) => {
    // const res = await apiRequest(GET, 'vehicles');
    dispatch({ type: GET_VEHICLES, payload: vehicles })
}

export const updateVehicles = (vehicle_id, dept_id) => async (dispatch) => {
    // await apiRequest(GET, `vehicles/${vehicle_id}/${dept_id}`);
    
    dispatch({ type: FETCH_VEHICLES });

    setTimeout(async() => {
        // const res = await apiRequest(GET, 'vehicles');
        dispatch({ type: GET_VEHICLES, payload: vehicles })
    }, 1000)
}

export const searchVehicles = (data, searchValue) => async (dispatch) => {
    const searchedValue = searchValue.toUpperCase();
    const result = data.filter(ele => ele.stock.toUpperCase().includes(searchedValue) || ele.make.toUpperCase().includes(searchedValue) || ele.model.toUpperCase().includes(searchedValue));
    if(searchedValue) dispatch({ type: SEARCH_VEHICLE, payload: result });
    else dispatch({ type: CLEAR_SEARCH });
}

export const addVehicles = (ele) => {
    return {
        type: ADD_VEHICLES,
        payload: ele
    }
}

export const deleteVehicles = (ele) => {
    return {
        type: DELETE_VEHICLES,
        payload: ele
    }
}