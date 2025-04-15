//1. 根域名配置

import axios from "axios";
import { getToken, removeToken } from "./token";
import router from "../router";

// 2. 超时时间
// 3.请求拦截器

const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})

request.interceptors.request.use(config => {
    // 操作config，注入token
    // 1. 获取token,本地拿
    // 2. 注入token, 按后端要求的格式注入
    if (getToken()) {
        config.headers.Authorization = `Bearer ${getToken()}`
    }
    
    return config
}, (error) => {
    return Promise.reject(error)
})

request.interceptors.response.use(response => {
    
    return response.data
}, (error) => {
    // 监控401，token失效
    if (error.response.status === 401) {
        removeToken()
        router.navigate('/login')
    }
    return Promise.reject(error)
})

export {request}