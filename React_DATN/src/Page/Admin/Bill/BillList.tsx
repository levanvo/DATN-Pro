import React, { useState } from 'react';
import { Divider, Select, Table, message } from 'antd';
import { useGetAllOrdersQuery, useUpdateOrderMutation } from '../../../Services/Api_Order';
import { IOrder } from '../../../Models/interfaces';
import Loading from '../../../Component/Loading';
import { Link } from 'react-router-dom';
import { Option } from 'antd/es/mentions';
import moment from 'moment';

const BillList = () => {
  const { data, isLoading, error } = useGetAllOrdersQuery(undefined);

  const [filterStatus, setFilterStatus] = useState('');

  const dataSource = data?.map((order: IOrder) => ({
    key: order._id,
    code_order: order?.code_order,
    userId: order?.userId?.username || "Khách hàng",
    createdAt: moment(order?.createdAt).format('DD-MM-YYYY | HH:mm'),
    status: order?.status,
  }));

  const [updateOrder] = useUpdateOrderMutation();

  const handleStatusChange = (value: string, orderId: string) => {
    updateOrder({ _id: orderId, status: value }).unwrap().then(() => {
      console.log("Trạng thái đã được cập nhật thành công.");
      message.success("Trạng thái đã được cập nhật thành công.");
    }).catch((error) => {
      console.error("Lỗi khi cập nhật trạng thái:", error);
    });
  };

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'code_order',
      key: 'code_order',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Ngày đặt hàng',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: any, record: IOrder) => (
        <Select
          value={status}
          onChange={(value) => handleStatusChange(value, record.key)}
          style={{ width: 150 }}
          disabled={status === "4"}
        >
          <Option value="0">Đang chờ xác nhận</Option>
          <Option value="1">Đã xác nhận</Option>
          <Option value="2">Đã hủy</Option>
          <Option value="3">Đang giao hàng</Option>
          <Option disabled value="4">Đã nhận hàng</Option>
        </Select>
      ),
    },
    {
      title: 'Hành động',
      render: (record: any) => (
        <Link to={`/admin/bill/detail/${record.key}`}>Chi tiết</Link>
      ),
      key: 'actions',
    },
  ];

  const handleStatusFilter = (value: string) => {
    setFilterStatus(value);
  };

  const filteredData = filterStatus ? dataSource?.filter((order: IOrder) => order.status === filterStatus) : dataSource;

  return (
    <div>
      <Divider />

      <div style={{ marginBottom: '16px' }}>
        <span style={{ marginRight: '8px' }}>Lọc theo trạng thái:</span>
        <Select
          value={filterStatus}
          onChange={handleStatusFilter}
          style={{ width: 150 }}
        >
          <Option value="">Tất cả</Option>
          <Option value="0">Đang chờ xác nhận</Option>
          <Option value="1">Đã xác nhận</Option>
          <Option value="2">Đã hủy</Option>
          <Option value="3">Đang giao hàng</Option>
          <Option value="4">Đã nhận hàng</Option>
        </Select>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Table columns={columns} dataSource={filteredData} />
        </>
      )}
    </div>
  );
};

export default BillList;