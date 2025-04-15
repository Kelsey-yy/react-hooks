// 用户相关的请求
import { request } from '@/utils'

// 1.登录的请求（不包含处理结果）
export const loginApi = (formData: any) => {
    return request({
        url: '/authrorizations',
        method: 'POST',
        data: formData
    })
}

// 2.获取用户信息
export const getProfileApi = () => {
    return request({
        url: '/user/profile',
        method: 'GET',
    })
}

