import { Breadcrumb, Button, Card, Form, Radio, Select, DatePicker } from "antd"
import { Link } from "react-router-dom"
import locale from "antd/es/date-picker/locale/zh_CN" // 引入汉化包，让显示器显示中文

import { Table, Tag, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import img404 from '@/assets/error.png'
import { useChannel } from "@/hooks/userChannel";
import { getArticleListApi } from "@/apis/article";
import { useEffect, useState } from "react";


const { RangePicker } = DatePicker

const Article = () => {
    const {channelList} = useChannel()
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
        }
    ]
    const [count, setCount] = useState(0)
    
    const [list, setList] = useState([])
    useEffect(() => {
        async function getList() {
            const res = await getArticleListApi()
            setList(res.data.results)
            setCount(res.data.total_count)
        }
        getList()
    })
  return (
    <div>
        <Card 
            title={
                <Breadcrumb
                    items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '文章列表' },
                    ]}
                />
            }
            style={{marginBottom: 20}}
        >
            <Form initialValues={{status: ''}}>
                <Form.Item label="状态" name="status">
                    <Radio.Group>
                        <Radio value={''}>全部</Radio>
                        <Radio value={0}>草稿</Radio>
                        <Radio value={2}>审核通过</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="频道" name="channel_id">
                    <Select 
                        placeholder="请选择频道"
                        // defaultValue="lucy"
                        style={{width: 200}}
                    >
                        {
                            channelList.map((item: any) => {
                                return (
                                    <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="日期" name="date">
                    <RangePicker locale={locale}></RangePicker>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{marginLeft: 40}}>筛选</Button>
                </Form.Item>
            </Form>

        </Card>

        {/* 表格区域 */}
        <Card title={`根据筛选条件共查询到 ${count} 条结果：`}>
            <Table
                rowKey="id" columns={columns} dataSource={list}
            />

        </Card>
    </div>
  )
}

export default Article