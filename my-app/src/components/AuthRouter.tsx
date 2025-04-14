// 封装高阶组件：就是一个函数，传入一个组件，返回一个组件
// 有token正常跳转， 无token去登录
// AuthRouter.tsx
import { Navigate } from 'react-router-dom'
import { getToken } from '@/utils'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthRouter = ({ children }: Props) => {
  const token = getToken()

  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={"/login"} replace />
  }
}

export default AuthRouter

