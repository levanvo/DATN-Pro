import React from 'react';
import { useGetUserOrdersQuery } from '../Services/Api_Order';
import UserMenu from '../Component/UserMenu';

const Bill = () => {
  const { data: orders, isLoading, isError } = useGetUserOrdersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching orders.</div>;
  }

  return (
    <div className='container_u'>
      <UserMenu />
      <div className='user_profile'>
        <div className="user_profile-head">
          <p>Hóa Đơn Của Tôi</p>
          <p>Quản lý thông tin hóa đơn</p>
        </div>
        <div className="bill_list">
          {orders.map((order: any) => (
            <div key={order.id} className="bill_item">
              <h3>Hóa đơn số: {order.id}</h3>
              <p>Ngày đặt hàng: {order.date}</p>
              <p>Tổng giá trị: {order.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bill;