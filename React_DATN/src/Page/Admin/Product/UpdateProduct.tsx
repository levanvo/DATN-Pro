import React, { useEffect,useState } from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneProductQuery } from '../../../Services/Api_Product';
import Loading from '../../../Component/Loading';
import { useGetAllCategoryQuery } from '../../../Services/Api_Category';
import { IProduct } from '../../../Models/interfaces';
import { useUpdateProductMutation } from '../../../Services/Products';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const UpdateProduct = () => {
    const navigate = useNavigate()
    const [messageApi,contextHolder] = message.useMessage()
    const {data: categoryData} = useGetAllCategoryQuery()
    const {id} = useParams()
    const {data: productData, isLoading} = useGetOneProductQuery(id || "")
    const [updateProduct] = useUpdateProductMutation()
    const [isLoadingScreen, setIsLoadingScreen] = useState(false);
    

  const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            id: productData?._id,
            name: productData?.name,
            original_price: productData?.original_price,
            price: productData?.price,
            categoryId: productData?.categoryId?._id
        })
    },[productData])

  const onFinish = (values: IProduct) => {
    try {
        setIsLoadingScreen(true)
        updateProduct({...values, _id:id}).unwrap().then(() => {
            messageApi.open({
                type: "success",
                content: "Cập nhật thành công"
            })
            setTimeout(()=> {
                navigate("/admin/product/list")
            },2000)
        })
        setIsLoadingScreen(false)
    } catch (error) {
        console.log("Lỗi khi cập nhật");
        setIsLoadingScreen(false)
    }
    
  };


  return (

    <div>
        {contextHolder}
        {isLoadingScreen && <Loading />}
        {isLoading ? <Loading /> : <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="name" label="Tên sản phẩm" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="categoryId" label="Danh mục" rules={[{ required: true }]}>
        <Select
          allowClear
          defaultValue={productData?.categoryId?.name}
        >
            {categoryData ? (categoryData.data.map((category:any) => (
                <Option key={category._id} value={category._id}>
                {category.name}
                </Option>
          ))
        ) : (
          <p>Loading...</p>
  )}
        </Select>
      </Form.Item>

      <Form.Item name="original_price" label="Giá gốc" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="price" label="Giá hiện tại" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
   
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={() => navigate("/admin/product/list")}>
          Quay lại
        </Button>
      </Form.Item>
    </Form>}
    </div>
    
  );
};

export default UpdateProduct;