// 封装token的方法：
// 存， 取， 删

const TOKENKET = 'token_key'
const setToken = (token: any) => {
    localStorage.setItem(TOKENKET, token)
}

const getToken = () => {
    return localStorage.getItem(TOKENKET)
}

const removeToken = () => {
    localStorage.removeItem(TOKENKET)
}

export {
    setToken,
    getToken,
    removeToken,
}