import React, { useState } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { useStatisticsByDayMutation, useStatisticsByMonthMutation } from '../../Services/Api_Statistic';



const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [totalQuantitySold, setTotalQuantitySold] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [statisticsByDay] = useStatisticsByDayMutation();
  const [statisticsByMonth] = useStatisticsByMonthMutation();
  const [isMonthSelected, setIsMonthSelected] = useState(false);
  const [tableData, setTableData] = useState([]); 
  const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [startMonth, setStartMonth] = useState('');

// const handleStartMonthChange = (event) => {
//   const selectedStartMonth = event.target.value;
//   setStartMonth(selectedStartMonth);
// };

const handleStartDateChange = event => {
  setStartDate(event.target.value);
};

const handleEndDateChange = event => {
  setEndDate(event.target.value);
};

  const handleMonthChange = (date, dateString) => {
    setSelectedDate(date);
    setIsMonthSelected(true);
  };


  const handleSubmit = () => {
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      if (isMonthSelected) {
        const formattedStartMonth = moment(startMonth).startOf('month').format('YYYY-MM-DD');
        const formattedEndMonth = moment(startMonth).endOf('month').format('YYYY-MM-DD');
        const response = await statisticsByMonth({ startDate: formattedStartMonth, endDate: formattedEndMonth });
        handleResponse(response);
      } else {
        const formattedStartDay = moment(startDate).startOf('day').format('YYYY-MM-DD');
        const formattedEndDay = moment(endDate).endOf('day').format('YYYY-MM-DD');
  
        console.log('Start Date:', formattedStartDay);
        console.log('End Date:', formattedEndDay);
  
        const response = await statisticsByDay({ startDate: formattedStartDay, endDate: formattedEndDay });
        handleResponse(response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleResponse = (response) => {
    if (response.data && response.data.success) {
      const {totalQuantity, orders, totalRevenue } = response.data.statistics;

      if (orders.length > 0) {
        const serverData = orders.map(order => {
          return order.products.map(product => ({
            key: product._id,
            totalQuantity: totalQuantity,
            productId: product.productId?._id,
            productName: product.productId?.name,
            quantity: product.quantity,
            color: product.color,
            size: product.size,
            totalRevenue: totalRevenue,
            imgUrl: product.imgUrl && product.imgUrl[0],
          }));
        }).flat();

        setTotalQuantitySold(totalQuantity);
        setTotalRevenue(totalRevenue);
        setTotalItems(serverData.length);
        setTableData(serverData);
      }
    } else {
      console.error('Error fetching data from the server');
    }
  };

  const columns = [
    
    {
      title: 'Tên sản phẩm',
      dataIndex: 'productName',
      key: 'productName',
      align: "center"
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'imgUrl',
      key: 'imgUrl',
      align: "center",
      render: (imgUrl:any) => <img src={imgUrl} alt="Product" style={{ width: '150px',marginLeft:50}} />,
    },
    {
      title: 'Màu sắc',
      dataIndex: 'color',
      key: 'color',
      align: "center",
      render: (color: string) => (
        <div style={{ backgroundColor: color, width: '20px', height: '20px', margin: '0 auto' }}></div>
      ),
    },
    {
      title: 'Kích thước',
      dataIndex: 'size',
      key: 'size',
      align: "center"
    },
    {
      title: 'Số lượng đã bán',
      dataIndex: 'quantity',
      key: 'quantity',
      align: "center"
    }
  ];

  return (
    <div>
      {/* <div className="mb-4">
  <label className="block text-sm font-bold mb-1" htmlFor="startMonth">
    Start Month:
  </label>
  <input
    className="border border-gray-300 p-2 w-full rounded"
    type="month"
    id="startMonth"
    onChange={handleStartMonthChange}
  />
</div> */}

      <div className="mb-4">
  <label className="block text-sm font-bold mb-1" htmlFor="startDate">
    Ngày bắt đầu:
  </label>
  <input
    className="border border-gray-300 p-2 w-full rounded"
    type="date"
    id="startDate"
    onChange={handleStartDateChange}
  />
</div>
<div className="mb-4">
  <label className="block text-sm font-bold mb-1" htmlFor="endDate">
   Ngày kết thúc:
  </label>
  <input
    className="border border-gray-300 p-2 w-full rounded"
    type="date"
    id="endDate"
    onChange={handleEndDateChange}
  />
</div>
<div>
  <button
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
    type="button"
    onClick={handleSubmit}
  >
    Submit
  </button>
</div>
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <div style={{ textAlign: 'right', marginTop: '10px',color:"red",fontWeight:600, fontSize: 16 }}>
          Tổng đã bán: {totalQuantitySold} sản phẩm
        </div>
        <div style={{ textAlign: 'right', marginTop: '10px',color:"red",fontWeight:600, fontSize: 16,marginBottom:10 }}>
          Tổng doanh thu: {totalRevenue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
        </div>
        <Table columns={columns} dataSource={tableData} pagination={false} />
      </div>
    </div>
  );
};

export default Dashboard;
