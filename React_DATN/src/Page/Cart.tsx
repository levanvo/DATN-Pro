import {useEffect, useState} from 'react'
import { message,Popconfirm, Table } from 'antd';
import {QuestionCircleOutlined ,DeleteFilled} from "@ant-design/icons"
import { useAddToCartMutation, useDeleteFromCartMutation, useGetCartQuery, useUpdateCartMutation } from '../Services/Api_cart';
import { ProductItem } from '../Models/interfaces';
import { Input,Button } from 'antd';
import Loading from '../Component/Loading';
import "../App.scss"

const Cart = () => {
    const { data: cartData, isLoading, error } = useGetCartQuery();
    const [messageApi, contextHolder] = message.useMessage();
    const [deleteCart] = useDeleteFromCartMutation();
    const [selectedProductId, setSelectedProductId] = useState<React.Key[]>([])
    const [addToCart] = useAddToCartMutation()
    const [localCart, setLocalCart] = useState<any[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
    const token = localStorage.getItem('token');
    const [productQuantities, setProductQuantities] = useState<any>({});
    const [isPlus, setIsPlus] = useState(false);
    const [isMinus, setIsMinus] = useState(false);
    const [updateQuantity] = useUpdateCartMutation()

    const rowSelection = {
        selectedRowKeys: selectedProductId,
        onChange: (selectedRowKeys: React.Key[]) => {
          setSelectedProductId(selectedRowKeys)
        },
      };
      

    // Khai báo biến dataSource
    let dataSource: any[] = [];
      
      
      
      const updatedDataSource = cartData?.products.map((product: any) => {
        return {
          key: product._id,
          name: product.productId.name,
          price: product.productId.price,
          imgUrl: product.productId.imgUrl[0],
          color: product.color,
          size: product.size,
          quantity: productQuantities[product._id] || product.quantity,
        };
      });

      dataSource = updatedDataSource
      

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
          });
        }
      };
    
      
      const handleMinus = (productId: string) => {
        const productToUpdate = cartData?.products.find((product: any) => product._id === productId);
    
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
        if(isPlus){
          handleIncrease(cartData.products.productId);
        }

        if(isMinus){
          handleMinus(cartData.products.productId)
        }
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
      console.log(dataSource);
      

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
            setIsMinus(true);
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
            setIsMinus(true);
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
                            <div className="discount-code">
                                <h3>Discount Codes</h3>
                                <p>Enter your coupon code if you have one.</p>
                                <input type="text" />
                                <div className="shopping-button">
                                    <button type="submit">apply coupon</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="estimate-shipping">
                                <h3>Estimate Shipping and Tax</h3>
                                <p>Enter your destination to get a shipping estimate.</p>
                                <form action="#">
                                    <div className="form-box">
                                        <div className="form-name">
                                            <label> country <em>*</em> </label>
                                            <select>
                                                <option value="1">Afghanistan</option>
                                                <option value="1">Algeria</option>
                                                <option value="1">American Samoa</option>
                                                <option value="1">Australia</option>
                                                <option value="1">Bangladesh</option>
                                                <option value="1">Belgium</option>
                                                <option value="1">Bosnia and Herzegovina</option>
                                                <option value="1">Chile</option>
                                                <option value="1">China</option>
                                                <option value="1">Egypt</option>
                                                <option value="1">Finland</option>
                                                <option value="1">France</option>
                                                <option value="1">United State</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-box">
                                        <div className="form-name">
                                            <label> State/Province </label>
                                            <select>
                                                <option value="1">Please select region, state or province</option>
                                                <option value="1">Arizona</option>
                                                <option value="1">Armed Forces Africa</option>
                                                <option value="1">California</option>
                                                <option value="1">Florida</option>
                                                <option value="1">Indiana</option>
                                                <option value="1">Marshall Islands</option>
                                                <option value="1">Minnesota</option>
                                                <option value="1">New Mexico</option>
                                                <option value="1">Utah</option>
                                                <option value="1">Virgin Islands</option>
                                                <option value="1">West Virginia</option>
                                                <option value="1">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-box">
                                        <div className="form-name">
                                            <label> Zip/Postal Code </label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="shopping-button">
                                        <button type="submit">get a quote</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="totals">
                                <p>subtotal <span>$1,540.00</span> </p>
                                <h3>Grand Total <span>$1,540.00</span></h3>
                                <div className="shopping-button">
                                    <button type="submit">proceed to checkout</button>
                                </div>
                                <a href="#">Checkout with Multiple Addresses</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
