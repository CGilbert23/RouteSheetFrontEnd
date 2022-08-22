import * as constants from "../constants";

const initialState = {
  loading: true,
  error: null,
  depts: []
};

const departmentsReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case constants.GET_DEPARTMENTS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case constants.GET_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        depts: payload,
      };

    case constants.GET_DEPARTMENTS_FAIL:
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
