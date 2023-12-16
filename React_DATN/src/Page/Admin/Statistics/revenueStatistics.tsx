import React, { useState, useEffect, ChangeEvent, useRef, useLayoutEffect } from 'react';
import moment from 'moment';
import { useStatisticsByDayMutation } from '../../../Services/Api_Statistic';
import Highcharts from 'highcharts';
import { message } from 'antd';
import HighchartsReact from 'highcharts-react-official';

interface HighchartsChartProps {
  chartData: {
    categories: string[];
    series: { name: string; data: number[] }[];
  };
}

const RevenueStatistics = () => {
  const searchButtonRef = useRef<HTMLButtonElement | null>(null); //setup để khi vào trang sẽ tự động submit 1 lần
  const [totalQuantitySold, setTotalQuantitySold] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [statisticsByDay] = useStatisticsByDayMutation();
  const [tableData, setTableData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [autoFetch7Days, setAutoFetch7Days] = useState(true);
  const [chartData, setChartData] = useState({
    categories: [],
    series: [],
  });

  useEffect(() => {
    // setup 5ms sẽ tự động bấm submit khi mới vào trang
    setTimeout(() => {
      if (searchButtonRef.current) {
        searchButtonRef.current.click();
      }
    }, 5);
  }, []);
  
  

  useEffect(() => {
    const fetchLast7Days = async () => {
      const currentDate = moment().endOf('day');
      const sevenDaysAgo = currentDate.clone().subtract(6, 'days').startOf('day');
      setStartDate(sevenDaysAgo.format('YYYY-MM-DD'));
      setEndDate(currentDate.format('YYYY-MM-DD'));
      // Thực hiện tìm kiếm khi vào trang
      await handleSubmit();
    };
  
    if (autoFetch7Days) {
      fetchLast7Days();
    }
  }, [autoFetch7Days]);
  




  const HighchartsChart: React.FC<HighchartsChartProps> = ({ chartData }) => {
    const options: Highcharts.Options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Thống kê doanh thu sản phẩm',
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

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const formattedStartDay = moment(startDate).startOf('day').format('YYYY-MM-DD');
      const formattedEndDay = moment(endDate).endOf('day').format('YYYY-MM-DD');

      if (moment(formattedEndDay).isBefore(formattedStartDay)) {
        message.error('Không xác định được ngày');
        return;
      }

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

      const selectedDates = getSelectedDates(startDate, endDate);

      // Lặp qua các ngày đã chọn
      selectedDates.forEach((selectedDate) => {
        const orderDate = moment(selectedDate).format('DD/MM/YYYY');

        // Kiểm tra xem có đơn hàng cho ngày được chọn không
        const matchingOrders = orders.filter((order: any) => {
          const orderDateFormatted = moment(order.createdAt).format('DD/MM/YYYY');
          return orderDateFormatted === orderDate;
        });

        if (matchingOrders.length > 0) {
          // Nếu có đơn hàng, tính tổng doanh thu
          dailyTotalRevenue[orderDate] = matchingOrders.reduce(
            (acc: number, order: any) => acc + order.totalPrice,
            0
          );
        } else {
          // Nếu không có đơn hàng, giá trị cột bằng 0
          dailyTotalRevenue[orderDate] = 0;
        }
      });

      const categories: string[] = Object.keys(dailyTotalRevenue);
      const series = [{ name: 'Doanh thu', data: Object.values(dailyTotalRevenue) }];

      setChartData({ categories, series });
      setTotalQuantitySold(totalQuantity);
      setTotalRevenue(totalRevenue);
      setTotalItems(orders.length);
      setTableData(orders);
    } else {
      console.error('Không bán được đơn này trong ngày');
    }
  };


  const getSelectedDates = (startDate: any, endDate: any) => {
    const start = moment(startDate);
    const end = moment(endDate);
    const selectedDates = [];

    while (start <= end) {
      selectedDates.push(start.format('YYYY-MM-DD'));
      start.add(1, 'days');
    }

    return selectedDates;
  };

  return (
    <div>
      <div className='statistics ml-9'>
        <div>
          <label htmlFor='startDate'>Ngày bắt đầu:</label>
          <input type='date' id='startDate' onChange={handleStartDateChange} />
        </div>
        <div>
          <label htmlFor='endDate'>Ngày kết thúc:</label>
          <input type='date' id='endDate' onChange={handleEndDateChange} />
        </div>
      </div>
      <div className='statistics-btn ml-9'>
        <button type='button' onClick={handleSubmit} ref={searchButtonRef}>
          Tìm kiếm
        </button>
      </div>
      <p className='ml-10'>(*) Mặc định thống kê doanh số 7 ngày gần nhất</p>
      <HighchartsChart chartData={chartData} />
      <div className='ml-9'>
        <div style={{ fontSize: 16, color: 'black', fontWeight: 600 }}>
          Tổng số lượng sản phẩm đã bán: {totalQuantitySold} sản phẩm
        </div>
      </div>
      <div className='ml-9'>
        <div style={{ fontSize: 16, color: 'black', fontWeight: 600 }}>
          Tổng doanh thu: {totalRevenue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
        </div>
      </div>
    </div>
  );
};

export default RevenueStatistics;
