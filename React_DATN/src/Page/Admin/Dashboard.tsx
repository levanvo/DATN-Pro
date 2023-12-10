import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts';
import { useGetAllProductQuery } from '../../Services/Api_Product';
import Loading from '../../Component/Loading';
import { Table } from 'antd';

const Dashboard = () => {
  const { data: dataGetProducts, isLoading: loadingProducts }: any = useGetAllProductQuery();
  const [totalAllViews, setTotalAllViews]: any = useState(0);
  const [totalAllSelled, setTotalAllSelled]: any = useState(0);
  const [selectView, setSelectView]: any = useState("today");
  const [selectProducts, setSelectProducts]: any = useState("todayP");
  
  const [viewToday, setViewsToday]: any = useState([]);
  const [viewWeek, setViewsWeek]: any = useState([]);
  const [viewMonth, setViewsMonth]: any = useState([]);

  const [selledToday, setSelledToday]: any = useState([]);
  const [selledWeek, setSelledWeek]: any = useState([]);
  const [selledMonth, setSelledMonth]: any = useState([]);
  // views
  function TodayViews() {
    setSelectView("today");
  }
  function WeekViews() {
    setSelectView("week");
  }
  function MonthViews() {
    setSelectView("month");
  }
  useEffect(() => {
    if (!loadingProducts) {
      let arrayToday: any = [];
      let arrayWeek: any = [];
      let arrayMonth: any = [];
      let countViews = 0;
      const Time = new Date();

      const month = Time.getMonth() + 1;
      const day = Time.getDate();
      const hours = Time.getHours();

      dataGetProducts.map((views: any) => {
        views.views > 0 ? countViews += views.views : "";

        let timeSP = new Date(views.createdAt);
        const daySP: number = timeSP.getDate();
        if (daySP == day && views.views > 0) {
          arrayToday.push(views);
        };
        if ((day - timeSP.getDate()) <= 7 && views.views > 0) {
          arrayWeek.push(views);
        };
        if ((day - timeSP.getDate()) <= 30 && views.views > 0) {
          arrayMonth.push(views);
        };
        // arrayMonth.push(views);
      });

      setViewsMonth(arrayMonth);
      setViewsWeek(arrayWeek);
      setViewsToday(arrayToday);
      setTotalAllViews(countViews);
    };
  }, [dataGetProducts]);
  const columnsViews: any = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Lượt xem',
      dataIndex: 'views',
      key: 'views',
    }
  ];
  let dataViews: any = [];
  if (selectView == 'today') {
    viewToday?.map((items: any) => {
      dataViews.push({
        key: items._id,
        name: items.name,
        views: items.views
      });
    });
  } else if (selectView == "week") {
    viewWeek?.map((items: any) => {
      dataViews.push({
        key: items._id,
        name: items.name,
        views: items.views
      });
    });
  } else {
    viewMonth?.map((items: any) => {
      dataViews.push({
        key: items._id,
        name: items.name,
        views: items.views
      });
    });

  };
  dataViews.sort((a: any, b: any) => b.views - a.views)
  // products
  function TodayProducts() {
    setSelectProducts("todayP");
  }
  function WeekProducts() {
    setSelectProducts("weekP");
  }
  function MonthProducts() {
    setSelectProducts("monthP");
  }
  const columnsProducts: any = [
    {
      title: 'Tên Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Đã bán',
      dataIndex: 'selled',
      key: 'selled',
    }
  ];
  useEffect(() => {
    if (!loadingProducts) {
      let arrayToday: any = [];
      let arrayWeek: any = [];
      let arrayMonth: any = [];
      let countSelled = 0;
      const Time = new Date();

      const month = Time.getMonth() + 1;
      const day = Time.getDate();
      const hours = Time.getHours();

      dataGetProducts.map((views: any) => {
        views.sell_quantity > 0 ? countSelled += views.sell_quantity : "";

        let timeSP = new Date(views.createdAt);
        const daySP: number = timeSP.getDate();
        if (daySP == day && views.sell_quantity > 0) {
          arrayToday.push(views);
        };
        if ((day - timeSP.getDate()) <= 7 && views.sell_quantity > 0) {
          arrayWeek.push(views);
        };
        if ((day - timeSP.getDate()) <= 30 && views.sell_quantity > 0) {
          arrayMonth.push(views);
        };
        // arrayMonth.push(views);
      });

      setSelledMonth(arrayMonth);
      setSelledWeek(arrayWeek);
      setSelledToday(arrayToday);
      setTotalAllSelled(countSelled);
    };
  }, [dataGetProducts]);
  let dataProducts: any = [];
  if (selectProducts == 'todayP') {
    selledToday?.map((items: any) => {
      dataProducts.push({
        key: items._id,
        name: items.name,
        selled: items.sell_quantity
      });
    });
  } else if (selectProducts == "weekP") {
    selledWeek?.map((items: any) => {
      dataProducts.push({
        key: items._id,
        name: items.name,
        selled: items.sell_quantity
      });
    });
  } else {
    selledMonth?.map((items: any) => {
      dataProducts.push({
        key: items._id,
        name: items.name,
        selled: items.sell_quantity
      });
    });
  };
  dataProducts.sort((a: any, b: any) => b.selled - a.selled)
  return (
    <div className='h-[80vh] scrollDasboard'>
      {/* views */}
      <div className="flex justify-between border rounded-md VIEWS select-none mb-10">
        <div className={`selector-Views`}>
          <h3 className='mt-2 text-sky-600 ml-10'>Thống kê theo lượt xem</h3>
          <p className='ml-2'>(*) <span className='text-red-400'>Lượt xem được phân tích theo khoảng thời gian được tạo của các sản phẩm.</span></p>
          <p className='-mt-4 ml-2'>(*) Tổng lượt xem toàn bộ: <span className='text-green-600'>{totalAllViews} views /{dataGetProducts?.length} sản phẩm.</span></p>
          <div className="flex space-x-2 ml-20 ">
            {selectView == "today" ? <input type="radio" id='today' name='a' checked /> : <input type="radio" id='today' name='a' />}
            <label htmlFor='today'><p className='m-0 cursor-pointer font-medium' onClick={() => TodayViews()}>Lượt xem hôm nay. </p></label>
          </div>
          <div className="flex space-x-2 ml-20 ">
            {selectView == "week" ? <input type="radio" id='week' name='a' checked /> : <input type="radio" id='week' name='a' />}
            <label htmlFor='week'><p className='m-0 cursor-pointer font-medium' onClick={() => WeekViews()}>Lượt xem 7 ngày qua. </p></label>
          </div>
          <div className="flex space-x-2 ml-20 ">
            {selectView == "month" ? <input type="radio" id='month' name='a' checked /> : <input type="radio" id='month' name='a' />}
            <label htmlFor='month'><p className='m-0 cursor-pointer font-medium' onClick={() => MonthViews()}>Lượt xem trong 1 tháng. </p></label>
          </div>
        </div>
        <div className="">
          <div className="flex space-x-2 -mb-10 mt-5 bg-gray-50 rounded-full w-fit">
            <img className='w-7 h-7' src="../../../img/icons/timetable.png" alt="" />
            {selectView == "today" && <p className='pr-5 mt-1 h-[12px]'>hôm nay: {(new Date().getDate()) < 10 ? "0" + (new Date().getDate()) : (new Date().getDate())}/{(new Date().getMonth() + 1) > 12 ? "01" : (new Date().getMonth() + 1)}/{new Date().getFullYear()}</p>}
            {selectView == "week" && <p className='pr-5 mt-1 h-[12px]'>từ: 7 ngày trước</p>}
            {selectView == "month" && <p className='pr-5 mt-1 h-[12px]'>từ: {(new Date().getDate()) < 10 ? "0" + (new Date().getDate()) : (new Date().getDate())}/{(new Date().getMonth() + 1) > 12 ? "01" : (new Date().getMonth())}/{new Date().getFullYear()} đến: {(new Date().getDate()) < 10 ? "0" + (new Date().getDate()) : (new Date().getDate())}/{(new Date().getMonth() + 1) > 12 ? "01" : (new Date().getMonth() + 1)}/{new Date().getFullYear()}</p>}

          </div>
          <p className='float-right mr-5'>số lượng: {selectView == "today" && viewToday.length} {selectView == "week" && viewWeek.length} {selectView == "month" && viewMonth.length}</p>
          {loadingProducts ? <Loading /> : <Table className='w-[700px] mt-5 mr-2' columns={columnsViews} dataSource={dataViews} pagination={{ pageSize: 5 }} />}
        </div>
      </div>
      {/* products */}
      <div className="flex justify-between border rounded-md VIEWS select-none">
        <div className={`selector-Products`}>
          <h3 className='mt-2 text-sky-600 ml-10'>Biến động về sản phẩm</h3>
          <p className='ml-2'>(*) <span className='text-red-400'>Lượt xem được phân tích theo khoảng thời gian được tạo của các sản phẩm.</span></p>
          <p className='-mt-4 ml-2'>(*) Tổng đã bán: <span className='text-green-600'>{totalAllSelled} /{dataGetProducts?.length} sản phẩm.</span></p>
          <p className='ml-5 font-bold mb-0'>Theo lượt bán:</p>
          <div className="flex space-x-2 ml-20 ">
            {selectProducts == "todayP" ? <input type="radio" id='todayP' name='PR' checked /> : <input type="radio" id='todayP' name='PR' />}
            <label htmlFor='todayP'><p className='m-0 cursor-pointer font-medium' onClick={() => TodayProducts()}>Lượt bán hôm nay. </p></label>
          </div>
          <div className="flex space-x-2 ml-20 ">
            {selectProducts == "weekP" ? <input type="radio" id='weekP' name='PR' checked /> : <input type="radio" id='weekP' name='PR' />}
            <label htmlFor='weekP'><p className='m-0 cursor-pointer font-medium' onClick={() => WeekProducts()}>Lượt bán trong 1 tuần. </p></label>
          </div>
          <div className="flex space-x-2 ml-20 ">
            {selectProducts == "monthP" ? <input type="radio" id='monthP' name='PR' checked /> : <input type="radio" id='monthP' name='PR' />}
            <label htmlFor='monthP'><p className='m-0 cursor-pointer font-medium' onClick={() => MonthProducts()}>Lượt bán trong 1 tháng. </p></label>
          </div>
        </div>
        <div className="">
          <div className="flex space-x-2 -mb-10 mt-5 bg-gray-50 rounded-full w-fit">
            <img className='w-7 h-7' src="../../../img/icons/timetable.png" alt="" />
            {selectProducts == "todayP" && <p className='pr-5 mt-1 h-[12px]'>hôm nay: {(new Date().getDate()) < 10 ? "0" + (new Date().getDate()) : (new Date().getDate())}/{(new Date().getMonth() + 1) > 12 ? "01" : (new Date().getMonth() + 1)}/{new Date().getFullYear()}</p>}
            {selectProducts == "weekP" && <p className='pr-5 mt-1 h-[12px]'>từ: 7 ngày trước</p>}
            {selectProducts == "monthP" && <p className='pr-5 mt-1 h-[12px]'>từ: {(new Date().getDate()) < 10 ? "0" + (new Date().getDate()) : (new Date().getDate())}/{(new Date().getMonth() + 1) > 12 ? "01" : (new Date().getMonth())}/{new Date().getFullYear()} đến: {(new Date().getDate()) < 10 ? "0" + (new Date().getDate()) : (new Date().getDate())}/{(new Date().getMonth() + 1) > 12 ? "01" : (new Date().getMonth() + 1)}/{new Date().getFullYear()}</p>}

          </div>
          <p className='float-right mr-5'>số lượng: {selectProducts == "todayP" && selledToday.length} {selectProducts == "weekP" && selledWeek.length} {selectProducts == "monthP" && selledMonth.length}</p>
          {loadingProducts ? <Loading /> : <Table className='w-[700px] mt-5 mr-2' columns={columnsProducts} dataSource={dataProducts} pagination={{ pageSize: 5 }} />}
        </div>

      </div>

    </div>
  )
}

export default Dashboard
