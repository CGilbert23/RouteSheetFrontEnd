import * as constants from "../constants";

const initialState = { isAuth: false, userInfo: null };

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userInfo: payload,
      };

    case constants.LOGIN_FAIL:
    case constants.LOGOUT_SUCCESS:
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
