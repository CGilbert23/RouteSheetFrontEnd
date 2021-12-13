import { GET, GET_DEPARTMENTS, GET_DEPARTMENTS_WITH_COUNTS } from "../constants";
import apiRequest from "../requests";

export const getDepts = () => async (dispatch) => {
    const res = await apiRequest(GET, 'departments');
    dispatch({ type: GET_DEPARTMENTS, payload: res.data.depts })
}

export const getDeptsWithCounts = () => async (dispatch) => {
    const res = await apiRequest(GET, 'departments/counts');
    dispatch({ type: GET_DEPARTMENTS_WITH_COUNTS, payload: res.data.counts })
}