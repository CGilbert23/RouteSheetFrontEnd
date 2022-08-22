import { combineReducers } from "redux";
import depts from "./depts";
import vehicles from "./vehicles";
import login from "./login";

export default combineReducers({ depts, vehicles, login });
