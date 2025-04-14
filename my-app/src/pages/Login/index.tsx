import { Card, Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import './index.scss'
import { fetchLogin } from '@/store/module/user'
const Login = () => {
    const dispatch = useDispatch()
    const handleFinish = (values: any) => {
        console.log('Success:', values);
        // 触发fetchLogin
        dispatch(fetchLogin(values))

      };
    return (
        <div className='login'>
            <Card title="欢迎登录"  className='container' >
                <Form validateTrigger='onBlur'
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={handleFinish}
                >
                    <Form.Item
                    label="用户名"
                    name="mobile"
                    rules={[{ required: true, message: '请输入手机号!' }, {pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号!'}]}
                    >
                        <Input placeholder='请输入手机号'/>
                    </Form.Item>

                    <Form.Item
                    label="密码"
                    name="code"
                    rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password placeholder='请输入密码'/>
                    </Form.Item>


                    <Form.Item label={null}>
                        <Button className='btn' type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
             
        </div>
    )
}
export default Login