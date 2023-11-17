import React from 'react';
import { Table } from 'antd';
import { useGetAllOrderQuery } from '../../../Services/Api_Order';

const BillList = () => {
  const { data: orders, isLoading, isError } = useGetAllOrderQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching orders.</div>;
  }

  const columns = [
    {
      title: 'Order ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'User ID',
      dataIndex: 'userID',
      key: 'userID',
    },
    {
      title: 'User Name',
      dataIndex: 'nameUser',
      key: 'nameUser',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Payment Method',
      dataIndex: 'methodPayment',
      key: 'methodPayment',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (address: any) => (
        <div>
          <p>City: {address.city}</p>
          <p>District: {address.district}</p>
          <p>Location: {address.location}</p>   
        </div>
      ),
    },
    {
      title: 'Code ID',
      dataIndex: 'codeID',
      key: 'codeID',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
  ];

  return (
    <div>
      <h1>All Orders</h1>
      <Table dataSource={orders} columns={columns} />
    </div>
  );
};

export default BillList;