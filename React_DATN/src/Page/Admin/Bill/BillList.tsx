import React, { useState } from 'react';
import { Divider, Select, Table, message } from 'antd';
import { useGetAllOrdersQuery, useUpdateOrderMutation } from '../../../Services/Api_Order';
import { IOrder } from '../../../Models/interfaces';
import Loading from '../../../Component/Loading';
import { Link } from 'react-router-dom';
import { Option } from 'antd/es/mentions';
import moment from 'moment';
import Input from 'antd/es/input/Input';

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

  const [filterCode, setFilterCode] = useState('');

  const [searchResultMessage, setSearchResultMessage] = useState('');

  const handleCodeFilter = (e) => {
    const searchValue = e.target?.value;
    setFilterCode(searchValue);
  
    // Kiểm tra xem có đơn hàng phù hợp với tìm kiếm hay không
    const hasSearchResult = dataSource?.some((order: IOrder) =>
      order.code_order.includes(searchValue)
    );
  
    if (!hasSearchResult) {
      setSearchResultMessage('Đơn hàng bạn đang tìm không có');
    } else {
      setSearchResultMessage('');
    }
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
        >
          <Option value="0">Đang chờ xác nhận</Option>
          <Option value="1">Đã xác nhận</Option>
          <Option value="2">Đã hủy</Option>
          <Option value="3">Đang giao hàng</Option>
          <Option value="4">Đã nhận hàng</Option>
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

  const filteredData = dataSource?.filter((order: IOrder) => {
    const matchStatus = !filterStatus || order.status === filterStatus;
    const matchCode = !filterCode || order.code_order.includes(filterCode);
    return matchStatus && matchCode;
  });

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
        <span style={{ marginRight: '8px', marginLeft: 20 }}>Tìm theo mã đơn hàng:</span>
        <Input
          value={filterCode}
          onChange={handleCodeFilter}
          style={{ width: 150 }}
        />
      </div>
      {searchResultMessage && <p style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>{searchResultMessage}</p>}

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