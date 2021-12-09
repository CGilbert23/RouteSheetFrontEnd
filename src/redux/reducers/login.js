import { LOGIN_SUCCESS } from "../constants";
import { getToken } from "../services";

const initialState = { isAuth: getToken()}

const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: payload
            }
        default: return state
    }
}

export default loginReducer;