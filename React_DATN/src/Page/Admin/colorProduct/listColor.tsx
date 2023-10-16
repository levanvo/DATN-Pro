import React, { useState } from "react"
import { Button, Table, Popconfirm, message } from "antd"
import {
  useRemoveColorMutation,
  useGetColorsQuery,
} from "../../../Services/api_Color"
import { Link } from "react-router-dom"
import { IColor } from "../../../Models/interfaces"
import Loading from "../../../Component/Loading"

const ListColor = () => {
  const [selectedColorIds, setSelectedColorIds] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const { data, isLoading, error } = useGetColorsQuery(undefined)
  const [removeColor] = useRemoveColorMutation()

  if (isLoading) return <Loading />
  if (error) return <div>Error...</div>

  if (!data || !Array.isArray(data)) {
    return <div>No data available.</div>
  }

  const dataSource = data?.map((item: IColor, index) => ({
    index: index + 1,
    key: item._id,
    name: item.name,
  }))

  const columns = [
    {
      title: "#",
      dataIndex: "index",
    },
    {
      title: "Màu",
      dataIndex: "name",
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: "Hành Động",
      key: "action",
      render: (color: any) => {
        return (
          <>
            <Popconfirm
              title="Xoá màu"
              description="Bạn có chắc muốn xoá màu này không?"
              onConfirm={() => {
                removeColor(color.key)
                message.error("Remove success")
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Xoá</Button>
            </Popconfirm>
            <Link to={`/admin/color/${color.key}/update`}>
              <Button type="dashed" style={{ margin: "0 0 0 8px" }}>
                Cập Nhật
              </Button>
            </Link>
          </>
        )
      },
    },
  ]
  /**
   *
   * *! Initialize the function to delete multiple Colors
   */
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys)
    setSelectedColorIds(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys: selectedColorIds,
    onChange: onSelectChange,
  }

  const handleBatchDelete = () => {
    if (selectedColorIds.length === 0) {
      message.warning("Vui lòng chọn các màu muốn xoá!")
      return
    }

    setLoading(true)

    Promise.all(selectedColorIds.map((colorId) => removeColor(colorId)))
      .then(() => {
        message.success("Colors successfully deleted.")
        setSelectedColorIds([])
      })
      .catch(() => {
        message.error("Failed to delete colors. Please try again.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={handleBatchDelete}
          loading={loading}
          danger
        >
          Xoá Nhiều Màu
        </Button>
        <Link to={`/admin/color/create`}>
          <Button style={{ margin: "0 0 0 8px" }}>Tạo Màu Mới</Button>
        </Link>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  )
}

export default ListColor
