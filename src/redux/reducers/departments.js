import { GET_DEPARTMENTS, DEPARTMENTS_FAIL, GET_DEPARTMENTS_WITH_COUNTS } from "../constants";

const initialState = {
    loading: true,
    error: null,
    depts: [],
    counts: [],
}

const departmentsReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                loading: false,
                depts: payload
            }

        case DEPARTMENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case GET_DEPARTMENTS_WITH_COUNTS:
            return {
                ...state,
                counts: payload
            }
            
        default:
            return state;
    }
}

export default departmentsReducer;