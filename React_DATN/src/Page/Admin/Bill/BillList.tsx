import React, { useState } from 'react';
import { Divider, Table } from 'antd';
import { useGetAllOrdersQuery } from '../../../Services/Api_Order';
import { IOrder } from '../../../Models/interfaces';
import Loading from '../../../Component/Loading';

const BillList = () => {
  const { data, isLoading, error } = useGetAllOrdersQuery(undefined);
  const [selectedBill, setSelectedBill] = useState<IOrder | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const dataSource = data?.map((order: IOrder) => ({
    key: order._id,
    name: order.name,
    address: order.address,
    createdAt: order.createdAt,
    note: order.note,
    phone: order.phone,
    status: order.status,
    product: order.products.map((product) => product.productId.name).join(', '),
  }));

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      render: (record: any) =>
        `${record.address.city}, ${record.address.district}, ${record.address.location}`,
      key: 'address',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: any) => getStatusText(status),
    },
  ];

  const handleRowClick = (record: IOrder) => {
    setSelectedBill(record);
    setShowDetails(true);
  };

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

  return (
    <div>
      <Divider />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={dataSource}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
          />
          {showDetails && selectedBill && (
            <div>
              <h2>Selected Bill Details:</h2>
              <p>Name: {selectedBill.name}</p>
              <p>
                Address: {`${selectedBill.address.city}, ${selectedBill.address.district}, ${selectedBill.address.location}`}
              </p>
              <p>Created At: {selectedBill.createdAt}</p>
              <p>Note: {selectedBill.note}</p>
              <p>Phone: {selectedBill.phone}</p>
              <p>Status: {getStatusText(selectedBill.status)}</p>
              <h3>Products:</h3>
              <ul>
                {selectedBill.products.map((product) => (
                  <li key={product.productId?.name}>
                    <div>
                      <img
                        // src={product.productId?.image}
                        alt={product.productId?.name}
                        style={{ width: '50px', height: '50px' }}
                      />
                    </div>
                    <div>
                      <p>Name: {product.productId?.name}</p>
                      <p>Quantity: {product.quantity}</p>
                      <p>Price: {product.productId?.price}</p>
                      {/* <p>Color: {product.productId?.color}</p> */}
                      {/* <p>Size: {product.productId?.size}</p> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BillList;