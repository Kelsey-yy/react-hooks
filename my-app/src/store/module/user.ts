import { createSlice } from "@reduxjs/toolkit";
import { request, setToken as _setToken, getToken } from "@/utils";
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        }
    }
})

// 结构出actionCreater

const  { setToken } = userStore.actions

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

export { setToken, fetchLogin }

export default userReducer // 用来再store里面去组装的