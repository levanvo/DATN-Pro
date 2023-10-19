import React,{useState,useEffect} from 'react';
import { Button, Checkbox, Form, Input,message } from 'antd';
import { useSiginMutation } from '../Services/Api_User';
import { IUser } from '../Models/interfaces';
import Loading from '../Component/Loading';



const Login = () => {
    const [sigin, {error}] = useSiginMutation()
    const [isLoadingSeen,setIsLoadingSeen] = useState(false)
    const [messageApi,contexHolder] = message.useMessage()
    const onFinish = async (values: any) => {
        setIsLoadingSeen(true); // Set loading to true initially
        try {
            const { data }: any = await sigin(values);
            localStorage.setItem("token", `"${data.accessToken}"`);
           localStorage.setItem("user", JSON.stringify(data.user))
           
            
            messageApi.open({
                type: "success",
                content: "Đăng nhập thành công"
            }); 
        } catch (error) {
        }       
        setIsLoadingSeen(false); // Set loading to false after a successful login attempt
    };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      useEffect(() => {
        if (error) {
            if("data" in error){
                const errorData = error.data as { message: string };
                messageApi.open({
                    type: "error",
                    content: errorData?.message
                })
            }
        }
    }, [error]);
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
                    <h1>Đăng nhập</h1>
            </div>
            </Form.Item>

                    <h5 style={{marginTop:-30,textAlign:"center",marginBottom:60}}>Vui lòng điền thông tin đăng nhập bên dưới.</h5>


            <Form.Item 
                label={<span style={{ color: '#2b2b2b' }}>Email</span>}
                name="email"
                style={{ color: 'lightgray' }}
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input style={{height: 40,width:500}}/>
            </Form.Item>

            <Form.Item
                label="Mật khẩu"
                name="password"
                
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password style={{height: 40,width:500}}/>
            </Form.Item>

            <Form.Item valuePropName="checked" wrapperCol={{ offset: 6, span: 17 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 6, span: 11 }}>
                <Button type="primary" htmlType="submit" style={{ width: '30%', display: 'block',border: '1px solid red',background: 'none', color: 'red' }}>
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    </div>
   </div>
)

};

export default Login;