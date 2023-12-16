import React, { useState, useEffect,ChangeEvent } from 'react';
import moment from 'moment';
import { useStatisticsByDayMutation } from '../../Services/Api_Statistic';
import Highcharts from 'highcharts';
import {message,Table} from "antd"
import HighchartsReact from 'highcharts-react-official';
import { MdFreeCancellation } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa";

interface HighchartsChartProps {
    chartData: {
        categories: string[];
        series: { name: string; data: number[] }[];
    };
}

const Dashboard = () => {
    const [totalQuantitySold, setTotalQuantitySold] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [statisticsByDay] = useStatisticsByDayMutation();
    const [tableData, setTableData] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalCanceledOrders, setTotalCanceledOrders] = useState(0);
    const [chartData, setChartData] = useState({
        categories: [],
        series: [],
    });


//Thống kê cột của HighChatrs
    const HighchartsChart: React.FC<HighchartsChartProps> = ({ chartData }) => {
        const options: Highcharts.Options = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Tổng doanh thu',
                // align: 'left',
            },
            xAxis: {
                categories: chartData.categories,
                accessibility: {
                    description: 'Countries',
                },
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Doanh Thu (VND)',
                },
            },
            tooltip: {
                valueSuffix: ' VND',
            },
            plotOptions: {
                column: {
                    pointPadding: 0.3,
                    borderWidth: 0,
                },
            },
            series: chartData.series,
        };

        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        );
    };
//---------------------------------------------//

    const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedEndDate = event.target.value;
        if (selectedEndDate > new Date().toISOString().split('T')[0]) {
          // If it is, set the end date to the current date
          setEndDate(new Date().toISOString().split('T')[0]);
          // Optionally, you can display a message or perform any other logic here
          console.log('End Date cannot be greater than the current date. Setting it to the current date.');
      } else {
          // Otherwise, set the end date to the selected date
          setEndDate(selectedEndDate);
      }
    };


    const handleSearch = async () => {
        try {
   
                const formattedStartDay = moment(startDate).startOf('day').format('YYYY-MM-DD');
                const formattedEndDay = moment(endDate).endOf('day').format('YYYY-MM-DD');

                if (moment(formattedEndDay).isBefore(formattedStartDay)) {
                    message.error("Không xác định được ngày")
                    return;
                  }

                console.log('Start Date:', formattedStartDay);
                console.log('End Date:', formattedEndDay);

                const response = await statisticsByDay({
                    startDate: formattedStartDay,
                    endDate: formattedEndDay,
                });

                handleResponse(response);
 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = () => {
        handleSearch();
    };

    const handleResponse = (response: any) => {
      if (response.data && response.data.success) {
          const { totalQuantity, orders, totalRevenue } = response.data.statistics;
  
          const dailyTotalRevenue: { [key: string]: number } = {};
          const dailyTotalPrice: { [key: string]: number } = {}; // New object to store daily total price
          const dailyTotalOrders: { [key: string]: number } = {};


          const selectedDates = getSelectedDates(startDate, endDate);
          setTableData(orders);
  
          // Lặp qua các ngày đã chọn
          selectedDates.forEach((selectedDate) => {
              const orderDate = moment(selectedDate).format('DD/MM/YYYY');
  
              // Kiểm tra xem có đơn hàng cho ngày được chọn không
              const matchingOrders = orders.filter((order: any) => moment(order.createdAt).format('DD/MM/YYYY') === orderDate);
              const canceledOrders = orders.filter((order: any) => order.status === '2');

              if (matchingOrders.length > 0) {
                  // Nếu có đơn hàng, tính tổng doanh thu và tổng giá trị sản phẩm
                  dailyTotalRevenue[orderDate] = matchingOrders.reduce((acc: number, order: any) => {
                    return acc + order.products.reduce((productAcc: number, product: any) => productAcc + product.price, 0);
                }, 0);

                dailyTotalPrice[orderDate] = matchingOrders.reduce((acc: number, order: any) => {
                    return acc + order.products.reduce((productAcc: number, product: any) => productAcc + product.price, 0);
                }, 0);

                dailyTotalOrders[orderDate] = matchingOrders.length;
              } else {
                   // Nếu không có đơn hàng, giá trị cột bằng 0
                dailyTotalOrders[orderDate] = 0;
                dailyTotalRevenue[orderDate] = 0;
                dailyTotalPrice[orderDate] = 0;
              }
              // Calculate the total number of canceled orders
              const totalCanceledOrders = canceledOrders.length;
              setTotalCanceledOrders(totalCanceledOrders);
          });
  
          const categories: string[] = Object.keys(dailyTotalRevenue);
          const series = [
              { name: 'Doanh thu', data: Object.values(dailyTotalRevenue) },
          ];
  
          setChartData({ categories, series });
          setTotalQuantitySold(totalQuantity);
          setTotalRevenue(totalRevenue);
          setTotalItems(orders.length); // Số lượng đơn hàng, không phải là serverData.length
          const aggregatedTableData = Object.keys(dailyTotalPrice).map((orderDate) => ({
            time: orderDate,
            numberOrders: dailyTotalOrders[orderDate],
            totalSales: dailyTotalPrice[orderDate].toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
        }));

        setTableData(aggregatedTableData);
      } else {
          console.error('Không bán được đơn này trong ngày');
      }
  };
  
      
      // Hàm để lấy danh sách các ngày giữa startDate và endDate
      const getSelectedDates = (startDate:any, endDate:any) => {
        const start = moment(startDate);
        const end = moment(endDate);
        const selectedDates = [];
      
        while (start <= end) {
          selectedDates.push(start.format('YYYY-MM-DD'));
          start.add(1, 'days');
        }
      
        return selectedDates;
      };
      
      const columns = [
        {
          title: 'Ngày',
          dataIndex: 'time',
          key: 'time',
          align: 'center'
        },
        {
          title: 'Số lượng đơn hàng',
          dataIndex: 'numberOrders',
          key: 'numberOrders',
          align: 'center'
        },
        {
          title: 'Doanh số',
          dataIndex: 'totalSales',
          key: 'totalSales',
          align: 'center'
        },
      ];

      const handleEndDateBlur = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedDate = event.target.value;
        const currentDate = new Date().toISOString().split('T')[0];
    
        // Check if the selected end date is greater than the current date
        if (selectedDate > currentDate) {
            // If it is, set the end date to the current date
            setEndDate(currentDate);
            // Optionally, you can display a message or perform any other logic here
            console.log('End Date cannot be greater than the current date. Setting it to the current date.');
        } else {
            // If not, update the end date with the selected date
            setEndDate(selectedDate);
        }
    };
    
      

    return (
      <div>
      <div className='statistics ml-9'>
      <div>
    <label htmlFor="startDate">Ngày bắt đầu:</label>
    <input type="date" id="startDate" max={endDate ? endDate : new Date().toISOString().split('T')[0]} onChange={handleStartDateChange} />
</div>
<div>
    <label htmlFor="endDate">Ngày kết thúc:</label>
    <input
        type="date"
        id="endDate"
        max={new Date().toISOString().split('T')[0]}
        onChange={handleEndDateChange}
        onBlur={handleEndDateBlur}
    />
</div>

</div>
    <div className='statistics-btn ml-9'>
      <button type="button" onClick={handleSubmit}>
        Tìm kiếm
      </button>
    </div>


    <div className='satatic-box flex ml-8 mb-10'>
       <div className='box flex'>
          <div className='flex items-center justify-center ml-3'>
          <LuCircleDollarSign className='text-green-500 text-3xl '/>
          </div>
          <div className='flex items-center justify-center ml-3'>
            <div>
                <span style={{fontSize:15,color: "green", fontWeight: 450}}>{totalRevenue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                <br />
                <span style={{color: "green", fontWeight: 450}}>Tổng doanh thu</span>
            </div>
          </div>
       </div>
       <div className='box1 flex'>
          <div className='flex items-center justify-center ml-3'>
          <FaCartPlus  className='text-orange-400 text-3xl'/>
          </div>
          <div className='flex items-center justify-center ml-3'>
            <div>
                <span style={{fontSize:15,color: "orange", fontWeight: 450}}>{totalItems}</span>
                <br />
                <span style={{color: "orange", fontWeight: 450}}>Số lượng đơn bán ra</span>
            </div>
          </div>
       </div>
       <div className='box2 flex'>
          <div className='flex items-center justify-center ml-3'>
          <MdFreeCancellation  className='text-red-500 text-3xl'/>
          </div>
          <div className='flex items-center justify-center ml-3'>
            <div>
                <span style={{fontSize:15,color: "red", fontWeight: 450}}>{totalCanceledOrders}</span>
                <br />
                <span style={{color: "red", fontWeight: 450}}>Số lượng đơn đã hủy</span>
            </div>
          </div>
       </div>
    </div>
    <HighchartsChart chartData={chartData} />
      
    <Table columns={columns} dataSource={tableData} />;
      
  </div>
    );
};

export default Dashboard;
