import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

// 结构出actionCreater

const  { setToken } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

export { setToken }

export default userReducer // 用来再store里面去组装的