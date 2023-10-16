import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input,message } from 'antd';
import { useSignupMutation } from '../Services/Api_User';
import { IUser } from '../Models/interfaces';
import Loading from '../Component/Loading';
const Register = () => {
    const navigate = useNavigate()
    const [addUser,{error}] = useSignupMutation()
    const [messageApi,contexHolder] = message.useMessage()
    const [isLoadingSeen,setIsLoadingSeen] = useState(false)

    useEffect(() => {
        if (error && 'data' in error) {
          const errorData = error.data as { message: string[] };
          errorData.message.forEach((errorMsg) => {
            messageApi.open({
              type: 'error',
              content: errorMsg,
            });
          });
        }
      }, [error]);
   const onFinish = async (values:IUser) => {
        setIsLoadingSeen(true)
    
        try {
           await addUser(values)
            messageApi.open({
                type: "success",
                content: "Đăng ký thành công"
            })
            setTimeout(() => {
                navigate("/login")
                window.location.reload()
            },1500)
        } catch (error) {
           messageApi.open({
            type: "error",
            content: "Đã xảy ra lỗi vui lòng thử lại"
           })
        }
        setIsLoadingSeen(false)
   }
   const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <div>
        {contexHolder}
        {isLoadingSeen && <Loading />}
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',}}>
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 17 }}
            style={{ width: "800px", border: '1px solid #ccc', borderRadius: '20px', paddingTop: 20,paddingLeft: -30,background:"#ebebeb"}}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                    <h1>Register</h1>
            </div>
            </Form.Item>

                    <h5 style={{marginTop:-30,textAlign:"center",marginBottom:60}}>Please login using account detail bellow.</h5>

            <Form.Item 
                label={<span style={{ color: '#2b2b2b' }}>Tên người dùng</span>}
                name="username"
                style={{ color: 'lightgray' }}
                rules={[{ required: true, message: 'Tên người dùng không được để trống!' }]}
            >
                <Input style={{height: 40,width:500}} placeholder='nhập tên của bạn'/>
            </Form.Item>

            <Form.Item 
                label={<span style={{ color: '#2b2b2b' }}>Email</span>}
                name="email"
                style={{ color: 'lightgray' }}
                rules={[{ required: true, message: 'Email không được để trống!' }]}
            >
                <Input style={{height: 40,width:500}} placeholder='nhập địa chỉ email'/>
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="password"
                
                rules={[{ required: true, message: 'Password không được để trống!' }]}
            >
                <Input.Password style={{height: 40,width:500}} placeholder='nhập mật khẩu'/>
            </Form.Item>

            <Form.Item
                label="Nhập lại mật khẩu"
                name="confirmPassword"
                
                rules={[{ required: true, message: 'confirm Password không được để trống!' }]}
            >
                <Input.Password style={{height: 40,width:500}} placeholder='nhập lại mật khẩu'/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 11 }}>
                <Button type="primary" htmlType="submit" style={{ width: '30%', display: 'block',border: '1px solid red',background: 'none', color: 'red' }}>
                    Đăng ký
                </Button>
            </Form.Item>
        </Form>
    </div>
   </div>
    )
}

export default Register