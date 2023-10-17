import React, { useState } from 'react';
import { Divider, Table,Popconfirm, message,Button,Input } from 'antd';
import { ISize } from '../../../Models/interfaces';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Loading from '../../../Component/Loading';
import {DeleteFilled,EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDeleteSizeMutation, useGetAllSizeQuery } from '../../../Services/Api_Size';

const { Search } = Input;

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows:any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};


const SizeList = () => {
  const {data: getAllSize,isLoading} = useGetAllSizeQuery()
  const [removeSize] = useDeleteSizeMutation()
  const [messageApi,contextHolder] = message.useMessage() 

  const dataSource = getAllSize?.data.map(({_id,name}:ISize) => ({
    key: _id,
    name
  }))

  const confirm = (id: number | string) => {
    
    removeSize(id).unwrap().then(() => {
      messageApi.open({
        type: "success",
        content: "Xóa size thành công"
      })
    })
  }

  const columns = [
    {
      title: 'Size',
      dataIndex: 'name',
      render: (text: string) => (<a>{text}</a>),
      align: 'center',
    },
  
    {
      title: 'Action',
      key: 'action',
      render: ({key: id}: any) => (
        <div className="flex space-x-4" style={{justifyContent: 'center', alignItems: "center"}}>
            <Popconfirm
                title="Bạn có chắc chắn muốn xóa không?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => confirm(id)}
                okText={
                  <span style={{ color: 'black'}}>Yes</span>
                }
                cancelText="No"
            >
              <DeleteFilled style={{color: '#FF0000',fontSize: "20px"}}/>
            </Popconfirm>
            
            <Link to={`/admin/size/${id}/update`}>
              <EditOutlined style={{fontSize: "20px"}}/>
            </Link>
        </div>
       ),
       align: 'center',
    },
  ];
  
  return (
    <div>
      {contextHolder}
      <div>
        <Button type="primary" style={{background: "blue"}}>
          <Link to={`/admin/size/add`}>Thêm mới</Link>
        </Button>
          <Search placeholder="tìm từ khóa" allowClear  style={{ width: 300, marginLeft: 50 }} />
      </div>
      <Divider />
      {isLoading ? <Loading /> : <Table rowSelection={{...rowSelection,}} columns={columns} dataSource={dataSource}/>}
      
    </div>
  );
};

export default SizeList;