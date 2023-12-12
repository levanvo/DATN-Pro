
import { useGetOrderByIdQuery, useUpdateOrderMutation } from '../Services/Api_Order';
import { Button, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { IOrder } from '../Models/interfaces';
import '../../css/user.css'
import UserMenu from '../Component/UserMenu';
import moment from 'moment';

const BillDetailHome = () => {
    const navigate = useNavigate()

    const { id } = useParams();
    const { data } = useGetOrderByIdQuery(id || "");
    console.log("dtaa", data)

    const [updateOrder] = useUpdateOrderMutation();
    const [messageApi, contextHolder] = message.useMessage()

    const onFinish = (values: IOrder) => {
        console.log("a", values);

        try {
            updateOrder({ ...values, _id: id }).unwrap().then(() => {
                messageApi.open({
                    type: "success",
                    content: "Hủy thành công"
                });
                setTimeout(() => {
                    window.location.href = 'http://localhost:5173/order/view';
                }, 2000);
            })
        } catch (error) {
            console.error("Lỗi khi cập nhật:", error);
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
            default:
                return {};
        }
    };

    return (
        <div className='container_u'>
            {contextHolder}
            <UserMenu />
            <div className='user_profile'>
                <div className="user_profile-head">
                    {/* <p style={{fontSize: 30}}>Đơn hàng Của Tôi</p> */}
                </div>
                <div style={{ marginBottom: 20 }}>
                    {data && (
                        <div className='order' >
                            <div style={{ margin: 25 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginBottom: 40, marginRight: 200 }}>
                                        <h2>Thông tin đơn hàng</h2>
                                        <p>Mã đơn hàng: {data?.code_order}</p>
                                        {/* <p>Tên khách hàng: {data?.userId?.username}</p> */}
                                        <p>Tên khách hàng: {data?.name}</p>
                                        <p style={getStatusColor(data?.status)}>Trạng thái: {getStatusText(data?.status)}</p>
                                        <p>Tổng giá trị đơn hàng: {data?.totalPrice.toLocaleString()}đ</p>
                                        <p>Thời gian: {`${new Date(data?.createdAt).toLocaleTimeString()} | ${new Date(data?.createdAt).toLocaleDateString()}`}</p>
                                        {/* <p>Ngày cập nhật: {new Date(data?.updatedAt).toLocaleString()}</p> */}
                                    </div>
                                    <div>
                                        <h2>Địa chỉ giao hàng</h2>
                                        {data?.address && (
                                            <div>
                                                <p>Thành phố: {data?.address?.city}</p>
                                                <p>Quận/Huyện: {data?.address?.district}</p>
                                                <p>Địa chỉ: {data?.address?.location}</p>
                                            </div>
                                        )}
                                        <p>Người nhận: {data?.name}</p>
                                        <p>Số điện thoại: {data?.phone}</p>
                                        <p>Ghi chú: {data?.note}</p>
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
                                                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
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
                                        <tr style={{marginTop: 20}}>
                                            <td colSpan={6} style={{ textAlign: 'right', fontWeight: 'bold', borderTop: '1px solid #ddd', padding: '8px' }}>Tổng tiền:</td>
                                            <td style={{ padding: '8px', textAlign: 'center', fontWeight: 'bold' }}>{data?.totalPrice.toLocaleString()}đ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
                <div style={{ marginLeft: 30 }}>
                    {/* <button style={{ borderRadius: 10, height: 40, marginRight: 20, backgroundColor: 'blue', color: 'white' }} onClick={() => onFinish({
                    ...data,
                    status: "1"
                    })}>
                        Xác nhận
                    </button> */}
                    {data?.status === '1' ? (
                        <Button style={{ height: 40, marginRight: 20 }} disabled>
                            Hủy
                        </Button>
                    ) : data?.status === '2' ? (
                        <Button style={{ height: 40, marginRight: 20 }} disabled>
                            Hủy
                        </Button>
                    ) : (
                        <button style={{ borderRadius: 10, height: 40, marginRight: 20, backgroundColor: 'red', color: 'white' }} onClick={() => onFinish({
                            ...data,
                            status: "2"
                        })}>
                            Hủy
                        </button>
                    )}
                    <Button style={{ height: 40 }} htmlType="button" onClick={() => navigate("/order/view")}>
                        Quay lại
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BillDetailHome;