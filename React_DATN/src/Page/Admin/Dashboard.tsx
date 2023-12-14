import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { useStatisticsByDayMutation } from '../../Services/Api_Statistic';
import { IProduct } from '../../Models/interfaces';

const Dashboard = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState([]);
  const [statisticsByDay] = useStatisticsByDayMutation()
  const [totalQuantitySold,setTotalQuantitySold] = useState(0)

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = () => {
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      // Assuming you are not handling month-based statistics in this example
      const formattedStartDay = moment(startDate).startOf('day').format('YYYY-MM-DD');
      const formattedEndDay = moment(endDate).endOf('day').format('YYYY-MM-DD');
  
      const response = await statisticsByDay({ startDate: formattedStartDay, endDate: formattedEndDay });
  
      handleResponse(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleResponse = (response:any) => {
    if (response.data && response.data.success) {
      const { totalQuantity, orders, totalRevenue } = response.data.statistics;
  
      // Tính tổng số lượng của từng sản phẩm dựa trên productId
       const productQuantities: { [key: string]: { name: string; quantity: number } } = {};
      orders.forEach((order:any) => {
        order.products.forEach((product:any) => {
          const productId = product.productId?._id
          const productName = product.productId?.name
          productQuantities[productId] = {
          name: productName,
          quantity: (productQuantities[productId] ? productQuantities[productId].quantity : 0) + product.quantity,
        };
        });
      });
  
      // Chuyển object thành mảng để sử dụng trong biểu đồ
      const newChartData = Object.values(productQuantities).map((product:any) => ({
      name: product.name,
      y: product.quantity,
    }));
  
      setTotalQuantitySold(totalQuantity);
      setChartData(newChartData);
    } else {
      console.error('Error fetching data from the server');
    }
  };
  
  

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Biểu đồ thống kê sản phẩm',
    },
    xAxis: {
      categories: chartData.map((item:any) => item.name),
    },
    yAxis: {
      title: {
        text: 'Số lượng sản phẩm',
      },
    },
    series: [
      {
        name: 'Sản phẩm',
        data: chartData,
        colorByPoint: true,
      },
    ],
  };

  return (
    <div>
      <div>
        <label htmlFor="startDate">Ngày bắt đầu:</label>
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label htmlFor="endDate">Ngày kết thúc:</label>
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div>
        <div>Tổng số lượng sản phẩm đã bán: {totalQuantitySold} sản phẩm</div>
      </div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Dashboard;
