import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useLocation ,useNavigate } from 'react-router-dom';
import { useAddOrderMutation } from "../Services/Api_Order"

const CheckOutSuccess = () => {
    const location = useLocation();    
    const navigate=useNavigate();
    const [addOrder, { error }] = useAddOrderMutation();
    const [statusOrder, setStatusOrder] = useState(true);
    const [localCart, setLocalCart] = useState<any[]>(
        JSON.parse(localStorage.getItem("cart") || "[]")
      )

    const contentSuccess = {
        title: 'Bạn đã thanh toán thành công !',
        image: "https://npay-214706.as.r.appspot.com/npay/660_0/cong-thanh-toan-la-gi-loi-ich-cua-cong-thanh-toan-dien-tu-1676616433.jpg",
    };

    const contentFail = {
        title: 'Bạn đã thanh toán thất bại!',
        image: "https://hieugoogle.vn/wp-content/uploads/that-bai-la-gi.jpg",
    };

    useEffect(() => {
        const fetchData = async () => {
            if (location.search.includes('vnp_ResponseCode=00')) {
                let orderDataString = localStorage.getItem('orderData')
                let orderItemData= localStorage.getItem('orderItemData')

                if(orderDataString){
                    let dataOrder = JSON.parse(orderDataString);
                    await addOrder(dataOrder)
                    localStorage.removeItem('orderData');
                    setTimeout(()=>{
                        navigate("/")
                    },2000)
                }

                if(orderItemData){
                    let dataOrder = JSON.parse(orderItemData);
                    await addOrder(dataOrder)
                    const cartId = dataOrder.cartId
                    const updatedLocalCart = localCart.filter((item) => !cartId.includes(item.id));
                    setLocalCart(updatedLocalCart);
                    localStorage.setItem('cart', JSON.stringify(updatedLocalCart));
                    localStorage.removeItem('orderItemData');
                    setTimeout(()=>{
                        navigate("/order/view/guest")
                    },2000)
                }
                setStatusOrder(true);
            } else {
                setStatusOrder(false);
            }
        }     

        fetchData();
    },[location.search]);

    
    return (
        <div className='w-[90vw] mx-auto mt-44'>
            <div className="wapper text-center">
                <h1>{statusOrder ? contentSuccess.title : contentFail.title}</h1>
                <img className='m-auto' src={`${statusOrder ? contentSuccess.image : contentFail.image}`} alt="" />
            </div>
        </div>
    )
}

export default CheckOutSuccess