import { Link, useNavigate } from "react-router-dom"
import { Button, Form, Input, message } from "antd"
import { useCreateDiscountMutation } from "../../../Services/Api_Discount"

const CreateDiscount = () => {
  const navigate = useNavigate()
  const [createDiscount] = useCreateDiscountMutation()
  const [form] = Form.useForm()

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
  }
  const tailLayout = {
    wrapperCol: { offset: 10, span: 20 },
  }

  const onFinish = (values: any) => {
    createDiscount(values)
    message.success("Tạo mã giảm giá thành công")
    navigate("/admin/discount/list")
  }
  //----------------------------------------------------------
  //   if (isLoading) return <div>Loading...</div>
  return (
    <>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="code"
          label="Mã Giảm Giá"
          rules={[{ required: true, message: "Vui lòng nhập mã giảm giá!" }]}
        >
          <Input type="text" maxLength={6} />
        </Form.Item>
        <Form.Item
          name="percentage"
          label="Phần Trăm Giảm Giá"
          rules={[
            { required: true, message: "Vui lòng nhập phần trăm giảm giá!" },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Số lượng"
          rules={[{ required: true, message: "Vui lòng nhập số lượng mã!" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="expiresAt"
          label="Ngày hết hạn"
          rules={[
            { required: true, message: "Vui lòng nhập ngày hết hạn mã!" },
          ]}
        >
          <Input type="datetime-local" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Submit</Button>
          <Link to="/admin/color/list">
            <Button style={{ margin: "0 0 0 8px" }}>Cancel</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateDiscount
