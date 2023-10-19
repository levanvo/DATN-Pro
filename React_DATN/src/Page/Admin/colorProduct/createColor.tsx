import { Link, useNavigate } from "react-router-dom"
import { Button, Form, Input, message } from "antd"
import { useCreateColorMutation } from "../../../Services/api_Color"

const CreateColor = () => {
  const navigate = useNavigate()
  const [createColor] = useCreateColorMutation()
  const [form] = Form.useForm()

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
  }
  const tailLayout = {
    wrapperCol: { offset: 10, span: 20 },
  }

  const onFinish = (values: any) => {
    console.log(values)
    createColor(values)
    message.success("Create color success")
    navigate("/admin/colors")
  }
  //----------------------------------------------------------
  //   if (isLoading) return <div>Loading...</div>
  return (
    <>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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

export default CreateColor
