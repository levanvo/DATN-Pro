import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useStatisticsByDayMutation } from '../../../Services/Api_Statistic';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface HighchartsChartProps {
    chartData: {
        categories: string[];
        series: { name: string; data: number[] }[];
    };
}

const ThongkeDThu = () => {
    const [totalQuantitySold, setTotalQuantitySold] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [statisticsByDay] = useStatisticsByDayMutation();
    const [tableData, setTableData] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    //làm chọn auto 7 ngày gần nhất
    const [autoFetch7Days, setAutoFetch7Days] = useState(true);
    const [chartData, setChartData] = useState({
        categories: [],
        series: [],
    });

    useEffect(() => {
        // Tự động thống kê doanh thu trong 7 ngày gần nhất khi vào trang
        const currentDate = moment().endOf('day');
        const sevenDaysAgo = currentDate.clone().subtract(6, 'days').startOf('day');
        setStartDate(sevenDaysAgo.format('YYYY-MM-DD'));
        setEndDate(currentDate.format('YYYY-MM-DD'));
    }, []); // Chạy một lần khi component được tạo

//Thống kê cột của HighChatrs
    const HighchartsChart: React.FC<HighchartsChartProps> = ({ chartData }) => {
        const options: Highcharts.Options = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Doanh Thu',
                align: 'left',
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

    const handleStartDateChange = (event) => {
        const selectedEndDate = moment(event.target.value).endOf('day');
        const selectedStartDate = selectedEndDate.clone().subtract('days').startOf('day');

        setStartDate(selectedStartDate.format('YYYY-MM-DD'));
        setEndDate(selectedEndDate.format('YYYY-MM-DD'));
        setAutoFetch7Days(true);
    };

    const handleEndDateChange = (event) => {
        const selectedEndDate = moment(event.target.value).endOf('day');
        const selectedStartDate = moment(startDate);

        setStartDate(selectedStartDate.format('YYYY-MM-DD'));
        setEndDate(selectedEndDate.format('YYYY-MM-DD'));
        setAutoFetch7Days(true);
    };


    const handleSearch = async () => {
        try {
            if (autoFetch7Days) {
                const formattedStartDay = moment(startDate).startOf('day').format('YYYY-MM-DD');
                const formattedEndDay = moment(endDate).endOf('day').format('YYYY-MM-DD');

                console.log('Start Date:', formattedStartDay);
                console.log('End Date:', formattedEndDay);

                const response = await statisticsByDay({
                    startDate: formattedStartDay,
                    endDate: formattedEndDay,
                });

                handleResponse(response);
            } else {
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = () => {
        handleSearch();
    };

    const handleResponse = (response) => {
        if (response.data && response.data.success) {
          const { totalQuantity, orders, totalRevenue } = response.data.statistics;
      
          const dailyTotalRevenue = {};
      
          const selectedDates = getSelectedDates(startDate, endDate);
          
          // Lặp qua các ngày đã chọn
          selectedDates.forEach((selectedDate) => {
            const orderDate = moment(selectedDate).format('DD/MM/YYYY');
            
            // Kiểm tra xem có đơn hàng cho ngày được chọn không
            const matchingOrders = orders.filter((order) => {
              const orderDateFormatted = moment(order.createdAt).format('DD/MM/YYYY');
              return orderDateFormatted === orderDate;
            });
      
            if (matchingOrders.length > 0) {
              // Nếu có đơn hàng, tính tổng doanh thu
              dailyTotalRevenue[orderDate] = matchingOrders.reduce((acc, order) => acc + order.totalPrice, 0);
            } else {
              // Nếu không có đơn hàng, giá trị cột bằng 0
              dailyTotalRevenue[orderDate] = 0;
            }
          });
      
          const categories = Object.keys(dailyTotalRevenue);
          const series = [
            { name: 'Doanh thu', data: Object.values(dailyTotalRevenue) },
          ];
      
          setChartData({ categories, series });
          setTotalQuantitySold(totalQuantity);
          setTotalRevenue(totalRevenue);
          setTotalItems(orders.length); // Số lượng đơn hàng, không phải là serverData.length
          setTableData(orders);
        } else {
          console.error('Không bán được đơn này trong ngày');
        }
      };
      
      // Hàm để lấy danh sách các ngày giữa startDate và endDate
      const getSelectedDates = (startDate, endDate) => {
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
            <h1 className='text-center font-medium'>Thống Kê Doanh Thu Của Cửa Hàng</h1>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-1" htmlFor="startDate">
                    Ngày bắt đầu:
                </label>
                <input
                    className="border border-gray-300 p-2 w-full rounded"
                    type="date"
                    id="startDate"
                    value={startDate}
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
                    value={endDate}
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
                <div style={{ textAlign: 'right', marginTop: '10px', color: "red", fontWeight: 600, fontSize: 16 }}>
                    Tổng đã bán: {totalQuantitySold} sản phẩm
                </div>
                <div style={{ textAlign: 'right', marginTop: '10px', color: "red", fontWeight: 600, fontSize: 16, marginBottom: 10 }}>
                    Tổng doanh thu: {totalRevenue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </div>
                <HighchartsChart chartData={chartData} />
            </div>
        </div>
    );
};

export default ThongkeDThu;
