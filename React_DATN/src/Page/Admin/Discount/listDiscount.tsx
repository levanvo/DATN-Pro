import React, { useState, useEffect } from "react"
import { Button, Table, Popconfirm, message, Input } from "antd"

import { Link } from "react-router-dom"
import { IDiscount } from "../../../Models/interfaces"
import Loading from "../../../Component/Loading"
import {
  useGetDiscountsQuery,
  useRemoveDiscountMutation,
} from "../../../Services/Api_Discount"
import moment from "moment-timezone"

const ListDiscount = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedDiscount, setselectedDiscount] = useState<React.Key[]>([])
  const { data, isLoading, error } = useGetDiscountsQuery()
  const [removeDiscount] = useRemoveDiscountMutation()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const removeExpiredOrDepletedDiscounts = async () => {
      try {
        if (data) {
          const discountsToRemove = data.filter((discount: IDiscount) => {
            return (
              discount.quantity === 0 ||
              moment(discount.expiresAt).isBefore(moment())
            )
          })

          await Promise.all(
            discountsToRemove.map((discount) => removeDiscount(discount._id))
          )
          message.success(
            "Đã xóa thành công các đợt giảm giá đã hết hạn hoặc hết hàng."
          )
        }
      } catch (error) {
        message.error(
          "Xóa đợt giảm giá đã hết hạn hoặc hết hàng thất bại. Vui lòng thử lại."
        )
      }
    }

    const intervalId = setInterval(() => {
      removeExpiredOrDepletedDiscounts()
    }, 5 * 60 * 1000) // Every 5 minutes

    return () => clearInterval(intervalId)
  }, [data, removeDiscount])

  if (!data || !Array.isArray(data)) {
    return (
      <div>
        No data available.
        <Link to={`/admin/discount/create`}>
          <Button
            style={{
              margin: "0 0 0 8px",
              background: "#1677ff",
              color: "white",
            }}
          >
            Tạo Mã
          </Button>
        </Link>
      </div>
    )
  }

  const dataSource = data?.map((item: IDiscount, index) => ({
    index: index + 1,
    key: item._id,
    code: item.code,
    percentage: item.percentage,
    quantity: item.quantity,
    expiresAt: item.expiresAt,
  }))

  const handleSearch = (value: string) => {
    // Update the search query state when the user types in the search bar
    setSearchQuery(value)
  }

  const filteredData = dataSource.filter((item) =>
    item.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setselectedDiscount(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys: selectedDiscount,
    onChange: onSelectChange,
  }

  const handleBatchDelete = () => {
    if (selectedDiscount.length === 0) {
      message.warning("Vui lòng chọn các mã giảm giá muốn xoá!")
      return
    }

    setLoading(true)

    Promise.all(selectedDiscount.map((discount) => removeDiscount(discount)))
      .then(() => {
        message.success("Xoá các mã giảm giá thành công!")
        setselectedDiscount([])
      })
      .catch(() => {
        message.error("Xoá thất bại, Vui lòng thử lại.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const columns = [
    {
      title: "#",
      dataIndex: "index",
    },
    {
      title: "Mã Giảm Giá",
      dataIndex: "code",
      render: (code: string) => <p style={{}}>{code}</p>,
    },
    {
      title: "Phần trăm giảm giá",
      dataIndex: "percentage",
      render: (percentage: number) => <p style={{}}>{percentage}%</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      render: (quantity: number) => <p style={{}}>{quantity}</p>,
    },
    {
      title: "Thời hạn sử dụng",
      dataIndex: "expiresAt",
      render: (expiresAt: string) => (
        <p style={{}}>
          {moment(expiresAt)
            .tz("Asia/Ho_Chi_Minh")
            .format("YYYY-MM-DD HH:mm A")}
        </p>
      ),
    },
    {
      title: "Hành Động",
      key: "action",
      render: (discount: any) => {
        return (
          <>
            <Popconfirm
              title="Xoá màu"
              description="Bạn có chắc muốn xoá mã giảm giá này không?"
              onConfirm={() => {
                removeDiscount(discount.key)
                message.error("Remove success")
              }}
              okText={<span style={{ color: "black" }}>Yes</span>}
              cancelText="No"
            >
              <Button danger>Xoá</Button>
            </Popconfirm>
            <Link to={`/admin/discount/${discount.key}/update`}>
              <Button type="dashed" style={{ margin: "0 0 0 8px" }}>
                Cập Nhật
              </Button>
            </Link>
          </>
        )
      },
    },
  ]

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Error...</div>
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
          Xoá Nhiều Mã
        </Button>
        <Link to={`/admin/discount/create`}>
          <Button
            style={{
              margin: "0 0 0 8px",
              background: "#1677ff",
              color: "white",
            }}
          >
            Tạo Mã
          </Button>
        </Link>
        <Input
          placeholder="Search by discount code"
          onChange={(e) => handleSearch(e.target.value)} // Use the onChange event to trigger real-time filtering
          style={{ width: 280, marginLeft: 8 }}
        />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredData}
        tableLayout="fixed"
      />
    </div>
  )
}

export default ListDiscount
