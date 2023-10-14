import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useSiginMutation } from '../Services/Api_User';
import { IUser } from '../Models/interfaces';


const Login = () => {
    const [sigin, {isLoading}] = useSiginMutation()

    const onFinish = async (values: any) => {
        try {
            // Gọi mutation để đăng nhập
            const {data}:any = await sigin(values);

            localStorage.setItem("token",`"${data.accessToken}"`)
            console.log(data);

          } catch (error) {
            console.error('Login failed:', error);
          }
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
return (
    <div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    </div>
)

};

export default Login;