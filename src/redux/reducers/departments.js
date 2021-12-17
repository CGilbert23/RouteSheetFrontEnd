import {
  GET_DEPARTMENTS,
  DEPARTMENTS_FAIL
} from "../constants";

const initialState = {
  loading: true,
  error: null,
  depts: []
};

const departmentsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DEPARTMENTS:
      return {
        ...state,
        loading: false,
        depts: payload,
      };

    case DEPARTMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default departmentsReducer;
