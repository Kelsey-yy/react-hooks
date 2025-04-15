import { createSlice } from "@reduxjs/toolkit";
import { request, setToken as _setToken, getToken, removeToken } from "@/utils";
import {loginApi, getProfileApi } from "@/apis/user";
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

// 结构出actionCreater

const  { setToken, setUserInfo, clearUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法获取token
const fetchLogin = (LoginForm: any) => {
    return async (dispatch: any) => {
        // 1. 发送请求获取token
        // 2.提交同步action，进行token的存入
        const res = await request.post('/authorizations', LoginForm) // 1.
        dispatch(setToken(res.data.token)) // 2.
    }
}

// 异步方法获取用户信息
const fetchUserInfo = () => {
    return async (dispatch: any) => {
       const res = await request.get('/user/profile')
       dispatch(setUserInfo(res.data))
    }
}




export { setToken, fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer // 用来再store里面去组装的