import {useEffect} from 'react'
import { message,Popconfirm } from 'antd';
import { QuestionCircleOutlined,CloseOutlined } from '@ant-design/icons';
import { useDeleteFromCartMutation, useGetCartQuery } from '../Services/Api_cart';
// import { ICart } from '../Models/interfaces';

const Cart = () => {
    const { data: cartData, isLoading, error } = useGetCartQuery();
    console.log(cartData);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if(error){
            if("data" in error){
                const errorData = error.data as {message: string}
                messageApi.open({
                    type: "error",
                    content: errorData.message
                })
            }
        }
    },[error])
    
    const [deleteCart] = useDeleteFromCartMutation();

    const confirm = (productId: string) => {
        deleteCart(productId)
            .unwrap()
            .then(() => {
                messageApi.open({
                    type: 'success',
                    content: 'Xóa sản phẩm thành công'
                });
            })
            .catch((error) => {
                messageApi.error('Đã xảy ra lỗi khi xóa sản phẩm');
            });
    };

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className='w-[90vw] mx-auto mt-44'>
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
                                <table className="table-bordered table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{textAlign: "center"}} className="cart-item-img">Hình ảnh</th>
                                            <th style={{textAlign: "center"}} className="cart-product-name">Tên sản phẩm</th>
                                            <th style={{textAlign: "center"}} className="unit-price">Giá</th>
                                            <th style={{textAlign: "center"}} className="quantity">Số lượng</th>
                                            <th style={{textAlign: "center"}} className="subtotal">Tổng tiền</th>
                                            <th style={{textAlign: "center"}} className="remove-icon">Công cụ</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {cartData?.products.map((product: any) => (
                                            <tr key={product._id}>
                                                <td className="cart-item-img">
                                                    <a href="#">
                                                        <img src={product.productId.imgUrl[0]} alt="" width={100} style={{ margin: 'auto' }} />
                                                    </a>
                                                </td>
                                                <td className="cart-product-name">
                                                    <a href="single-product.html">{product.productId.name}</a>
                                                </td>

                                                <td className="unit-price">
                                                    <span>{product.productId.original_price}đ</span>
                                                </td>
                                                <td className="quantity">
                                                    <span>{product.quantity}</span>
                                                </td>
                                                <td className="subtotal">
                                                    <span>{product.quantity * product.productId.price}đ</span>
                                                </td>
                                                <td className="flex remove-icon" style={{justifyContent: 'center', alignItems: "center"}}>
                                                    <div>

                                                    <Popconfirm
                                                        title="Bạn có chắc chắn muốn xóa không?"
                                                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                        onConfirm={() => confirm(product._id)}
                                                        okText={
                                                        <span style={{ color: 'black'}}>Yes</span>
                                                        }
                                                        cancelText="No"
                                                    >
                                                    <CloseOutlined style={{color: '#FF0000',fontSize: "20px"}}/>
                                                    </Popconfirm>
                                                    </div>
                                                        
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="shopping-button">
                                    <div className="continue-shopping">
                                        <button type="submit">continue shopping</button>
                                    </div>
                                    <div className="shopping-cart-left">
                                        <button type="submit">Clear Shopping Cart</button>
                                        <button type="submit">Update Shopping Cart</button>
                                    </div>
                                </div>
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
