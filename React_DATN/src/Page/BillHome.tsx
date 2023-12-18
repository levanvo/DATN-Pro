import React from 'react';
import { useGetAllOrdersQuery, useGetUserOrdersQuery, useUpdateOrderMutation } from '../Services/Api_Order';
import { Divider, Table, message } from 'antd';
import Loading from '../Component/Loading';
import { Link } from 'react-router-dom';
import { IOrder } from '../Models/interfaces';
import '../../css/user.css'
import UserMenu from '../Component/UserMenu';
import moment from 'moment';

const Bill = () => {
  const { data, isLoading, error } = useGetUserOrdersQuery(undefined);
  const [updateOrder] = useUpdateOrderMutation();

  const dataSource = data?.map((order: IOrder) => ({
    key: order._id,
    code_order: order?.code_order,
    userId: order?.userId?.username || "Khách hàng",
    createdAt: moment(order?.createdAt).format('DD-MM-YYYY | HH:mm'),
    status: order?.status,
  }));


  const handleConfirmOrder = (orderId: string) => {
    updateOrder({ _id: orderId, status: "4" })
      .unwrap()
      .then(() => {
        console.log("Đơn hàng đã được xác nhận thành công.");
        message.success("Đơn hàng đã được xác nhận thành công.");
      })
      .catch((error) => {
        console.error("Lỗi khi xác nhận đơn hàng:", error);
      });
  };

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'code_order',
      key: 'code_order',
    },

    {
      title: 'Tên khách hàng',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Ngày tạo đơn hàng',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: any) => (
        <span style={{ color: getStatusColor(status) }}>
          {getStatusText(status)}
        </span>
      ),
    },
    {
      title: 'Hành động',
      render: (record: any) => (
        <>
          <button
            style={{ width: 180, marginRight: 20, backgroundColor: record.status === '4' || record.status === '0' || record.status === '1' || record.status === '2' ? 'gray' : '#3F8CFF', color: 'white', borderRadius: 10 }}
            onClick={() => handleConfirmOrder(record.key)} disabled={record.status === '0' || record.status === '1' || record.status === '2' || record.status === '4'}>
            Xác nhận đã nhận hàng
          </button>
          <Link style={{ border: '1px solid white', padding: 10, borderRadius: 10, backgroundColor: '#3F8CFF', color: 'white' }} to={`detail/${record.key}`}>Chi tiết</Link>
        </>
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
      case '3':
        return 'Đang giao hàng';
      case '4':
        return 'Đã nhận hàng';
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
      case '3':
        return 'brown';
      case '4':
        return 'blue';
      default:
        return '';
    }
  };

  return (
    <div className='container_u'>
      <UserMenu />
      {isLoading ? <Loading /> : <div className='user_profile'>
        <div className="user_profile-head">
          <p>Đơn hàng Của Tôi</p>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={dataSource}
          />
        </div>
      </div>}

    </div>
  );
};

export default Bill;