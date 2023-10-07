import React from 'react'
import { Button, Checkbox, Form, Input, Select, Skeleton, message } from 'antd';
import { useAddProductMutation, useUpdateProductMutation } from '../../../Api/product';
import { useNavigate } from "react-router-dom"
type Props = {}

const UpdateProduct = (props: Props) => {
    const [updateProduct, { isLoading: updateLoading }] = useUpdateProductMutation()
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        updateProduct(values).unwrap().then(() => {
            messageApi.open({
                type: "success",
                content: "Đã thêm thành công,chờ 3s để quay lại trang quản trị"
            });
            form.resetFields();
            setTimeout(() => {
                navigate("/admin/products");
            }, 3000);
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        name?: string;
        price?: number;
        image?: string;
        original_price?: number;
        description?: string;
        inventory_number?: number;
        size?: number;
        color?: string
    };
    return (
        <div>
            <div>
                {contextHolder}
                <div className=" ml-20 mb-5"><h1 className="text-3xl font-bold text-gray-800">Thêm sản phẩm</h1></div>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: 'Chưa nhập tên sản phẩm' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Giá"
                        name="price"
                        rules={[{ required: true, message: 'Chưa nhập giá' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Ảnh"
                        name="image"
                        rules={[{ required: true, message: 'Chưa nhập ảnh' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giá gốc"
                        name="original_price"
                        rules={[{ required: true, message: 'Chưa nhập giá gốc' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Mô tả sản phẩm"
                        name="description"
                        rules={[{ required: true, message: 'Chưa nhập mô tả chi tiết' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Số lượng tồn"
                        name="inventory_number"
                        rules={[{ required: true, message: 'Chưa nhập số lượng tồn' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Size"
                        name="size"
                        rules={[{ required: true, message: 'Chưa nhập size' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }
                        ]}
                    >
                        <Select >
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>


                        </Select>
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Màu"
                        name="color"
                        rules={[{ required: true, message: 'Chưa nhập màu' },
                        { whitespace: true, message: 'Không nhập khoảng trắng' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" className="bg-blue-500" htmlType="submit">
                            Thêm
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default UpdateProduct