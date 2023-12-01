import {useEffect, useState} from 'react'
import { message,Popconfirm, Table } from 'antd';
import {QuestionCircleOutlined ,DeleteFilled} from "@ant-design/icons"
import { useAddToCartMutation, useDeleteFromCartMutation, useGetCartQuery, useUpdateCartMutation } from '../Services/Api_cart';
import { ProductItem } from '../Models/interfaces';
import { Input,Button } from 'antd';
import Loading from '../Component/Loading';
import "../App.scss"
import {Link, useNavigate} from "react-router-dom"

const Cart = () => {
    const { data: cartData, isLoading, error } = useGetCartQuery();
    const [messageApi, contextHolder] = message.useMessage();
    const [deleteCart] = useDeleteFromCartMutation();
    const [selectedProductId, setSelectedProductId] = useState<React.Key[]>([])
    const [addToCart] = useAddToCartMutation()
    const [localCart, setLocalCart] = useState<any[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
    const token = localStorage.getItem('token');
    const [productQuantities, setProductQuantities] = useState<any>({});
    const [updateQuantity] = useUpdateCartMutation()
    const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
    const navigate = useNavigate()

    const rowSelection = {
      selectedRowKeys: selectedProductId,
      onChange: (selectedRowKeys: React.Key[]) => {
        setSelectedProductId(selectedRowKeys);
    
        // Lấy danh sách sản phẩm được chọn
        const selectedProducts = dataSource.filter((product) => selectedRowKeys.includes(product.key));
        console.log(selectedProducts);
        
        setSelectedProducts(selectedProducts);
      },
    };
    
      

    // Khai báo biến dataSource
    let dataSource: any[] = [];
      
      
      
      const updatedDataSource = cartData?.products.map((product: any) => {
        return {
          key: product._id,
          productId: product.productId._id,
          name: product.productId.name,
          price: product.price,
          imgUrl: product.productId.imgUrl[0],
          color: product.color,
          size: product.size,
          quantity: productQuantities[product._id] || product.quantity,
        };
      });

      dataSource = updatedDataSource
      
      // thực hiện tính tổng tiền với người dùng k có tài khoản
      const calculateTotal = () => {
        if (token) {
          let total = 0;

          selectedProducts.forEach((product) => {
            total += product.price * (product.quantity);
          });

          return total;
        } else {
          // Nếu không có token, thực hiện tính tổng tiền từ localCart
          let total = 0;

          selectedProducts.forEach((product) => {
            total += product.price * (product.quantity);
          });

          return total;
        }
      };


    const [totalAmount, setTotalAmount] = useState<number>(calculateTotal());
      
      useEffect(() => {
        // Gọi hàm updateTotalAmount khi selectedProducts thay đổi
        updateTotalAmount();
      }, [selectedProducts]);

      //Cập nhật tổng tiền mỗi khi thực hiện chọn sản phẩm
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
    
          addToCart({
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
        console.log(productToUpdate);
        
        if (productToUpdate) {

          if(productToUpdate.quantity==0){
            const updatedProductQuantities = {
              ...productQuantities,
              [productId]: (productToUpdate.quantity) - 1,
            };
            setProductQuantities(updatedProductQuantities)
            updateQuantity({
              productId: productToUpdate.productId._id,
              color: productToUpdate.color,
              size: productToUpdate.size,
              quantity: 1,
              price: productToUpdate.productId.price
            });
          }else{
            const updatedProductQuantities = {
              ...productQuantities,
              [productId]: (productToUpdate.quantity) - 1,
            };
            setProductQuantities(updatedProductQuantities);
      
            updateQuantity({
              productId: productToUpdate.productId._id,
              color: productToUpdate.color,
              size: productToUpdate.size,
              quantity: 1,
              price: productToUpdate.productId.price
            });
          }
          
        }
      };

      // Hàm giảm số lượng khi người dùng không có tài khoản
      const handleTru = (productId: string) => {
        const productToUpdate = localCart.find((product: any) => product.id === productId);
      
        if (productToUpdate && productToUpdate.quantity > 1) {
          const updatedLocalCart = localCart.map((product) =>
            product.id === productId
              ? {
                  ...product,
                  quantity: product.quantity - 1,
                }
              : product
          );
          setLocalCart(updatedLocalCart);
          localStorage.setItem('cart', JSON.stringify(updatedLocalCart));
        }else{
          message.error("Số lượng không thể giảm thêm")
        }
      };

       // Hàm tăng số lượng khi người dùng có tài khoản
       const handleCong = (productId: string) => {
        const productToUpdate = localCart.find((product: any) => product.id === productId);
      
        if (productToUpdate && productToUpdate.quantity < 10) {
          const updatedLocalCart = localCart.map((product) =>
            product.id === productId
              ? {
                  ...product,
                  quantity: product.quantity + 1,
                }
              : product
          );
                
          setLocalCart(updatedLocalCart);
          localStorage.setItem('cart', JSON.stringify(updatedLocalCart));
        }else{
          message.error("Số lượng không thể tăng thêm")
        }
      };
      

      if(token){
        dataSource
      }else{  
          dataSource = localCart.map((product: any) => {
            return {
                key: product.id,
                name: product.name,
                price: product.price,
                imgUrl: product.imgUrl,
                color: product.color,
                size: product.size,
                quantity: productQuantities[product.productId] || product.quantity,
            };

        });
        
      }
      

      // Hàm thực hiện xóa sản phẩm của người dùng không có tài khoản
      const confirmCart = (productId: string) => {
      
        // Thực hiện xóa sản phẩm khỏi localStorage khi không có token
        const deleteCart = localCart.filter((product: any) => product.id !== productId);
        localStorage.setItem('cart', JSON.stringify(deleteCart));
        setLocalCart(deleteCart);
        messageApi.open({
          type: 'success',
          content: 'Xóa sản phẩm khỏi giỏ hàng thành công',
        });
      };
      

    // Hàm thực hiện xóa sản phẩm của người dùng có tài khoản
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
            <div style={{ backgroundColor: color, width: '25%', height: '20px',borderRadius: "50%",marginLeft:25}}></div>
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
          render: (quantity:number,record: any) => (
            <div className="quantity-container">
        <button
          className="quantity-button"
          onClick={() => {
            if (token) {
              handleMinus(record.key); // Thực hiện handleMinus nếu có token
            } else {
              handleTru(record.key); // Thực hiện handleTru nếu không có token
            }
          }}
        >
          -
        </button>
        <Input max={10} min={1} 
        style={{borderTop: "1px solid #dbd4d4", borderRadius:0, borderBottom: "1px solid #dbd4d4"}}
        value={productQuantities[record.key] || quantity}
          className="quantity-input"
          readOnly
        />
        <button
          className="quantity-button"
          onClick={() => {
            if (token) {
              handleIncrease(record.key); // Thực hiện handleIncrease nếu có token
            } else {
              handleCong(record.key); // Thực hiện handleCong nếu không có token
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
          title: 'Action',
          key: 'action',
          render: ({ key: id }: any) => (
            <div className="flex space-x-4" style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Popconfirm
                title="Bạn có chắc chắn muốn xóa không?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => {
                  if (token) {
                    confirm(id); // Thực hiện confirm nếu có token
                  } else {
                    confirmCart(id); // Thực hiện confirmCart nếu không có token
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
        navigate('/checkout', { state: { selectedProducts } });
    };
    // console.log(selectedProducts);
    
    return (
        <div className='w-[90vw] mx-auto mt-44'>
            {isLoading && <Loading />}
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
                          {/* <p>Subtotal <span>{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></p> */}
                          <h3>Tổng tiền <span>{totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></h3>
                          <div className="shopping-button"> 
                            <button type="submit" onClick={handleCheckout}>Checkout</button>
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