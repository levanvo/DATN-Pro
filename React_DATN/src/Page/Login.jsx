import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from 'antd';
import { OauthServiceSignin } from '../Handle/Oauth-Services/OauthUser';
import { setLocalStorage } from '../Handle/Oauth-Services/LocalStorage';

const Login = () => {
    const [getDataUser, setDataUser] = useState({});
    const LoginForm = async (values) => {
        OauthServiceSignin(values)
            .then((data) => {
                setDataUser(data);
                setLocalStorage("shoes.dataUser",data.dataUser);
                window.location.href = "/";
                alert("Chào mừng đến với Shop-Sneaker !");
            })
            .catch((error) => {
                const showError = error.response.data.message
                alert(showError);
            });
        const checkDataUser = Object.keys(getDataUser.dataUser).length === 0;
        console.log(getDataUser.dataUser);
        // console.log(checkDataUser);
    };

    return (
        <div className='w-[90vw] mx-auto'>
            <div className="shopping-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="location">
                                <ul>
                                    <li><a href="index.html" title="go to homepage">Home<span>/</span></a></li>
                                    <li><strong>Login page</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <div className="login">
                                <div className="login-form-container">
                                    <div className="login-text">
                                        <h2>login</h2>
                                        <span>Please login using account detail bellow.</span>
                                    </div>
                                    <div className="login-form">
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
                                            onFinish={LoginForm}
                                            autoComplete="off"
                                        >
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
                                                <Button htmlType="submit" className='w-36'>Login</Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                    <p className='float-right'>Are you not an account ? <Link className='text-green-600' to={`/register`}>Register</Link> now !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login