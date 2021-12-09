import { FETCH_VEHICLES, GET_VEHICLES, VEHICLES_FAIL, SEARCH_VEHICLE, CLEAR_SEARCH, ADD_VEHICLES, DELETE_VEHICLES } from "../constants";

const initialState = {
    loading: true,
    error: null,
    copyOfCars: [],
    cars: []
}

const vehiclesReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case FETCH_VEHICLES:
            return {
                ...state,
                loading: true
            }

        case GET_VEHICLES:
            return {
                ...state,
                loading: false,
                copyOfCars: payload,
                cars: payload,
            }

        case VEHICLES_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case SEARCH_VEHICLE:
        case ADD_VEHICLES:
        case DELETE_VEHICLES:
            return {
                ...state,
                loading: false,
                cars: payload
            }

        case CLEAR_SEARCH:
            return {
                ...state,
                cars: state.copyOfCars
            }
            
        default:
            return state;
    }
}

export default vehiclesReducer;