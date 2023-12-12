import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneOrdersQuery, useUpdateOrderMutation } from '../../../Services/Api_Order';
import { IOrder } from '../../../Models/interfaces';
import { useGetOneUserQuery } from '../../../Services/Api_User';
import { Button, Popconfirm, message } from 'antd';

const DetailBill = () => {
    const { id } = useParams();
    const { data } = useGetOneOrdersQuery(id || "");
    // const { data: user } = useGetOneUserQuery(data?.userId)
    const navigate = useNavigate();

    const [updateOrder] = useUpdateOrderMutation();

    const onFinish = (values: IOrder) => {
        try {
            updateOrder({ ...values, _id: id }).unwrap().then(() => {
                window.location.href = 'http://localhost:5173/admin/bill/list';
            });
        } catch (error) {
            console.error("Lỗi khi cập nhật:", error);
        }
    };

    const handleConfirm = () => {
        onFinish({ ...data, status: '1' });
        message.success("Đơn hàng đã được xác nhận thành công");
    };

    const handleCancel = () => {
        onFinish({ ...data, status: '2' });
        message.success("Đơn hàng đã được hủy thành công");
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
                return { color: 'blue' };
            case '2':
                return { color: 'red' };
            case '3':
                return { color: 'brown' };
            case '4':
                return { color: 'blue' };
            default:
                return {};
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                {data && (
                    <div className='order' >
                        <div style={{ marginRight: 30, marginLeft: 30 }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginBottom: 40, marginRight: 200 }}>
                                    <h2>Thông tin đơn hàng</h2>
                                    <p>Mã đơn hàng: {data?.code_order}</p>
                                    <p>Người tạo: {data?.userId?.username}</p>
                                    <p style={getStatusColor(data?.status)}>Trạng thái: {getStatusText(data?.status)}</p>
                                    <p>Tổng giá trị đơn hàng: {data?.totalPrice}</p>
                                    <p>Ngày tạo: {new Date(data?.createdAt).toLocaleString()}</p>
                                    <p>Ngày cập nhật: {new Date(data?.updatedAt).toLocaleString()}</p>
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
                            <h2>Sản phẩm trong đơn hàng</h2>
                            <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
                                <thead>
                                    <tr>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '20%' }}>Mã sản phẩm</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '20%' }}>Tên sản phẩm</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '7%' }}>Số lượng</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '10%' }}>Giá</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '5%' }}>Màu sắc</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '5%' }}>Size</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2', width: '10%' }}>Ảnh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.products?.map((product: any) => (
                                        <tr key={product?._id}>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product?.productId?._id}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product?.productId?.name}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product?.quantity}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product?.price}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
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
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product?.size}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                                {product?.productId?.imgUrl && (
                                                    <img
                                                        src={product?.productId?.imgUrl?.[0]}
                                                        alt={product?.productId?.name}
                                                        style={{ width: '100px', height: '100px' }}
                                                    />
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <Popconfirm
                    title="Bạn có chắc chắn muốn xác nhận đơn hàng này?"
                    onConfirm={() => handleConfirm()}
                    okText="Yes"
                    cancelText="No"
                    disabled={data?.status === "2"}
                >
                    <Button
                        style={{
                            borderRadius: 10,
                            height: 40,
                            marginRight: 20
                        }}
                        disabled={data?.status === "2"}
                        className={data?.status === "0" ? "confirm-button" : "disabled-button"}
                    >
                        Xác nhận
                    </Button>
                </Popconfirm>
                <Popconfirm
                    title="Bạn có chắc chắn muốn hủy đơn hàng này?"
                    onConfirm={() => handleCancel()}
                    okText="Yes"
                    cancelText="No"
                    disabled={data?.status === "2"}
                >
                    <Button
                        style={{
                            borderRadius: 10,
                            height: 40,
                            marginRight: 20,
                            marginTop: 10,
                            marginBottom: 10
                        }}
                        disabled={data?.status === "2"}
                        className={data?.status === "0" ? "cancel-button" : "disabled-button"}
                    >
                        Hủy
                    </Button>
                </Popconfirm>
                <Button style={{ height: 40 }} htmlType="button" onClick={() => navigate("/admin/bill/list")}>
                    Quay lại
                </Button>
            </div>
        </div>
    );
};

export default DetailBill;