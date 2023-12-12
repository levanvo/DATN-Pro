import React, { useState } from 'react';
import { Calendar, Button, Table, Pagination } from 'antd';
import moment from 'moment';
import { useCurrentDayStatisticsMutation } from '../../Services/Api_Statistic';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [totalQuantitySold, setTotalQuantitySold] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0); // Thêm state totalItems

  const [CurrentDayStatistics] = useCurrentDayStatisticsMutation();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSearch = async () => {
    try {
      if (selectedDate) {
        const response = await CurrentDayStatistics({ date: selectedDate.format('YYYY-MM-DD') });

        if (response.data && response.data.success) {
          const { startDate, totalQuantity, orders } = response.data.StatisticsByDay;

          if (orders.length > 0) {
            const serverData = orders.map(order => {
              return order.products.map(product => ({
                key: product._id,
                date: moment(startDate).format('DD-MM-YYYY'),
                totalQuantity: totalQuantity,
                productId: product.productId?._id,
                productName: product.productId?.name,
                quantity: product.quantity,
                color: product.color,
                size: product.size,
                imgUrl: product.imgUrl && product.imgUrl[0], // Assuming imgUrl is an array
              }));
            }).flat();

            setTotalQuantitySold(totalQuantity);
            setTotalItems(serverData.length); // Set totalItems
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const paginatedData = serverData.slice(startIndex, endIndex);

            setTableData(paginatedData);
          } else {
            setTableData([]);
            setTotalQuantitySold(0);
            setTotalItems(0); // Reset totalItems
          }
        } else {
          console.error('Error fetching data from the server');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    border: '1px solid #f0f0f0',
    borderRadius: '6px',
  };

  const columns = [
    {
      title: 'Ngày',
      dataIndex: 'date',
      key: 'date',
      align: "center"
    },
    
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
      render: (imgUrl:any) => <img src={imgUrl} alt="Product" style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      align: "center",
      render: (color: string) => (
        <div style={{ backgroundColor: color, width: '20px', height: '20px', margin: '0 auto' }}></div>
      ),
    },
    {
      title: 'Size',
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
    <div style={{ display: 'flex' }}>
      <div style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          onSelect={handleDateSelect}
        />
        <Button type="primary" onClick={handleSearch} style={{ margin: '10px', color: "white", background: "red" }}>
          Tìm kiếm
        </Button>
      </div>
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <h4>Kết Quả Thống Kê:</h4>
        <Table columns={columns} dataSource={tableData} pagination={false} />
        <Pagination
          current={currentPage}
          total={totalItems}  // Thay đổi total thành totalItems
          pageSize={pageSize}
          onChange={handlePageChange}
          style={{ marginTop: '10px', textAlign: 'right' }}
        />
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          Tổng đã bán: {totalQuantitySold}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
