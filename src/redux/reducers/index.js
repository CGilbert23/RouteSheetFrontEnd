import { combineReducers } from "redux";
import departments from "./departments";
import vehicles from "./vehicles";
import loginReducer from "./login"

export default combineReducers({ departments, vehicles, loginReducer })