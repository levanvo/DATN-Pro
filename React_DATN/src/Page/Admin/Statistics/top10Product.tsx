import { useState,ChangeEvent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import {message} from "antd"
import { useStatisticsByDayMutation } from '../../../Services/Api_Statistic';

const Top10Product = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState([]);
  const [statisticsByDay] = useStatisticsByDayMutation()
  const [totalQuantitySold,setTotalQuantitySold] = useState(0)
  const sortChartData = (data) => {
    return data.sort((a, b) => b.y - a.y);
  };
  
  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = () => {
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      const formattedStartDay = moment(startDate).startOf('day').format('YYYY-MM-DD');
      const formattedEndDay = moment(endDate).endOf('day').format('YYYY-MM-DD');
      // Kiểm tra nếu ngày kết thúc nhỏ hơn ngày bắt đầu
      if (moment(formattedEndDay).isBefore(formattedStartDay)) {
        message.error("Không xác định được ngày")
        return;
      }
      const response = await statisticsByDay({ startDate: formattedStartDay, endDate: formattedEndDay });
  
      handleResponse(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleResponse = (response: any) => {
    if (response.data && response.data.success) {
      const { totalQuantity, orders } = response.data.statistics;
  
      // Tạo danh sách chứa tất cả sản phẩm với số lượng là 0
      const allProducts: { [key: string]: { name: string; quantity: number } } = {};
      orders.forEach((order: any) => {
        order.products.forEach((product: any) => {
          const productId = product.productId?._id;
          const productName = product.productId?.name;
          allProducts[productId] = {
            name: productName,
            quantity: 0,
          };
        });
      });
  
      // Cập nhật số lượng cho các sản phẩm đã bán
      orders.forEach((order: any) => {
        order.products.forEach((product: any) => {
          const productId = product.productId?._id;
          allProducts[productId].quantity += product.quantity;
        });
      });
  
      // Chuyển danh sách thành mảng để sử dụng trong biểu đồ
      const newChartData = Object.values(allProducts).map((product: any) => ({
        name: product.name,
        y: product.quantity,
      }));
  
      // Sắp xếp mảng theo số lượng giảm dần và lấy 10 sản phẩm đầu tiên
      const sortedChartData = sortChartData(newChartData).slice(0, 10);
  
      setTotalQuantitySold(totalQuantity);
      setChartData(sortedChartData);
    } else {
      console.error("Error fetching data from the server");
    }
  };
  
  
  
  
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Top 10 Sản Phẩm Bán Chạy",
    },
    xAxis: {
      categories: chartData.map((item: any) => item.name),
    },
    yAxis: {
      title: {
        text: "Số lượng đã bán",
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y}", // Hiển thị giá trị của cột
          style: {
            color: "black", // Màu sắc của chữ
          },
          connectorColor: "black", // Màu của đường nối từ chữ đến cột
        },
      },
    },
    series: [
      {
        name: "Sản phẩm",
        data: chartData,
        colorByPoint: true,
      },
    ],
  };
  

  return (
    <div>
      <div className='statistics ml-9'>
          <div>
            <label htmlFor="startDate">Ngày bắt đầu:</label>
            <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div>
            <label htmlFor="endDate">Ngày kết thúc:</label>
            <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
          </div>
      </div>
          <div className='statistics-btn ml-9'>
            <button type="button" onClick={handleSubmit}>
              Tìm kiếm
            </button>
          </div>
      
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div className='ml-9'>
        <div style={{fontSize:16,color: "black",fontWeight: 600}}>Tổng số lượng sản phẩm đã bán: {totalQuantitySold} sản phẩm</div>
      </div>
    </div>
  );
};

export default Top10Product;
