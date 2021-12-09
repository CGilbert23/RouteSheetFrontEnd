import axios from "axios";

const ENDPOINT = process.env.REACT_APP_API;

const apiRequest = (method, url, data) => {
    return new Promise((resolve) => {
        axios({ method , url: `${ENDPOINT}/api/${url}`, data })
        .then((response) => resolve(response))
        .catch((error) => resolve(error))
    })
}

export default apiRequest;