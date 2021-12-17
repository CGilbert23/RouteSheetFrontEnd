import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants";

const initialState = { isAuth: false, userInfo: null };

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userInfo: payload,
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        userInfo: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
