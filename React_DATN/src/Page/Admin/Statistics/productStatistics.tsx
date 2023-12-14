import { useState,ChangeEvent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import {message} from "antd"
import { useStatisticsByDayMutation } from '../../../Services/Api_Statistic';

const ProductStatistics = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [chartData, setChartData] = useState([]);
  const [statisticsByDay] = useStatisticsByDayMutation()
  const [totalQuantitySold,setTotalQuantitySold] = useState(0)

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
  

  const handleResponse = (response:any) => {
    if (response.data && response.data.success) {
      const { totalQuantity, orders } = response.data.statistics;
      
      if(Array.isArray(orders) && orders.length>0){
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
      }else{
        console.log("Không có dữ liệu");
        setTotalQuantitySold(0);
        setChartData([]);
      }
  
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

export default ProductStatistics;
