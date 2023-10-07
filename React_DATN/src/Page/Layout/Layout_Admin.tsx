// import AiFillDatabase from "react-icons"
import React, { useState } from 'react';
import {
    CalendarOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AreaChartOutlined,
    LeftOutlined
} from '@ant-design/icons';
import {MdOutlineCategory} from "react-icons/md"
import {FaRegCommentAlt} from "react-icons/fa"
import {ImBlogger2} from "react-icons/im"
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
type Props = {}

const Layout_Admin = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    return (



        <Layout className="h-screen">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical mb-1" />
                <a className='text-white hover:underline m-2' href={`/`}><LeftOutlined className='w-2'/>Back</a>
                <Menu
                    className='mt-1'
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <AreaChartOutlined />,
                            label: <Link to="/admin">Dashboard</Link>,
                        },
                        {
                            key: '2',
                            icon: <CalendarOutlined />,
                            label: <Link to="/admin">Products</Link>,
                        },
                        {
                            key: '3',
                            icon: <MdOutlineCategory />,
                            label: <Link to="/admin">Category</Link>,
                        },
                        {
                            key: '4',
                            icon: <FaRegCommentAlt />,
                            label: <Link to="/admin">Comment</Link>,
                        },
                        {
                            key: '5',
                            icon: <ImBlogger2 />,
                            label: <Link to="/admin">Blog</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default Layout_Admin