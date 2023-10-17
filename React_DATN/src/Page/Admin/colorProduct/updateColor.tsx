import { useNavigate, useParams, Link } from "react-router-dom"
import { Button, Form, Input, message } from "antd"
import {
  useGetOneColorQuery,
  useUpdateColorMutation,
} from "../../../Services/api_Color"
import Loading from "../../../Component/Loading"

const UpdateColor = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading, error } = useGetOneColorQuery(id)
  const [updateProduct] = useUpdateColorMutation()
  console.log(data)

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
  }
  const tailLayout = {
    wrapperCol: { offset: 10, span: 20 },
  }

  const onFinish = (values: any) => {
    const newProduct = { ...values, _id: id }
    console.log(newProduct)
    updateProduct(newProduct)
    message.success("Update product success")
    navigate("/admin/colors")
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
          ["name"]: data.data.name,
        }}
      >
        <Form.Item
          name="name"
          label="Tên Màu"
          rules={[{ required: true, message: "Vui lòng nhập tên màu!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Submit</Button>
          <Link to="/admin/colors">
            <Button style={{ margin: "0 0 0 8px" }}>Cancel</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateColor
