import React, { useState } from "react";
import { Button, Form, Input, Upload, Modal,Select,message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { IProduct } from "../../../Models/interfaces";
import type { UploadFile } from "antd/es/upload/interface";
import type { RcFile, UploadProps } from "antd/es/upload";
import { useAddProductMutation } from "../../../Services/Api_Product";
import { useGetAllCategoryQuery } from "../../../Services/Api_Category";
import Loading from "../../../Component/Loading";
import {useNavigate} from "react-router-dom"

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type urlObject = {
  url: string;
};

const AddProduct = () => {
  const navigate = useNavigate()
  const [addProduct] = useAddProductMutation();
  const {data: getAllCategory,isLoading}:any = useGetAllCategoryQuery()
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [isLoadingScreen, setIsLoadingScreen] = useState(false);
  const [messageApi,contextHolder] = message.useMessage()

  
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8}}>Upload</div>
    </div>
  );

  const beforeUpload = (file: RcFile): boolean => {
    return false;
  };

  const onFinish = async (values: IProduct) => {
    try {
      setIsLoadingScreen(true);
      const formData = new FormData();
      fileList.forEach((file) => {
        if (file.originFileObj) {
          formData.append("images", file.originFileObj);
        }
      });

      const response = await axios.post(
        "http://localhost:8080/api/images/upload", // Your Cloudinary upload endpoint
        formData
      );

      console.log(response);

      // Assuming response.data contains the uploaded image URLs
      const imageUrls = response.data.urls.map((urls: urlObject) => urls.url);

      if (response.status === 200) {
        const newProduct: IProduct = {
          name: values.name,
          original_price: values.original_price,
          price: values.price,
          imgUrl: imageUrls,
          categoryId: values.categoryId
        };

        addProduct(newProduct).unwrap().then(() => {
          messageApi.open({
            type: "success",
            content: "Thêm sản phẩm thành công"
          })
        });

        console.log("dữ liệu", newProduct);
      }
      setIsLoadingScreen(false);
    } catch (error) {
      console.error("Error uploading images:", error);
      setIsLoadingScreen(false);
    }
  };

  return (
    <div>
      {contextHolder}
      {isLoadingScreen && <Loading />}
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        name="control-ref"
        onFinish={onFinish}
        style={{ maxWidth: 800, margin: '0 auto' }} 
      >
        <Form.Item name="name" label="Tên sản phẩm" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Danh mục" name="categoryId" rules={[{ required: true }]}>
          <Select
            style={{ width: 200 }}
            loading={isLoading}
          >
          {getAllCategory ? (
          getAllCategory.data.map((category:any) => (
            <Select.Option key={category._id} value={category._id}>
              {category.name}
            </Select.Option>
          ))
        ) : (
          <p>Loading...</p>
  )}

          </Select>
        </Form.Item>

        <Form.Item
          name="original_price"
          label="Giá gốc"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="price" label="Giá đã giảm" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item>

          <Upload
            listType="picture-card"
            name="images"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={beforeUpload} // Prevent automatic uploading
            multiple
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </Form.Item>

        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>

        <Form.Item>
          <Button type="primary" danger htmlType="submit">
            Thêm mới
          </Button>
          <Button htmlType="button" onClick={() => navigate("/admin/product/list")}>Quay lại</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
