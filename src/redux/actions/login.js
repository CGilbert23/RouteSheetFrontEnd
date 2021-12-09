import { LOGIN_SUCCESS } from "../constants"
import { setToken } from "../services"

export const isAuth = (res) => {
    setToken(res)
    return {
        type: LOGIN_SUCCESS,
        payload: res
    }
}