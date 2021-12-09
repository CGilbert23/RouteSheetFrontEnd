import { GET_DEPARTMENTS } from "../constants";
import { depts} from "../data";

export const getDepts = () => async (dispatch) => {
    // const res = await apiRequest(GET, 'departments');
    dispatch({ type: GET_DEPARTMENTS, payload: depts })
}