import cookie from 'react-cookies'

export const setToken = (token) => {
    return cookie.save('accessToken', token) || null;
}

export const getToken = () => {
    const token = cookie.load('accessToken') || null;
    if(token === 'true') return true
    else return false
}