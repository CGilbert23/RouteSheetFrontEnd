import * as constants from "../constants";

const initialState = {
  loading: true,
  error: null,
  copyOfCars: [],
  cars: [],
  summary: [],
  refetch: false
};

const vehiclesReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case constants.GET_VEHICLES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case constants.GET_VEHICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        refetch: false,
        copyOfCars: payload,
        cars: payload,
      };

    case constants.GET_VEHICLES_FAIL:
      return {
        ...state,
        loading: false,
        refetch: false,
        error: payload,
      };

    case constants.SEARCH_VEHICLE:
      return {
        ...state,
        cars: payload,
      };

    case constants.CLEAR_SEARCH:
      return {
        ...state,
        cars: state.copyOfCars,
      };

    case constants.GET_SUMMARY_SUCCESS:
      return {
        ...state,
        summary: payload,
        refetch: false,
      }

    case constants.RESET_SUMMARY_SUCCESS:
    case constants.ADD_VEHICLE_SUCCESS:
    case constants.UPDATE_VEHICLE_SUCCESS:
    case constants.DELETE_VEHICLE_SUCCESS:
      return {
        ...state,
        refetch: true
      }

    default:
      return state;
  }
};

export default vehiclesReducer;
