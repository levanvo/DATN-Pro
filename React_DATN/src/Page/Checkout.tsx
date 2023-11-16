import { useState, useEffect } from "react"
import Select from 'react-select';
import vietnamData from '../Services/vietnamData'
import {
    LeftCircleOutlined
} from "@ant-design/icons"
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { IOrder } from "../Models/interfaces";
import { useAddOrderMutation } from "../Services/Api_Order";
import { useDeleteFromCartMutation } from "../Services/Api_cart";

const Checkout = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [selectedCity, setSelectedCity]: any = useState(null); //thành phố - tỉnh
    const [selectedDistrict, setSelectedDistrict]: any = useState(null);// quận - huyện
    const [getLocation, setLocation]: any = useState("");// vị trí cụ thể
    const [getNote, setNote]: any = useState("");// ghi chú (có thể có hoặc ko)
    const [getName, setName]: any = useState("");// tên
    const [getPhone, setPhone]: any = useState("");// sđt

    const [getDisscount, setDissccount]: any = useState("");// mã giảm giá
    const [getInfoSPcheckout, setInfoSPcheckout]: any = useState([]); // toàn bộ sản phẩm sẽ order
    const [getTotalPrice, setTotalPrice]: any = useState(0); // tổng giá bán
    const [selectedMethod, setSelectedMethod] = useState('cod'); // phương thức thanh toán
    const [addOrder]: any = useAddOrderMutation();
    const [removeCart]:any=useDeleteFromCartMutation();

    useEffect(() => {
        const infoSPcheckout = localStorage.getItem("infoOrder.shoe");
        const infoTotalSPcheckout = localStorage.getItem("totalPrice.shoe");
        if (infoSPcheckout && infoSPcheckout != null) {
            const decideGet = JSON.parse(infoSPcheckout);
            setInfoSPcheckout(decideGet);
        }

        if (infoTotalSPcheckout && infoTotalSPcheckout != null) {
            const decideGetTotalPrice = JSON.parse(infoTotalSPcheckout);
            setTotalPrice(decideGetTotalPrice)
        }
    }, []);


    const handleUseDisccount = () => {
        setIsVisible(!isVisible);
    };

    const handleCityChange = (selectedOption: any) => {
        setSelectedCity(selectedOption);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (selectedOption: any) => {
        setSelectedDistrict(selectedOption);
    };

    const getDistricts = () => {
        if (selectedCity) {
            const city = vietnamData.find((item) => item.value === selectedCity.value);
            if (city) {
                return city.districts;
            }
        }
    };

    const HandelLocation = (e: any) => {
        setLocation(e.target.value);
    };

    const HandelNote = (e: any) => {
        setNote(e.target.value);
    };

    const HandelName = (e: any) => {
        setName(e.target.value);
    };

    const HandelPhone = (e: any) => {
        setPhone(e.target.value);
    };

    const handlePaymentMethodChange = (event: any) => {
        setSelectedMethod(event.target.value);
    };

    const disccountProducts = () => {
        const disccount: any = document.querySelector("#valueDiscount");
        setDissccount(disccount.value);
    };

    const PaymentMethod = async () => {
        const quantity: number = getInfoSPcheckout.reduce((one: any, two: any) => {
            return one += two.quantity;
        }, 0);
        const user: any = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "null";

        if (!getName) { messageApi.open({ type: "error", content: "Nhập tên của bạn !" }); return };
        if (!getPhone) { messageApi.open({ type: "error", content: "Nhập số điện thoại của bạn !" }); return };
        if (/^\d{10}$/.test(getPhone)==false) { messageApi.open({ type: "error", content: "Số điện thoại không đúng định dạng !" }); return };
        if (selectedCity == undefined) { messageApi.open({ type: "error", content: "Chọn thành phố !" }); return };
        if (selectedDistrict == null) { messageApi.open({ type: "error", content: "Chọn quận - huyện !" }); return };
        if (!getLocation) { messageApi.open({ type: "error", content: "Nhập địa chỉ của bạn !" }); return };


        const ObjectOrder: any = {
            nameUser:getName,
            phone: getPhone,
            note: getNote?getNote:"null",
            status: "đang chờ giao hàng",//mặc định
            discount: "20%",
            methodPayment: selectedMethod,
            quantity: quantity,
            totalPrice: getTotalPrice,
            userID: user._id,
            address: {
                city: selectedCity.label,
                district: selectedDistrict.label,
                location: getLocation
            },
            codeID:`ID${Math.floor(Math.random() * 90000) + 10000}`
        };
        
        getInfoSPcheckout?.map((items:any)=>{
            removeCart(items.key);
        });
        getInfoSPcheckout?.map((items:any)=>{
            removeCart(items.key);
        });
        getInfoSPcheckout?.map((items:any)=>{
            removeCart(items.key);
        });
        getInfoSPcheckout?.map((items:any)=>{
            removeCart(items.key);
        });
        getInfoSPcheckout?.map((items:any)=>{
            removeCart(items.key);
        });
        addOrder(ObjectOrder);
        messageApi.open({
            type: "success",
            content: "Order thành công, vui lòng đợi 1 thời gian ngắn để nhận hàng.",
        });

        setTimeout(() => {
            navigate("/");
        }, 2200);

        console.log(ObjectOrder);

        // var string = 'Hello World!';

        // var encodedString = btoa(string);
        // console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

        // var decodedString = atob(encodedString);
        // console.log(decodedString); // Outputs: "Hello World!"
    };

    return (
        <div className='w-[90vw] mx-auto mt-44'>
            {contextHolder}
            <h2 className="text-center mb-3 text-gray-500">Checkout</h2>
            <div className=" mb-3 scale-150 mx-auto w-[800px]">
                <a href={`/cart`}><LeftCircleOutlined className="scale-150 text-gray-500 duration-100 hover:-ml-[2px] cursor-pointer w-6 " /></a>
            </div>
            <div className="flex justify-center space-x-14 box_shadow">
                <div className="w-[600px]">
                    <div className="checkout_content">
                        {getInfoSPcheckout?.map((items: any) => {
                            return <div className="checkout_products">
                                <div className="product_thumbnail">
                                    <a href="#">
                                        <img className="w-14" src={items.imgUrl} alt="product_name" />
                                    </a>
                                </div>
                                <div className="product_name">
                                    <a href="#">{items.name}</a>
                                    <div className="prduct_variation flex ">
                                        <span className="">kích cỡ: {items.size}</span>
                                        <span className="product_color flex ">màu: <div className="w-4 h-4 mt-[3px] rounded-full" style={{ background: `${items.color}` }}></div></span>
                                        <span className="">số lượng: {items.quantity}</span>
                                    </div>
                                </div>
                                <div className="product_quantity">
                                    <span>{items.price.toLocaleString()} &#8363;</span>
                                </div>
                            </div>
                        })}
                    </div>
                    <form action="" className="form_checkout">
                        <h3>THANH TOÁN VÀ GIAO HÀNG</h3>
                        <label htmlFor="name">Họ và tên <abbr className="required" title="bắt buộc">&#8727;</abbr></label>
                        <input onChange={HandelName} className="form_checkout-inp" type="text" name="name" placeholder="Họ tên của bạn" />
                        <label htmlFor="phone">Số điện thoại <abbr className="required" title="bắt buộc">&#8727;</abbr></label>
                        <input onChange={HandelPhone} className="form_checkout-inp" type="text" name="phone" placeholder="Số điện thoại của bạn" />
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
                        <input onChange={HandelLocation} className="form_checkout-inp" type="text" name="location" placeholder="Ví dụ: Số 20, ngõ 20" />
                        <label htmlFor="note">Ghi chú đơn hàng (không bắt buộc)</label>
                        <textarea onChange={HandelNote} name="note" id="" cols={5} rows={2} placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
                    </form>
                </div>
                <div className="order_reviews w-[400px]">
                    <div className="coupon">
                        <label htmlFor="" onClick={handleUseDisccount}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M47,21a1,1,0,0,0,1-1V12a3,3,0,0,0-3-3H18a1,1,0,0,0-1,1,2,2,0,0,1-4,0,1,1,0,0,0-1-1H3a3,3,0,0,0-3,3v8a1,1,0,0,0,1,1,3,3,0,0,1,0,6,1,1,0,0,0-1,1v8a3,3,0,0,0,3,3h9a1,1,0,0,0,1-1,2,2,0,0,1,4,0,1,1,0,0,0,1,1H45a3,3,0,0,0,3-3V28a1,1,0,0,0-1-1,3,3,0,0,1,0-6Zm-1,7.9V36a1,1,0,0,1-1,1H18.87a4,4,0,0,0-7.74,0H3a1,1,0,0,1-1-1V28.9a5,5,0,0,0,0-9.8V12a1,1,0,0,1,1-1h8.13a4,4,0,0,0,7.74,0H45a1,1,0,0,1,1,1v7.1A5,5,0,0,0,46,28.9Z" fill="#00ccff" /><path d="M14 17v2a1 1 0 0 0 2 0V17A1 1 0 0 0 14 17zM14 23v2a1 1 0 0 0 2 0V23A1 1 0 0 0 14 23zM14 29v2a1 1 0 0 0 2 0V29A1 1 0 0 0 14 29zM36.29 16.29l-14 14A1 1 0 0 0 23 32c.59 0-.53.94 14.71-14.29A1 1 0 0 0 36.29 16.29zM35 25a4 4 0 1 0 4 4A4 4 0 0 0 35 25zm0 6a2 2 0 1 1 2-2A2 2 0 0 1 35 31zM25 23a4 4 0 1 0-4-4A4 4 0 0 0 25 23zm0-6a2 2 0 1 1-2 2A2 2 0 0 1 25 17z" fill="#00ccff" /></svg>
                            Sử dụng mã giảm giá
                        </label>
                        {isVisible && <div className="coupon_inp flex">
                            <input type="text" placeholder="Mã ưu đãi" id="valueDiscount" />
                            <button onClick={() => disccountProducts()} type="submit">Áp dụng</button>
                        </div>}
                    </div>
                    {
                        selectedMethod == "cod" ?
                            <div className="flex justify-between">
                                <p className="font-bold">Giao hàng</p>
                                <p>Giao hàng miễn phí</p>
                            </div>
                            :
                            <div className="flex justify-between">
                                <p className="font-bold">Phí chuyển</p>
                                <p>Miễn phí chuyển</p>
                            </div>
                    }
                    <p className="order_cart-total">
                        <span>Tổng:</span>
                        <span>{getTotalPrice.toLocaleString()}&#8363;</span>
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
                                <label className="cursor-pointer" htmlFor="cod">Nhận hàng thanh toán (COD)</label>
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
                                <label className="cursor-pointer" htmlFor="transfer">Chuyển khoản ngân hàng</label>
                                <div className="transfer_extend" style={{ display: selectedMethod === 'transfer' ? 'block' : 'none' }}>
                                    <span>Quét mã qua ứng dụng Ngân hàng/ Ví điện tử</span>
                                    <div className="qr_code">
                                        <img src="../../img/codeqr_.png" alt="" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button onClick={() => PaymentMethod()}>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Checkout