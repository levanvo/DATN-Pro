import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts';
import { useGetAllProductQuery } from '../../Services/Api_Product';
import Loading from '../../Component/Loading';
import { Table } from 'antd';

const Dashboard = () => {
  const { data: dataGetViews, isLoading: loadingViews }: any = useGetAllProductQuery();
  const [totalAllViews, setTotalAllViews]: any = useState(0);
  const [selectView, setSelectView]: any = useState("today");
  const [viewToday, setViewsToday]: any = useState([]);
  const [viewWeek, setViewsWeek]: any = useState([]);
  const [viewMonth, setViewsMonth]: any = useState([]);
  
  
  function TodayViews(){
    setSelectView("today");
  }

  function WeekViews(){
    setSelectView("week");
  }

  function MonthViews(){
    setSelectView("month");
  }
  useEffect(() => {
    if (!loadingViews) {
      let arrayToday: any = [];
      let arrayWeek: any = [];
      let arrayMonth: any = [];
      let countViews=0;
      const Time=new Date();

      const month=Time.getMonth()+1;
      const day=Time.getDate();
      const hours=Time.getHours();

      dataGetViews.map((views: any) => {
        views.views>0 ? countViews+=views.views:"";

        let timeSP=new Date(views.createdAt);
        const daySP:number=timeSP.getDate();
        if(daySP==day && views.views>0){
          arrayToday.push(views);
        };
        if((day-timeSP.getDate())<=7 && views.views>0){
          arrayWeek.push(views);
        };
        if((day-timeSP.getDate())<=30){
          arrayMonth.push(views);
        };
        // arrayMonth.push(views);
      });
      
      setViewsMonth(arrayMonth);
      setViewsWeek(arrayWeek);
      setViewsToday(arrayToday);
      setTotalAllViews(countViews);
    };
  }, [dataGetViews]);

  const columnsViews: any = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (text:any) => <a>{text}</a>,
    },
    {
      title: 'Lượt xem',
      dataIndex: 'views',
      key: 'views',
    }
  ];
  
  let dataViews:any=[];
  if(selectView=='today'){
    viewToday?.map((items:any)=>{
      dataViews.push({
        key:items._id,
        name:items.name,
        views:items.views
      });
    });
  }else if(selectView=="week"){
    viewWeek?.map((items:any)=>{
      dataViews.push({
        key:items._id,
        name:items.name,
        views:items.views
      });
    });
  }else{
    viewMonth?.map((items:any)=>{
      dataViews.push({
        key:items._id,
        name:items.name,
        views:items.views
      });
    });
    
  };
  dataViews.sort((a: any, b: any) => b.views-a.views)
  return (
    <div className='h-[80vh] scrollDasboard'>
      <div className="flex justify-between border rounded-md VIEWS select-none">
        <div className={`selector-Views`}>
          <h3 className='mt-2 text-sky-600 ml-10'>Thống kê theo lượt xem:</h3>
          <p className='ml-2'>(*) <span className='text-red-400'>Lượt xem được phân tích theo khoảng thời gian được tạo của các sản phẩm.</span></p>
          <p className='-mt-4 ml-2'>(*) Tổng lượt xem toàn bộ: <span className='text-green-600'>{totalAllViews} views /{dataGetViews?.length} sản phẩm.</span></p>
          <div className="flex space-x-2 ml-20 ">
            {selectView == "today" ? <input type="radio" id='today' name='a' checked/> : <input type="radio" id='today' name='a'/>}
            <label htmlFor='today'><p className='m-0 cursor-pointer font-bold' onClick={() => TodayViews()}>Lượt xem hôm nay. </p></label>
          </div>
          <div className="flex space-x-2 ml-20 ">
            {selectView == "week" ? <input type="radio" id='week' name='a' checked/> : <input type="radio" id='week' name='a'/>}
            <label htmlFor='week'><p className='m-0 cursor-pointer font-bold' onClick={() => WeekViews()}>Lượt xem 7 ngày qua. </p></label>
          </div>
          <div className="flex space-x-2 ml-20 ">
            {selectView == "month" ? <input type="radio" id='month' name='a' checked/> : <input type="radio" id='month' name='a'/>}
            <label htmlFor='month'><p className='m-0 cursor-pointer font-bold' onClick={() => MonthViews()}>Lượt xem tháng này. </p></label>
          </div>
        </div>
        <div className="">
          <div className="flex space-x-2 -mb-10 mt-5 bg-gray-50 rounded-full w-fit">
            <img className='w-7 h-7' src="../../../img/icons/timetable.png" alt="" />
            {selectView=="today" && <p className='pr-5 mt-1 h-[12px]'>hôm nay: {(new Date().getDate())<10?"0"+(new Date().getDate()):(new Date().getDate())}/{(new Date().getMonth()+1)>12?"01":(new Date().getMonth()+1)}/{new Date().getFullYear()}</p>}
            {selectView=="week" && <p className='pr-5 mt-1 h-[12px]'>từ: 7 ngày trước</p>}
            {selectView=="month" && <p className='pr-5 mt-1 h-[12px]'>từ: {(new Date().getDate())<10?"0"+(new Date().getDate()):(new Date().getDate())}/{(new Date().getMonth()+1)>12?"01":(new Date().getMonth())}/{new Date().getFullYear()} đến: {(new Date().getDate())<10?"0"+(new Date().getDate()):(new Date().getDate())}/{(new Date().getMonth()+1)>12?"01":(new Date().getMonth()+1)}/{new Date().getFullYear()}</p>}
            
          </div>
          <p className='float-right mr-5'>số lượng SP: {selectView=="today" && viewToday.length} {selectView=="week" && viewWeek.length} {selectView=="month" && viewMonth.length}</p>
          {loadingViews ? <Loading /> : <Table className='w-[700px] mt-5 mr-2' columns={columnsViews} dataSource={dataViews} pagination={{pageSize:5}}/>}
        </div>

      </div>

    </div>
  )
}

export default Dashboard
