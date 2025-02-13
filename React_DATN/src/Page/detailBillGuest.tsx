
import { useGetOrderByIdQuery, useUpdateOrderMutation } from '../Services/Api_Order';
import { Button, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { IOrder } from '../Models/interfaces';
import '../../css/user.css'
import UserMenu from '../Component/UserMenu';
import Loading from '../Component/Loading';
import { useState } from 'react';


const BillDetailGuest = () => {
    const navigate = useNavigate()

    const { id } = useParams();
    const { data,isLoading } = useGetOrderByIdQuery(id || "");
    const [loadingDelete,setLoadingDelete] = useState(false)
    const [updateOrder] = useUpdateOrderMutation();
    const [messageApi, contextHolder] = message.useMessage()

    const onFinish = (values: IOrder) => {
        setLoadingDelete(true)
        try {
            updateOrder({ ...values, _id: id }).unwrap().then(() => {
                messageApi.open({
                    type: "success",
                    content: "Hủy thành công"
                });
                setLoadingDelete(false)
                setTimeout(() => {
                    navigate("/order/view")
                }, 2000);
            })
        } catch (error) {
            console.error("Lỗi khi cập nhật:", error);
            setLoadingDelete(false)
        }
    };

    const getStatusText = (status: any) => {
        switch (status) {
            case '0':
                return 'Đang chờ xác nhận';
            case '1':
                return 'Đã xác nhận';
            case '2':
                return 'Đã hủy';
            case '3':
                return 'Đang giao hàng';
            case '4':
                return 'Đã nhận hàng';
            default:
                return '';
        }
    };
    const getStatusColor = (status: any) => {
        switch (status) {
            case '0':
                return { color: 'orange' };
            case '1':
                return { color: 'green' };
            case '2':
                return { color: 'red' };
            case '3':
                return { color: '#FFD700' };
            case '4':
                return { color: 'blue' };
            default:
                return {};
        }
    };

    const isCancelButtonDisabled = ['1', '2', '3', '4'].includes(data?.status);

    return (
        <div className='container_u'>
            {loadingDelete && <Loading />}
            {contextHolder}
            <UserMenu />
            {isLoading ? <Loading /> : <div className='user_profile'>
                <div className="user_profile-head">
                    {/* <p style={{fontSize: 30}}>Đơn hàng Của Tôi</p> */}
                </div>
                <div style={{ marginBottom: 20 }}>
                    {data && (
                        <div className='order' >
                            <div style={{ margin: 25 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginBottom: 40, marginRight: 200 }}>
                                        <h3>Thông tin đơn hàng</h3>
                                        <p style={{fontSize: 18}}>Mã đơn hàng: {data?.code_order}</p>
                                        {/* <p>Tên khách hàng: {data?.userId?.username}</p> */}
                                        <p style={{fontSize: 18}}>Tên khách hàng: {data?.name}</p>
                                        <p style={getStatusColor(data?.status)}>Trạng thái: {getStatusText(data?.status)}</p>
                                        <p style={{fontSize: 18}}>Tổng giá trị đơn hàng: {data?.totalPrice.toLocaleString()}đ</p>
                                        <p>Thời gian: {`${new Date(data?.createdAt).toLocaleTimeString()} | ${new Date(data?.createdAt).toLocaleDateString()}`}</p>
                                        {/* <p>Ngày cập nhật: {new Date(data?.updatedAt).toLocaleString()}</p> */}
                                    </div>
                                    <div style={{display: "block", margin: "0 auto"}}>
                                        <h3>Địa chỉ giao hàng</h3>
                                        {data?.address && (
                                            <div>
                                                <p style={{fontSize: 18}}>Thành phố: {data?.address?.city}</p>
                                                <p style={{fontSize: 18}}>Quận/Huyện: {data?.address?.district}</p>
                                                <p style={{fontSize: 18}}>Địa chỉ: {data?.address?.location}</p>
                                            </div>
                                        )}
                                        <p style={{fontSize: 18}}>Người nhận: {data?.name}</p>
                                        <p style={{fontSize: 18}}>Số điện thoại: {data?.phone}</p>
                                        <p style={{fontSize: 18}}>Ghi chú: {data?.note}</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginRight: 30, marginLeft: 30 }}>
                                {/* <h2>Sản phẩm trong đơn hàng</h2> */}
                                <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
                                    <thead>
                                        <tr>
                                            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '20%', textAlign: 'center' }}>Mã sản phẩm</th>
                                            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '20%', textAlign: 'center' }}>Tên sản phẩm</th>
                                            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '15%', textAlign: 'center' }}>Ảnh</th>
                                            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '8%', textAlign: 'center' }}>Màu sắc</th>
                                            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '5%', textAlign: 'center' }}>Size</th>
                                            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '7%', textAlign: 'center' }}>Số lượng</th>
                                            <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '10%', textAlign: 'center' }}>Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.products?.map((product: any) => (
                                            <tr key={product?._id}>
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product?.productId?._id}</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product?.productId?.name}</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center',display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    {product?.productId?.imgUrl && (
                                                        <img
                                                            src={product?.productId?.imgUrl?.[0]}
                                                            alt={product?.productId?.name}
                                                            style={{ width: '100px', height: '100px' }}
                                                        />
                                                    )}
                                                </td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                                                    <div
                                                        style={{
                                                            backgroundColor: product?.color,
                                                            width: '20px',
                                                            height: '20px',
                                                            marginLeft: 'auto',
                                                            marginRight: 'auto',
                                                        }}
                                                    ></div>
                                                </td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product?.size}</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product?.quantity}</td>
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{product?.price.toLocaleString()}đ</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={6} style={{ textAlign: 'right', fontWeight: 600, borderTop: '1px solid #ddd', paddingTop: 30,fontSize:18,color:"black" }}>Tổng tiền:</td>
                                            <td style={{ paddingTop: 30, textAlign: 'center', fontWeight: 600,fontSize:18, color:"black" }}>{data?.totalPrice.toLocaleString()}đ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
                <div style={{ marginLeft: 30 }}>
                    <Button
                        style={{ borderRadius: 10, height: 40, marginRight: 20, backgroundColor: isCancelButtonDisabled ? 'gray' : 'red', color: 'white' }}
                        onClick={() => onFinish({
                            ...data,
                            status: "2"
                        })}
                        disabled={isCancelButtonDisabled}
                    >
                        Hủy
                    </Button>
                    <Button style={{ height: 40 }} htmlType="button" onClick={() => navigate("/order/view/guest")}>
                        Quay lại
                    </Button>
                </div>
            </div>}
            
        </div>
    );
};

export default BillDetailGuest;