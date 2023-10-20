import { useState,useEffect } from "react";
import { Button, Form, Input, Upload, Modal,Select,message,InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { IProduct,IColor } from "../../../Models/interfaces";
import type { UploadFile } from "antd/es/upload/interface";
import type { RcFile, UploadProps } from "antd/es/upload";
import { useAddProductMutation } from "../../../Services/Api_Product";
import { useGetAllCategoryQuery } from "../../../Services/Api_Category";
import Loading from "../../../Component/Loading";
import {useNavigate} from "react-router-dom"
import { useGetAllSizeQuery } from "../../../Services/Api_Size";
import { useGetColorsQuery } from "../../../Services/api_Color"


const { TextArea } = Input;


const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

type urlObject = {
  url: string
}

const AddProduct = () => {
  const navigate = useNavigate()
  const [addProduct, {error}] = useAddProductMutation();
  const {data: getAllCategory,isLoading} = useGetAllCategoryQuery()
  const {data: getAllSize,isLoadingSize} = useGetAllSizeQuery()
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [isLoadingScreen, setIsLoadingScreen] = useState(false);
  const [messageApi,contextHolder] = message.useMessage()
  const { data } = useGetColorsQuery(undefined)

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    )
  }

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const beforeUpload = (file: RcFile): boolean => {
    return false
  }

  useEffect(() => {
    if(error && "data" in error){
      const errDetails = error.data as {message: string[]}
        messageApi.open({
          type: "error",
          content: errDetails.message
        })
    }
  },[error])

  const onFinish = async (values: IProduct) => {
    try {
      setIsLoadingScreen(true)
      const formData = new FormData()
      fileList.forEach((file) => {
        if (file.originFileObj) {
          formData.append("images", file.originFileObj)
        }
      })

      const response = await axios.post(
        "http://localhost:8080/api/images/upload", 
        formData
      )


      // Assuming response.data contains the uploaded image URLs
      const imageUrls = response.data.urls.map((urls: urlObject) => urls.url)

      if (response.status === 200) {
        const newProduct: IProduct = {
          name: values.name,
          original_price: values.original_price,
          price: values.price,
          imgUrl: imageUrls,
          categoryId: values.categoryId,
          description: values.description,
          color_id: values.color_id,
          size_id: values.size_id,
          quantity: values.quantity
        };

        addProduct(newProduct)
          .unwrap()
          .then(() => {
            messageApi.open({
              type: "success",
              content: "Thêm sản phẩm thành công",
            })
          })

        console.log("dữ liệu", newProduct)
      }
      setIsLoadingScreen(false)
    } catch (error) {
      console.error("Error uploading images:", error)
      setIsLoadingScreen(false)
    }
  }



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
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        <Form.Item
          name="name"
          label="Tên sản phẩm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Danh mục" name="categoryId" rules={[{ required: true }]}>
          <Select
            style={{ width: 200 }}
            loading={isLoading}
          >
          {getAllCategory ? (
          getAllCategory?.map((category:any) => (
            <Select.Option key={category._id} value={category._id}>
              {category.name}
            </Select.Option>
          ))
        ) : (
          <p>Loading...</p>
         )}

          </Select>
        </Form.Item>

        <Form.Item label="Color" name="color_id" rules={[{ required: true }]}>
          <Select style={{ width: 200 }} loading={isLoading}>
            {data ? (
              data?.map((color: IColor) => (
                <Select.Option key={color._id} value={color._id}>
                  {color.name}
                </Select.Option>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Select>
        </Form.Item>
        <Form.Item label="Size" name="size_id" rules={[{ required: true }]}>
          <Select
            style={{ width: 200 }}
            loading={isLoadingSize}
          >
          {getAllSize ? (
          getAllSize?.map((size:any) => (
            <Select.Option key={size._id} value={size._id}>
              {size.name}
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

        <Form.Item
          name="price"
          label="Giá đã giảm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="quantity"
          label="Số lượng"
          rules={[{ required: true,message: "Số lượng không được bỏ trống" }]}
        >
          <InputNumber  />
        </Form.Item>

        <Form.Item label="Mô tả sản phẩm" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Tải lên">
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

        <Form.Item wrapperCol={{ offset: 4, span: 11 }}>
          <Button type="primary" danger htmlType="submit" style={{marginRight: 20}}>
            Thêm mới
          </Button>
          <Button
            htmlType="button"
            onClick={() => navigate("/admin/product/list")}
          >
            Quay lại
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddProduct
