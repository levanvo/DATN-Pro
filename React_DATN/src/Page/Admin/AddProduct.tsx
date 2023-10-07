import React, { useState } from 'react';
import { Button, Form, Input, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { IProduct } from '../../interfaces/product';
import type { UploadFile } from 'antd/es/upload/interface';
import type { RcFile, UploadProps } from 'antd/es/upload';
import { useAddProductMutation } from '../../Services/Api_Product';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  type urlObject = {
    url : string
  }

const AddProduct = () => {
  const [addProduct] = useAddProductMutation()
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const beforeUpload = (file: RcFile): boolean => {
    return false;
  };


  const onFinish = async (values: IProduct) => {
    try {
      const formData = new FormData();
      fileList.forEach((file) => {
        if (file.originFileObj) {
          formData.append('images', file.originFileObj);
        }
      });

      const response = await axios.post(
        'http://localhost:8080/api/images/upload', // Your Cloudinary upload endpoint
        formData
      );

        console.log(response);
        
      // Assuming response.data contains the uploaded image URLs
      const imageUrls = response.data.urls.map((urls:urlObject) => urls.url);

      if(response.status === 200){
        const newProduct:IProduct = {
          name: values.name,
          original_price: values.original_price,
          price: values.price,
          imgUrl: imageUrls
        }

        addProduct(newProduct).unwrap().then(() => alert("Thêm mới thành công"))
        
        console.log("dữ liệu",newProduct);
        
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <Form {...layout} name="control-ref" onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item name="name" label="Tên sản phẩm" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="original_price" label="Giá gốc" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="price" label="Giá đã giảm" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

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

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button">Quay lại</Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
