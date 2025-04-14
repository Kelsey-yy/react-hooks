// 这个文件统一导出我们的utils,其他模块使用直接导这个文件就可以了

import { request } from './request'
import { setToken, getToken, removeToken } from './token'


export {
    request,
    setToken,
    getToken,
    removeToken,
}