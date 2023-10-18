import React, { useState } from "react";
import { Form, Input, Button, Upload,Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadProps } from "antd/es/upload";
import { useNavigate } from "react-router-dom";
import type { UploadFile } from "antd/es/upload/interface";
import { useAddCategoryMutation } from "../../../Services/Api_Category";

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const AddCategory = () => {
    const [addProduct] = useAddCategoryMutation();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        addProduct(values)
            .unwrap()
            .then(() => {
                alert('Thêm Thành Công')
                return navigate("/admin/category/list");
            });
            
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    type FieldType = {
        name: string;
        price: number;
    };
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-2xl mb-4">Thêm Category</h2>
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
                <Form.Item<FieldType>
                    label="Tên Category"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên Category" },
                        { min: 3, message: "Ít nhất 3 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>

                

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        submit
                    </Button>
                    <Button
                        type="primary"
                        danger
                        className="ml-2"
                        onClick={() => navigate("/admin/category/list")}
                    >
                        Back
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddCategory;