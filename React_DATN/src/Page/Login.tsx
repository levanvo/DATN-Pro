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
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    
    <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 17 }}
        style={{ width: "800px", border: '1px solid #ccc', borderRadius: '5px', paddingTop: 50,paddingLeft: -30}}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <div>
                <h1>Login</h1>
           </div>
        </Form.Item>

        <Form.Item 
            label="Tên đăng nhập"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input style={{height: 40}}/>
        </Form.Item>

        <Form.Item
            label="Mật khẩu"
            name="password"
            
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password style={{height: 40}}/>
        </Form.Item>

        <Form.Item valuePropName="checked" wrapperCol={{ offset: 5, span: 17 }}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5, span: 11 }}>
            <Button type="primary" htmlType="submit" style={{ width: '30%', display: 'block',border: '1px solid red',background: 'none', color: 'red' }}>
                Đăng nhập
            </Button>
        </Form.Item>
    </Form>
</div>


)

};

export default Login;