
import { request } from '@/utils'

// 1.获取频道列表
export const getChannelApi = () => {
    return request({
        url: '/channels',
        method: 'GET'
    })
}

