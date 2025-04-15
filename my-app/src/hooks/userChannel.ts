// 封装获取 频道列表 的逻辑
/*
1. 创建一个use打头的函数
2. 在函数内部封装业务逻辑，并return出组件中想要用的数据状态
3. 组件中导入函数执行并解构状态数据使用
*/

import { useEffect, useState } from "react"
import { getChannelApi } from "@/apis/article"

const useChannel = () => {

    const [channelList, setChannelList] = useState([])
    useEffect(() => {
        // 1. 封装一个函数，在函数体内调用接口
        const getChannelList = async () => {
            const res = await getChannelApi()
            setChannelList(res.data.channels)
        }
        // 2. 在useEffect中调用函数
        getChannelList()
        
    }, [])

    // 把组件中要用的数据return出去
    return {
        channelList
    }
}

export {useChannel}