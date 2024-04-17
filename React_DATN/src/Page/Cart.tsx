import { useEffect, useState } from 'react'
import { message, Popconfirm, Table } from 'antd';
import { QuestionCircleOutlined, DeleteFilled } from "@ant-design/icons"
import { useDeleteFromCartMutation, useGetCartQuery, useUpdateIncreaseMutation, useUpdateMinusMutation } from '../Services/Api_cart';
import { ProductItem } from '../Models/interfaces';
import { Input } from 'antd';
import Loading from '../Component/Loading';
import "../App.scss"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const token = localStorage.getItem('token');
  const { data: cartData, isLoading, error } = token ? useGetCartQuery() : { data: null, isLoading: false, error: null };
  const [messageApi, contextHolder] = message.useMessage();
  const [deleteCart] = useDeleteFromCartMutation();
  const [selectedProductId, setSelectedProductId] = useState<React.Key[]>([])
  const [localCart, setLocalCart] = useState<any[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
  const [productQuantities, setProductQuantities] = useState<any>({});
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const navigate = useNavigate()
  const [updatePrice, setUpdatePrice] = useState()
  const [updateMinus] = useUpdateMinusMutation()
  const [updateIncrease] = useUpdateIncreaseMutation()

  const rowSelection = {
    selectedRowKeys: selectedProductId,
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedProductId(selectedRowKeys);
      const selectedProducts = dataSource.filter((product) => selectedRowKeys.includes(product.key));
      setSelectedProducts(selectedProducts);
    },
  };


  let dataSource: any[] = [];
  const calculateTotal = () => {
    if (token) {
      let total = 0;
      selectedProducts.forEach((product) => {
        total += product.price;
      });

      return total;
    } else {
      let total = 0;
      selectedProducts.forEach((product) => {
        total += product.price * (product.quantity);
      });

      return total;
    }
  };


  const [totalAmount, setTotalAmount] = useState<number>(calculateTotal());

  useEffect(() => {
    updateTotalAmount();
  }, [selectedProducts]);

  const updateTotalAmount = () => {
    const total = calculateTotal();
    setTotalAmount(total);
  };

  const handleIncrease = (productId: string) => {
    const productToUpdate = cartData?.products.find((product: any) => product._id === productId);

    if (productToUpdate) {
      const updatedProductQuantities = {
        ...productQuantities,
        [productId]: (productToUpdate.quantity) + 1,
      };

      setProductQuantities(updatedProductQuantities);

      updateIncrease({
        productId: productToUpdate.productId._id,
        color: productToUpdate.color,
        size: productToUpdate.size,
        quantity: 1,
        price: productToUpdate.productId.price
      });
    }
  };


  const handleMinus = (productId: string) => {
    const productToUpdate = cartData?.products.find((product: any) => product._id === productId);
    
    if (productToUpdate.quantity === 1) {
      message.error("Không thể giảm thêm số lượng")
    } else {
      const updatedProductQuantities = {
        ...productQuantities,
        [productId]: (productToUpdate.quantity) - 1,
      };
      setProductQuantities(updatedProductQuantities)
      updateMinus({
        productId: productToUpdate.productId._id,
        color: productToUpdate.color,
        size: productToUpdate.size,
        quantity: 1,
        price: productToUpdate.productId.price
      });
    }
  };

  const handleTru = (productId: string) => {
    const productToUpdate = localCart.find((product: any) => product.id === productId);

    if (productToUpdate && productToUpdate.quantity > 1) {
      const updatedLocalCart = localCart.map((product) =>
        product.id === productId
          ? {
            ...product,
            quantity: product.quantity - 1,
            price: product.price - product.priceItem
          }
          : product
      );
      setLocalCart(updatedLocalCart);
      localStorage.setItem('cart', JSON.stringify(updatedLocalCart));
    } else {
      message.error("Số lượng không thể giảm thêm")
    }
  };

  const handleCong = (productId: string) => {
    const productToUpdate = localCart.find((product: any) => product.id === productId);

    if (productToUpdate && productToUpdate.quantity < 10) {
      const updatedLocalCart = localCart.map((product) =>
        product.id === productId
          ? {
            ...product,
            quantity: product.quantity + 1,
            price: product.price + product.priceItem
          }
          : product
      );

      setLocalCart(updatedLocalCart);
      localStorage.setItem('cart', JSON.stringify(updatedLocalCart));
    } else {
      message.error("Số lượng không thể tăng thêm")
    }
  };


  const confirm = (productId: string) => {
    deleteCart(productId)
      .unwrap()
      .then(() => {
        messageApi.open({
          type: 'success',
          content: 'Xóa sản phẩm khỏi giỏ hàng thành công'
        });
      })
      .catch((error) => {
        messageApi.error('Đã xảy ra lỗi khi xóa sản phẩm');
      });
  };

  const confirmCart = (productId: string) => {
    const deleteCart = localCart.filter((product: any) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(deleteCart));
    setLocalCart(deleteCart);
    messageApi.open({
      type: 'success',
      content: 'Xóa sản phẩm khỏi giỏ hàng thành công',
    });
  };

  if (token) {
    dataSource = cartData?.products.map((product: any) => {
      return {
        key: product._id,
        productId: product.productId?._id,
        priceItem: product.productId?.price,
        name: product.productId?.name,
        price: product.price,
        imgUrl: product.imgUrl[0],
        color: product.color,
        size: product.size,
        quantity: productQuantities[product._id] || product.quantity,
      };
    });

  } else {
    dataSource = localCart.map((product: any) => {
      return {
        key: product.id,
        productId: product.productId,
        priceItem: product.priceItem,
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl[0],
        color: product.color,
        size: product.size,
        quantity: productQuantities[product.productId] || product.quantity,
      };

    });

  }


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
      render: (imgUrl: string) => (
        imgUrl && imgUrl.length > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={imgUrl} style={{ width: 100 }} />
          </div>
        ) : null
      ),
      align: 'center',
    },
    {
      title: 'Màu xắc',
      dataIndex: 'color',
      key: 'color',
      align: 'center',
      render: (color: string) => (
        <div style={{ backgroundColor: color, width: '25%', height: '20px', borderRadius: "50%", marginLeft: 25 }}></div>
      ),
    },

    {
      title: 'Kích thước',
      dataIndex: 'size',
      key: 'size',
      align: 'center',
    },

    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      render: (quantity: number, record: any) => (
        <div className="quantity-container">
          <button
            className="quantity-button"
            onClick={() => {
              if (token) {
                handleMinus(record.key);
              } else {
                handleTru(record.key);
              }
            }}
          >
            -
          </button>
          <Input max={10} min={1}
            style={{ width: 100, height: 35, borderTop: "1px solid #dbd4d4", borderRadius: 0, borderBottom: "1px solid #dbd4d4" }}
            value={productQuantities[record.key] || quantity}
            className="quantity-input"
            readOnly
          />
          <button
            className="quantity-button"
            onClick={() => {
              if (token) {
                handleIncrease(record.key);
              } else {
                handleCong(record.key);
              }
            }}
          >
            +
          </button>
        </div>
      )
    },

    {
      title: 'Giá',
      dataIndex: 'price',
      align: 'center',
      render: (price: number) => (
        <span>
          {price ? price.toLocaleString('vi-VN', { style: "currency", currency: "VND" }) : 'Giá không xác định'}
        </span>
      )
    },

    {
      title: 'Xóa',
      key: 'action',
      render: ({ key: id }: any) => (
        <div className="flex space-x-4" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa không?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => {
              if (token) {
                confirm(id);
              } else {
                confirmCart(id);
              }
            }}
            okText={<span style={{ color: 'black' }}>Yes</span>}
            cancelText="No"
          >
            <DeleteFilled style={{ color: '#FF0000', fontSize: '20px' }} />
          </Popconfirm>
        </div>
      ),
      align: 'center',
    },

  ];

  const handleCheckout = () => {
    !selectedProducts.length ?
      messageApi.open({
        type: 'error',
        content: 'Hãy chọn sản phẩm trước !'
      })
      :
      navigate('/checkout', { state: { selectedProducts } });
  };

  return (
    <div className='w-[90vw] mx-auto mt-44'>
      {token && isLoading && <Loading />}
      {contextHolder}
      <div className="shopping-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="location">
                <ul>
                  <li><a href="index.html" title="go to homepage">Trang chủ<span>/</span></a>  </li>
                  <li><strong> Giỏ hàng</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table rowSelection={{ ...rowSelection, }} columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="totals">
                <h3>Tổng tiền <span>{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></h3>
                <div className="shopping-button">
                  <button className='' type="submit" onClick={handleCheckout}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart