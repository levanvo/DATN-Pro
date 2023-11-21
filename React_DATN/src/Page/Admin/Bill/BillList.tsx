import React, { useState } from 'react';
import { Divider, Select, Table } from 'antd';
import { useGetAllOrdersQuery } from '../../../Services/Api_Order';
import { IOrder } from '../../../Models/interfaces';
import Loading from '../../../Component/Loading';
import { Link } from 'react-router-dom';
import { Option } from 'antd/es/mentions';

const BillList = () => {
  const { data, isLoading, error } = useGetAllOrdersQuery(undefined);

  const [filterStatus, setFilterStatus] = useState('');

  const dataSource = data?.map((order: IOrder) => ({
    key: order._id,
    code_order: order?.code_order,
    userId: order?.userId?.username || "",
    createdAt: order?.createdAt,
    status: order?.status,
  }));

  const columns = [
    {
      title: 'Code_order',
      dataIndex: 'code_order',
      key: 'code_order',
    },
    // {
    //   title: 'Address',
    //   render: (record: any) =>
    //     `${record.address.city}, ${record.address.district}, ${record.address.location}`,
    //   key: 'address',
    // },
    {
      title: 'Create by',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: any) => (
        <span style={{ color: getStatusColor(status) }}>
          {getStatusText(status)}
        </span>
      ),
    },
    {
      title: 'Actions',
      render: (record: any) => (
        <Link to={`/admin/bill/detail/${record.key}`}>Chi tiết</Link>
      ),
      key: 'actions',
    },
  ];

  const getStatusText = (status: any) => {
    switch (status) {
      case '0':
        return 'Đang chờ xác nhận';
      case '1':
        return 'Đã xác nhận';
      case '2':
        return 'Đã hủy';
      default:
        return '';
    }
  };
  const getStatusColor = (status: any) => {
    switch (status) {
      case '0':
        return 'orange';
      case '1':
        return 'green';
      case '2':
        return 'red';
      default:
        return '';
    }
  };

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