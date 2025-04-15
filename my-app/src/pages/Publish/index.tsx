import {
    Card,
    Form,
    Input,
    Button,
    Radio,
    Upload,
    Space,
    Select,
    Breadcrumb
} from 'antd'

import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TextArea from 'antd/es/input/TextArea';
import {getChannelApi, createArticleApi} from '@/apis/article'
import { useEffect, useState } from 'react';
const Publish = () => {
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
    const onFinish = async (formValue: any) => {
        // 1. 对表单数据进行处理
        const {title, content, channel_id} = formValue
        const reqData = {
            title,
            content,
            cover: {
                type: 0,
                images: []
            },
            channel_id,
        }
        const res = await createArticleApi(reqData)
        
    }
  return (
    <div className='publish'>
      <Card title={
        <Breadcrumb 
            items={[
                {title: <Link to='/'>首页</Link>},
                {title: '发文章'}
            ]} 
        />
      }>
        <Form
            labelCol={{span: 4}}
            wrapperCol={{span: 16}}
            initialValues={{type: `1`}}
            onFinish={onFinish}
        >
            <Form.Item
              label='标题'
              name='title'
              rules={[{required: true, message: '请输入文章标题'}]}
              >
              <Input placeholder='请输入文章标题' style={{width: 400}}/>
            </Form.Item>
            <Form.Item
              label='频道'
              name='channel_id'
              rules={[{required: true, message: '请选择文章分类'}]}
              >
              <Select placeholder='请选择文章分类' style={{width: 400}}>
                {
                    channelList.map(item => <Select.Option key={item.id}  value={item.id}>{item.name}</Select.Option>)
                }
                
              </Select>
            </Form.Item>
            <Form.Item
              label='内容'
              name='content'
              rules={[{required: true, message: '请输入文章内容'}]}
              >
                {/* 富文本编辑器 */}
                {/* <ReactQuill
                    className='publish-quill'
                    theme='snow'
                    placeholder='请输入文章内容'
                /> */}
                 <TextArea
                    showCount
                    maxLength={500}
                    placeholder="请输入文章内容"
                    style={{ height: 120, resize: 'none' }}
                    />
            </Form.Item>

            <Form.Item
              wrapperCol={{offset: 4}}
              >
              <Space>
                <Button size='large' type='primary' htmlType='submit'>发布文章</Button>
              </Space>
            </Form.Item>
        </Form>

      </Card>

    </div>
  )
}

export default Publish