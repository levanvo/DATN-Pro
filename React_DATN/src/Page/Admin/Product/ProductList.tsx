import React, { useState } from 'react';
import { Divider, Table,Popconfirm, message,Button,Input } from 'antd';
import { useDeleteProductMutation, useGetAllProductQuery } from '../../../Services/Api_Product';
import { IProduct } from '../../../Models/interfaces';
import { QuestionCircleOutlined,FilterOutlined } from '@ant-design/icons';
import Loading from '../../../Component/Loading';
import {DeleteFilled,EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useGetAllCategoryQuery } from '../../../Services/Api_Category';
import type { ColumnsType, TableProps } from 'antd/es/table';


const { Search } = Input;


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows:any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const ProductList = () => {
  const {data: getAllProduct,isLoading, error} = useGetAllProductQuery()
  const [removeProduct] = useDeleteProductMutation()
  const [messageApi,contextHolder] = message.useMessage() 
  const {data: categories} = useGetAllCategoryQuery()
  const [searchText, setSearchText] = useState('');
  const [minPrice, setMinPrice] = useState(''); 
  const [maxPrice, setMaxPrice] = useState('');
  
  const dataSource = getAllProduct?.map(({_id,name,original_price,price,imgUrl,categoryId}:IProduct) => ({
    key: _id,
    name,
    original_price,
    price,
    imgUrl,
    categoryId
  }))
  
  const confirm = (id: number | string) => {
    
    removeProduct(id).unwrap().then(() => {
      messageApi.open({
        type: "success",
        content: "Xóa sản phẩm thành công"
      })
    })
  }
  const filteredDataSource = searchText?dataSource?.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    ) : dataSource;

  //Tìm kiếm theo tên
  const handleSearch = (value:string) => {
    setSearchText(value);
  };

  const columns:any[] = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      render: (text: string) => (<a>{text}</a>),
      align: 'center',
    },
    {
      title: 'Hình ảnh',
      dataIndex: "imgUrl",
      key: "imgUrl",
      render: (imgUrls:string[]) => (
        imgUrls && imgUrls.length > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={imgUrls[0]} style={{ width: 100 }} />
          </div>
        ) : null
      ),
      align: 'center',
    },
    {
      title: 'Danh mục',
      dataIndex: 'categoryId',
      key: "categoryId",
      render: (categoryId: string) => {
        if(categories){
          const categoryName = categories.find((c) => c._id === categoryId)
          return categoryName ? categoryName.name : "không xác định"
        }
      },
      align: 'center',
    },
    {
      title: 'Giá hiện tại',
      dataIndex: 'price',
      align: 'center',
    },
    {
      title: 'Giá gốc',
      dataIndex: 'original_price',
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
            
            <Link to={`/admin/product/${id}/update`}>

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
          <Link to={`/admin/product/add`}>Thêm mới</Link>
        </Button>
          <Search 
        onSearch={handleSearch} placeholder="tìm từ khóa" allowClear  style={{ width: 300, marginLeft: 50 }} />
        
        <Button>
          <FilterOutlined />
        </Button>
        
      </div>
      <Divider />
      {isLoading ? <Loading /> : <Table rowSelection={{...rowSelection,}} columns={columns} dataSource={filteredDataSource}/>}
      
    </div>
  );
};

export default ProductList;