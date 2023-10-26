import React, { useState } from 'react';
import { Divider, Table,Popconfirm, message,Button,Input,Menu,Dropdown  } from 'antd';
import { useDeleteProductMutation, useGetAllDeletedProductsQuery, useRemoveProductMutation, useRestoreProductMutation} from '../../../Services/Api_Product';
import { IProduct } from '../../../Models/interfaces';
import { QuestionCircleOutlined,FilterOutlined } from '@ant-design/icons';
import Loading from '../../../Component/Loading';
import {DeleteFilled } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useGetAllCategoryQuery } from '../../../Services/Api_Category';



const { Search } = Input;


// rowSelection object indicates the need for row selection


const GetAllDeletedProducts = () => {
  const {data: getAllProduct,isLoading, error} = useGetAllDeletedProductsQuery()
  const [removeProduct] = useRemoveProductMutation()
  const [messageApi,contextHolder] = message.useMessage() 
  const {data: categories} = useGetAllCategoryQuery()
  const [searchText, setSearchText] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [isApplyClicked, setIsApplyClicked] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedProductId, setSelectedProductId] = useState<React.Key[]>([])
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)
  const [restoreData] = useRestoreProductMutation()
  const navigate = useNavigate()
  
  const rowSelection = {
    selectedRowKeys: selectedProductId,
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedProductId(selectedRowKeys)
    },
  };

  // hàm khôi phục những sản phẩm đã chọn
  const restoreMultipleProducts = async () => {
    try {
      setIsLoadingDelete(true)
      if (selectedProductId.length === 0) {
        message.error("Vui lòng chọn các sản phẩm muốn khôi phục!")
        return
      }
      const productIdAll = selectedProductId.map((key) => key.toString());
      await Promise.all(productIdAll.map((productId)=> restoreData(productId)))
      message.success("Khôi phục sản phẩm thành công")

      setTimeout(() => {
        navigate("/admin/product/list")
      },1500)
    } catch (error) {
      message.error("Đã có lỗi xảy ra vui lòng thử lại")
    }
    setIsLoadingDelete(false)
  }


  const deleteMultipleProducts = async () => {
    try {
      setIsLoadingDelete(true)
      if (selectedProductId.length === 0) {
        message.error("Vui lòng chọn các sản phẩm muốn xoá!")
        return
      }
      const productIdAll = selectedProductId.map((key) => key.toString());
      await Promise.all(productIdAll.map((productId)=> removeProduct(productId)))
      message.success("Xóa sản phẩm thành công")
    } catch (error) {
      message.error("Đã có lỗi xảy ra vui lòng thử lại")
    }
    setIsLoadingDelete(false)
  }

  const dataSource = getAllProduct?.map(({_id,name,original_price,price,imgUrl,categoryId}:IProduct) => ({
    key: _id,
    name,
    original_price,
    price,
    imgUrl,
    categoryId
  }))

  const handleFilterVisibleChange = (visible:any) => {
    setFilterVisible(visible);
  };

  const handleApplyClick = () => {
    setIsApplyClicked(true);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsApplyClicked(false);
    setPriceRange((prevState) => ({
      ...prevState,
      min: event.target.value,
    }));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsApplyClicked(false);
    setPriceRange((prevState) => ({
      ...prevState,
      max: event.target.value,
    }));
  };

  
  

  const filterMenu = (
    <Menu>
      <Menu.Item key="1">
        <Input placeholder="Min Price" value={priceRange.min} onChange={handleMinPriceChange}/>
      </Menu.Item>
      <Menu.Item key="2">
        <Input placeholder="Max Price" value={priceRange.max} onChange={handleMaxPriceChange}/>
      </Menu.Item>
      <div className='d-flex mt-3'>
        <Button danger type="primary" onClick={handleApplyClick} style={{marginLeft: 12,marginRight:10}}>
          Submit
        </Button>
        <Button onClick={() => setFilterVisible(false)}>
          Close
        </Button>
      </div>
    </Menu>
  );
  
  // hàm thực hiện xóa vĩnh viễn sản phẩm
  const confirm = (id: number | string) => {
    removeProduct(id).unwrap().then(() => {
      messageApi.open({
        type: "success",
        content: "Xóa sản phẩm thành công"
      })
    })
  }

  // hàm khôi phục sản phẩm
  const restoreProduct = async (id:number | string) => {
    try {
      setIsLoadingDelete(true)
        await restoreData(id)
        message.success("Khôi phục sản phẩm thành công")
      setIsLoadingDelete(false)

      setTimeout(() => {
          navigate("/admin/product/list")
        },1500)
    } catch (error) {
      message.error("Đã có lỗi xảy ra vui lòng thử lại")
      setIsLoadingDelete(false)
    }
  
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
                title="Bạn có chắc chắn muốn khôi phục sản phẩm không?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => restoreProduct(id)}
                okText={
                  <span style={{ color: 'black'}}>Yes</span>
                }
                cancelText="No"
            >
              <Button>Khôi phục</Button>
              {/* <DeleteFilled style={{color: '#FF0000',fontSize: "20px"}}/> */}
            </Popconfirm>

            <Popconfirm
                title="Bạn có chắc chắn muốn xóa vĩnh viễn sản phẩm không?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => confirm(id)}
                okText={
                  <span style={{ color: 'black'}}>Yes</span>
                }
                cancelText="No"
            >
              <DeleteFilled style={{color: '#FF0000',fontSize: "20px"}}/>
            </Popconfirm>
        </div>
       ),
       align: 'center',
    },
  ];
  
  return (
    <div>
      {contextHolder}
      {isLoadingDelete && <Loading />}
      <div>
        <Button 
          style={{marginRight: 20}}
          type="primary"
          onClick={restoreMultipleProducts}
          danger
        >
          Khôi phục mục đã chọn
        </Button>

        <Button 
          style={{marginRight: 20}}
          type="primary"
          onClick={deleteMultipleProducts}
          danger
        >
          Xóa mục đã chọn
        </Button>

        <Button type="primary" style={{background: "blue"}}>
          <Link to={`/admin/product/add`}>Thêm mới</Link>
        </Button>
          <Search 
        onSearch={handleSearch} placeholder="tìm từ khóa" allowClear  style={{ width: 300, marginLeft: 50 }} />
        
        <Dropdown
            visible={filterVisible}
            onVisibleChange={handleFilterVisibleChange}
            overlay={filterMenu}
            trigger={['click']}
          >
            <Button style={{marginLeft:20}}>
              <FilterOutlined />
            </Button>
       </Dropdown>

        
      </div>
      <Divider />
      {isLoading ? <Loading /> : <Table rowSelection={{...rowSelection,}} columns={columns} dataSource={filteredDataSource}/>}
      
    </div>
  );
};

export default GetAllDeletedProducts;