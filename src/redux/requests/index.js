import axios from "axios";
import { getToken } from "../services";

const ENDPOINT = process.env.REACT_APP_API;

const getHeader = (token) => {
    return {
        "Content-Type": "application/json",
        "x-auth-token": token || getToken()
    }
}

const apiRequest = (method, url, data, token) => {
    return new Promise((resolve) => {
        axios({ method, url: `${ENDPOINT}/api/${url}`, data, headers: getHeader(token) })
            .then((response) => resolve(response))
            .catch((error) => resolve(error))
    })
}

export default apiRequest;