
import { request } from '@/utils'

// 1.获取频道列表
export const getChannelApi = () => {
    return request({
        url: '/channels',
        method: 'GET'
    })
}

// 2.提交表单
export const createArticleApi = (formData: any) => {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data: formData // body参数
    })
}

// 3.获取文章列表
export const getArticleListApi = (params: any) => {
    return request({
        url: '/mp/articles',
        method: 'GET',
        params // query参数
    })
}
