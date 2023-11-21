import { useNavigate, useParams, Link } from "react-router-dom"
import { Button, Form, Input, message } from "antd"
import {
  useGetOneDiscountQuery,
  useUpdateDiscountMutation,
} from "../../../Services/Api_Discount"
import Loading from "../../../Component/Loading"
import moment from "moment"

const UpdateDiscount = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading, error } = useGetOneDiscountQuery(id)
  const [updateDiscount] = useUpdateDiscountMutation()

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
  }
  const tailLayout = {
    wrapperCol: { offset: 10, span: 20 },
  }

  const onFinish = (values: any) => {
    updateDiscount({ ...values, _id: id })
    message.success("Cập nhật mã giảm giá thành công")
    navigate("/admin/discount/list")
  }
  //-------------------------------------------------------------
  if (isLoading) return <Loading />
  if (error) return <div>Error...</div>
  return (
    <>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={{
          ["code"]: data.data.code,
          ["percentage"]: data.data.percentage,
          ["minimumOrderAmount"]: data.data.minimumOrderAmount,
          ["quantity"]: data.data.quantity,
          ["expiresAt"]: moment(data.data.expiresAt).format("YYYY-MM-DD HH:mm"),
        }}
      >
        <Form.Item
          name="code"
          label="Mã Giảm Giá"
          rules={[{ required: true, message: "Vui lòng nhập mã giảm giá!" }]}
        >
          <Input type="text" />
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
          name="minimumOrderAmount"
          label="Giá trị tối thiểu"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập giá trị tối thiểu áp dụng mã!",
            },
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
          label="Thời hạn sử dụng"
          rules={[
            { required: true, message: "Vui lòng nhập thời hạn mã giảm giá!" },
          ]}
        >
          <Input type="datetime-local" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Submit</Button>
          <Link to="/admin/discount/list">
            <Button style={{ margin: "0 0 0 8px" }}>Cancel</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateDiscount
