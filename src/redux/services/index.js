import cookie from 'react-cookies'

export const setToken = (token) => {
    return cookie.save('accessToken', token) || null;
}

export const getToken = () => {
    const token = cookie.load('accessToken') || null;
     return token  
}

export const removeToken = () => {
    cookie.remove('accessToken')
}