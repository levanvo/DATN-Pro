import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from 'antd';
// import { OauthServiceSignup } from '../Handle/Oauth-Services/OauthUser';
import { GetAllUser } from '../Api/Api_User';

const Register = () => {
    const navigate = useNavigate();
    const [getDataUser, setDataUser] = useState({});
    // const LogupForm = async (values) => {
    //     OauthServiceSignup(values)
    //         .then((data) => {
    //             setDataUser(data);
    //             navigate(`/login`);
    //             alert("Chúc mừng bạn đăng kí thành công, đăng nhập ngay nào !");
    //         })
    //         .catch((error) => {
    //             const showError = error.response.data.message
    //             alert(showError);
    //         });
    //     const checkDataUser = Object.keys(getDataUser.dataUser).length === 0;
    //     console.log(getDataUser.dataUser);
    //     console.log(checkDataUser);
    // };
    return (
        <div className='w-[90vw] mx-auto'>
            <div className="shopping-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="index.html" title="go to homepage">Home<span>/</span></a></li>
                                    <li><strong>Register page</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-area ptb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-md-3 text-center">
                            <div className="login">
                                <div className="login-form-container">
                                <Link to={`/login`} className='underline'><img title='back' className='w-6 h-6 hover:-translate-x-[3px] duration-200' src="../../img/IMAGE_CREATED/previous.png" alt="" /></Link>
                                    <div className="login-text">
                                        
                                        <h2>Register</h2>
                                        <span>Please Register using account detail bellow.</span>
                                    </div>
                                    <div className="logup-form">
                                        <Form
                                            name="basic"
                                            labelCol={{
                                                span: 6,
                                            }}
                                            wrapperCol={{
                                                span: 16,
                                            }}
                                            style={{
                                                maxWidth: 600,
                                            }}
                                            initialValues={{
                                                remember: true,
                                            }}
                                            // onFinish={LogupForm}
                                            autoComplete="off"
                                        >
                                            <Form.Item
                                                label="Username"
                                                name="username"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your user name!',
                                                    },
                                                ]}
                                            >
                                                <Input maxLength={16} />
                                            </Form.Item>

                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your email!',
                                                    },
                                                ]}
                                            >
                                                <Input type='email' />
                                            </Form.Item>

                                            <Form.Item
                                                label="Password"
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your password!',
                                                    },
                                                ]}
                                            >
                                                <Input type='password' />
                                            </Form.Item>
                                            <Form.Item
                                                label="Re-Password"
                                                name="confirmPassword"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your re-password!',
                                                    },
                                                ]}
                                            >
                                                <Input type='password' />
                                            </Form.Item>

                                            <div className="flex justify-between">
                                                <div className="">
                                                    <input type="checkbox" id="remember" />
                                                    <label htmlFor="remember">Remember me</label>
                                                </div>
                                                <a href="#">Forgot Password?</a>
                                            </div>
                                            <Form.Item
                                                wrapperCol={{
                                                    offset: 8,
                                                    span: 16,
                                                }}
                                            >
                                                <Button htmlType="submit" className='w-36'>Logup</Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register