import React, { useState } from 'react';
import { Divider, Table, Popconfirm, message, Button, Input, Menu, Dropdown } from 'antd';
import { useDeleteProductMutation, useGetAllProductQuery } from '../../../Services/Api_Product';
import { IProduct } from '../../../Models/interfaces';
import { QuestionCircleOutlined, FilterOutlined } from '@ant-design/icons';
import Loading from '../../../Component/Loading';
import { DeleteFilled, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



const { Search } = Input;


// rowSelection object indicates the need for row selection


const BillList = () => {

  // const rowSelection = {
  //   selectedRowKeys: selectedProductId,
  //   onChange: (selectedRowKeys: React.Key[]) => {
  //     setSelectedProductId(selectedRowKeys)
  //   },
  // };

  // Xóa sản phẩm đã chọn
  // const deleteMultipleProducts = async () => {
  //   try {
  //     setIsLoadingDelete(true)
  //     if (selectedProductId.length === 0) {
  //       message.error("Vui lòng chọn các category muốn xoá!")
  //       return
  //     }
  //     const productIdAll = selectedProductId.map((key) => key.toString());
  //     await Promise.all(productIdAll.map((productId) => removeProduct(productId)))
  //     message.success("Xóa thành công")
  //   } catch (error) {
  //     message.error("Đã có lỗi xảy ra vui lòng thử lại")
  //   }
  //   setIsLoadingDelete(false)
  // }

  //data trả về
  // const dataSource = getAllProduct?.map(({ _id, name, original_price, price, imgUrl, categoryId,color_id,size_id }: IProduct) => ({
  //   key: _id,
  //   name,
  //   original_price,
  //   price,
  //   imgUrl,
  //   categoryId,
  //   color_id,
  //   size_id
  // }))




  // const confirm = (id: number | string) => {

  //   removeProduct(id).unwrap().then(() => {
  //     messageApi.open({
  //       type: "success",
  //       content: "Xóa sản phẩm thành công"
  //     })
  //   })
  // }


  //Tìm kiếm theo tên
  // const handleSearch = (value: string) => {
  //   setSearchText(value);
  // };

  // const filteredDataSource = searchText ? dataSource?.filter((product) =>
  //   product.name.toLowerCase().includes(searchText.toLowerCase())
  // ) : dataSource;

  // const filteredAndPricedDataSource = isResetClicked ? filteredDataSource : isApplyClicked ? filteredDataSource?.filter((product) => {
  //   const { price } = product;
  //   const { min, max } = priceRange;

  //   if (min === "" && max === "") return true;
  //   if (min !== "" && parseInt(min) > price) return false;
  //   if (max !== "" && parseInt(max) < price) return false;

  //   return true;
  // }) : filteredDataSource;


  const columns: any[] = [
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
      render: (imgUrls: string[]) => (
        imgUrls && imgUrls.length > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={imgUrls[0]} style={{ width: 100 }} />
          </div>
        ) : null
      ),
      align: 'center',
    },
    
    {
      title: 'Giá hiện tại',
      dataIndex: 'price',
      align: 'center',
      render: (price: number) => (
        <span>{price.toLocaleString('vi-VN',{style: "currency", currency: "VND"})}</span>
      )
    },
    
    {
      title: 'Giá gốc',
      dataIndex: 'original_price',
      align: 'center',
      render: (original_price: number) => (
        <span>{original_price.toLocaleString("vi-VN", {style: "currency", currency: "VND"})}</span>
      )
    },

    {
      title: 'Action',
      key: 'action',
      render: ({ key: id }: any) => (
        <div className="flex space-x-4" style={{ justifyContent: 'center', alignItems: "center" }}>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa không?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => confirm(id)}
            okText={
              <span style={{ color: 'black' }}>Yes</span>
            }
            cancelText="No"
          >
            <DeleteFilled style={{ color: '#FF0000', fontSize: "20px" }} />
          </Popconfirm>

          <Link to={`/admin/product/${id}/update`}>

            <EditOutlined style={{ fontSize: "20px" }} />
          </Link>
        </div>
      ),
      align: 'center',
    },
  ];

  return (
    <div>
      <div>
        {/* <Button
          style={{ marginRight: 20 }}
          type="primary"
          onClick={deleteMultipleProducts}
          danger
        >
          Xoá mục đã chọn
        </Button> */}

        <Button type="primary" style={{ background: "blue" }}>
          <Link to={`/admin/product/add`}>Thêm mới</Link>
        </Button>
        {/* <Search
          onSearch={handleSearch} placeholder="tìm từ khóa" allowClear style={{ width: 300, marginLeft: 50 }} /> */}

        {/* <Dropdown
          visible={filterVisible}
          onVisibleChange={handleFilterVisibleChange}
          overlay={filterMenu}
          trigger={['click']}
        >
          <Button style={{ marginLeft: 20 }}>
            <FilterOutlined />
          </Button>
        </Dropdown> */}


      </div>
      <Divider />
      {/* {isLoading ? <Loading /> : <Table rowSelection={{ ...rowSelection, }} columns={columns} dataSource={filteredAndPricedDataSource} />} */}

    </div>
  );
};

export default BillList;