import {useEffect, useState} from 'react'
import { Button, Form, Input,message } from 'antd';
import { useChangePasswordMutation } from '../Services/Api_User';
import Loading from '../Component/Loading';

const ChangePassword = () => {
    const [changePassword,{error}] = useChangePasswordMutation()
    const [messageApi, contextHolder] = message.useMessage()
    const [isLoadingSeen,setIsLoadingSeen] = useState(false)

    useEffect(() => {
        if(error && "data" in error){
            const err = error.data as {message: string[]}
            messageApi.open({
                type: "error",
                content: err.message
            })
        }
    },[error])

    const onFinish = async (values:any) => {
        setIsLoadingSeen(true)
        try {
            const response = await changePassword(values)
            if("data" in response){
                const message = response.data.message
                messageApi.open({
                    type: "success",
                    content: message
                })
            }
        } catch (error) {
            messageApi.open({
                    type: "error",
                    content: "Đã có lỗi xảy ra vui lòng thử lại"
            })
        }
        setIsLoadingSeen(false)
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div>
        {contextHolder}
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
                    <h1>Change Password</h1>
            </div>
            </Form.Item>

                    <h5 style={{marginTop:-30,textAlign:"center",marginBottom:60}}>Please login using account detail bellow.</h5>

            <Form.Item 
                label={<span style={{ color: '#2b2b2b' }}>Email</span>}
                name="email"
                style={{ color: 'lightgray' }}
                rules={[{ required: true, message: 'Email không được để trống!' }]}
            >
                <Input style={{height: 40,width:500}} placeholder='nhập địa chỉ email'/>
            </Form.Item>

            <Form.Item 
                label={<span style={{ color: '#2b2b2b' }}>Mật khẩu hiện tại</span>}
                name="password"
                style={{ color: 'lightgray' }}
                rules={[{ required: true, message: 'Mật khẩu hiện tại không được để trống!' }]}
            >
                <Input style={{height: 40,width:500}} placeholder='nhập mật khẩu hiện tại'/>
            </Form.Item>


            <Form.Item 
                label={<span style={{ color: '#2b2b2b' }}>Mật khẩu mới</span>}
                name="newPassword"
                style={{ color: 'lightgray' }}
                rules={[{ required: true, message: 'Mật khẩu mới không được để trống!' }]}
            >
                <Input style={{height: 40,width:500}} placeholder='nhập mật khẩu mới'/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 11 }}>
                <Button type="primary" htmlType="submit" style={{ width: '30%', display: 'block',border: '1px solid red',background: 'none', color: 'red' }}>
                    Đổi mật khẩu
                </Button>
            </Form.Item>
        </Form>
    </div>
    </div>
  )
}

export default ChangePassword
