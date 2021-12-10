import { GET, GET_DEPARTMENTS } from "../constants";
import apiRequest from "../requests";

export const getDepts = () => async (dispatch) => {
    const res = await apiRequest(GET, 'departments');
    dispatch({ type: GET_DEPARTMENTS, payload: res.data.depts })
}