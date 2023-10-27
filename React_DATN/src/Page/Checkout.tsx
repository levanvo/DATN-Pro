import React, { useState } from "react"
import Select from 'react-select';
import vietnamData from '../Services/vietnamData'

const Checkout = () => {
    // kiểm tra ng dùng có chọn sử dụng mã giảm giá không
    const [isVisible, setIsVisible] = useState(false);

    const handleLabelClick = () => {
        setIsVisible(!isVisible);

    };

    // tăng giảm số lượng
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    // lựa chọn tỉnh thành 
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        setSelectedDistrict(null); // Reset lựa chọn quận/huyện khi thay đổi tỉnh/thành phố
    };

    const handleDistrictChange = (selectedOption) => {
        setSelectedDistrict(selectedOption);
    };

    // Lấy danh sách quận/huyện dựa trên tỉnh/thành phố đã chọn
    const getDistricts = () => {
        if (selectedCity) {
            const city = vietnamData.find((item) => item.value === selectedCity.value);
            if (city) {
                return city.districts;
            }
        }
    }

    // lựa chọn hình thức tt
    const [selectedMethod, setSelectedMethod] = useState('cod');

    const handlePaymentMethodChange = (event) => {
        setSelectedMethod(event.target.value);
    };


    return (
        <div className='w-[90vw] mx-auto mt-44'>
            <div className="checkout-area">
                <div className="container">
                    <h2 className="checkout_title">Checkout</h2>
                    <div className="box_shadow">
                        <div className="checkout_content">
                            <div className="checkout_products">
                                <div className="product_thumbnail">
                                    <a href="#">
                                        <img className="product_thumbnail-img" src="../../img/product/13.png" alt="product_name" />
                                    </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                    </svg>
                                </div>
                                <div className="product_name">
                                    <a href="#">Nike KD VII 7 GS Boys Girls</a>
                                    <div className="prduct_variation">
                                        <span className="product_size">Size: 39</span>
                                        <span className="product_color">Color: Black</span>
                                    </div>
                                </div>
                                <div className="product_quantity">
                                    <span>896.000&#8363;</span>
                                    <div className="quantity">
                                        <button onClick={decreaseQuantity}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 auto" }} width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </button>
                                        <input type="text" inputMode="numeric" value={quantity} />
                                        <button onClick={increaseQuantity}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="coupon">
                                <label htmlFor="" onClick={handleLabelClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M47,21a1,1,0,0,0,1-1V12a3,3,0,0,0-3-3H18a1,1,0,0,0-1,1,2,2,0,0,1-4,0,1,1,0,0,0-1-1H3a3,3,0,0,0-3,3v8a1,1,0,0,0,1,1,3,3,0,0,1,0,6,1,1,0,0,0-1,1v8a3,3,0,0,0,3,3h9a1,1,0,0,0,1-1,2,2,0,0,1,4,0,1,1,0,0,0,1,1H45a3,3,0,0,0,3-3V28a1,1,0,0,0-1-1,3,3,0,0,1,0-6Zm-1,7.9V36a1,1,0,0,1-1,1H18.87a4,4,0,0,0-7.74,0H3a1,1,0,0,1-1-1V28.9a5,5,0,0,0,0-9.8V12a1,1,0,0,1,1-1h8.13a4,4,0,0,0,7.74,0H45a1,1,0,0,1,1,1v7.1A5,5,0,0,0,46,28.9Z" fill="#00ccff" /><path d="M14 17v2a1 1 0 0 0 2 0V17A1 1 0 0 0 14 17zM14 23v2a1 1 0 0 0 2 0V23A1 1 0 0 0 14 23zM14 29v2a1 1 0 0 0 2 0V29A1 1 0 0 0 14 29zM36.29 16.29l-14 14A1 1 0 0 0 23 32c.59 0-.53.94 14.71-14.29A1 1 0 0 0 36.29 16.29zM35 25a4 4 0 1 0 4 4A4 4 0 0 0 35 25zm0 6a2 2 0 1 1 2-2A2 2 0 0 1 35 31zM25 23a4 4 0 1 0-4-4A4 4 0 0 0 25 23zm0-6a2 2 0 1 1-2 2A2 2 0 0 1 25 17z" fill="#00ccff" /></svg>
                                    Sử dụng mã giảm giá
                                </label>
                                {isVisible && <div className="coupon_inp">
                                    <input type="text" placeholder="Mã ưu đãi" />
                                    <button type="submit">Áp dụng</button>
                                </div>}
                                <div className="total_review">
                                    <span>Tạm tính (1 sản phẩm): </span>
                                    <span>896.000&#8363;</span>
                                </div>
                            </div>
                        </div>
                        <form action="" className="form_checkout">
                            <h3>THANH TOÁN VÀ GIAO HÀNG</h3>
                            <label htmlFor="name">Họ và tên <abbr className="required" title="bắt buộc">&#8727;</abbr></label>
                            <input className="form_checkout-inp" type="text" name="name" placeholder="Họ tên của bạn" />
                            <label htmlFor="phone">Số điện thoại <abbr className="required" title="bắt buộc">&#8727;</abbr></label>
                            <input className="form_checkout-inp" type="text" name="phone" placeholder="Số điện thoại của bạn" />
                            <div className="selections">
                                <div className="selection">
                                    <label htmlFor="">Tỉnh/Thành phố  <abbr className="required" title="bắt buộc">&#8727;</abbr></label>
                                    <Select
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        options={vietnamData}
                                        placeholder="Chọn tỉnh thành phố"
                                    />
                                </div>
                                <div className="selection">
                                    <label htmlFor="">Quận/Huyện  <abbr className="required" title="bắt buộc">&#8727;</abbr></label>
                                    <Select
                                        value={selectedDistrict}
                                        onChange={handleDistrictChange}
                                        options={getDistricts()}
                                        placeholder="Chọn quận huyện"
                                        isDisabled={!selectedCity}
                                    />
                                </div>
                            </div>
                            <label htmlFor="address">Địa chỉ <abbr className="required" title="bắt buộc">&#8727;</abbr></label>
                            <input className="form_checkout-inp" type="text" name="address" placeholder="Ví dụ: Số 20, ngõ 20" />
                            <label htmlFor="note">Ghi chú đơn hàng (tuỳ chọn)</label>
                            <textarea name="note" id="" cols={5} rows={2} placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
                        </form>
                        <div className="order_reviews">
                            <p className="order_cart-subtotal">
                                <span>Tạm tính (1 sản phẩm):</span>
                                <span>896.000&#8363;</span>
                            </p>
                            <p className="order_cart-shipping">
                                <span>Giao hàng</span>
                                <span>Giao hàng miễn phí</span>
                            </p>
                            <p className="order_cart-total">
                                <span>Tổng:</span>
                                <span>896.000&#8363;</span>
                            </p>
                            <div className="select_payment">
                                <ul>
                                    <li>
                                        <input
                                            id="cod"
                                            type="radio"
                                            className="select_payment-inp"
                                            name="payment_method-cod"
                                            value="cod"
                                            checked={selectedMethod === 'cod'}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor="cod">Nhận hàng thanh toán (COD)</label>
                                        <div className="cod_extend" style={{ display: selectedMethod === 'cod' ? 'block' : 'none' }}>
                                            Nhận hàng rồi thanh toán (COD)
                                        </div>
                                    </li>
                                    <li>
                                        <input
                                            id="transfer"
                                            type="radio"
                                            className="select_payment-inp"
                                            name="payment_method-transfer"
                                            value="transfer"
                                            checked={selectedMethod === 'transfer'}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor="transfer">Chuyển khoản ngân hàng</label>
                                        <div className="transfer_extend" style={{ display: selectedMethod === 'transfer' ? 'block' : 'none' }}>
                                            <span>Quét mã qua ứng dụng Ngân hàng/ Ví điện tử</span>
                                            <div className="qr_code">
                                                <img src="../../img/codeqr_.png" alt="" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button>Đặt hàng</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Checkout