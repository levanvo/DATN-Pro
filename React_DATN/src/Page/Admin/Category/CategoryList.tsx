import React, { useState } from 'react';
import { useGetAllCategoryQuery, useRemoveCategoryMutation } from '../../../Services/Api_Category';
import { ICategory } from '../../../Models/interfaces';
import { Link, useNavigate } from "react-router-dom";
import { Button, Table, Popconfirm, Input, message, Checkbox } from "antd";

const CategoryList = () => {
    const { data, error, isLoading } = useGetAllCategoryQuery();
    const [removeProduct] = useRemoveCategoryMutation();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [TimKiemValue, setTimKiemValue] = useState('');
    if (error) return <div>Error.....</div>;
    if (isLoading) return <div>Loading....</div>;
    //hàm xử lý tìm kiếm
    const handleSearch = (e: any) => {
        setTimKiemValue(e.target.value);
    };
    const dataSource = data?.data.map(({ _id, name }: ICategory) => {
        return {
            key: _id,
            name
        };
    });
    const filteredData = dataSource.filter((item) =>
        item.name.toLowerCase().includes(TimKiemValue.toLowerCase())
    );
    const toggleSelect = (id: any) => {
        if (selectedCategory.includes(id)) {
            // Sản phẩm đã được chọn, hãy loại bỏ nó
            setSelectedCategory(selectedCategory.filter((rowId) => rowId !== id));
        } else {
            // Sản phẩm chưa được chọn, hãy thêm nó vào danh sách
            setSelectedCategory([...selectedCategory, id]);
        }
    };


    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Action",
            key: "action",
            render: ({ key: id }: any) => {
                const isSelected = selectedCategory.includes(id);
                return (
                    <>
                        <Checkbox
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleSelect(id)}
                        />
                        <Popconfirm
                            placement="topLeft"
                            className="ml-2"
                            title={"Bạn có muốn xóa không?"}
                            onConfirm={() => xoa(id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button>
                                Delete
                            </Button>
                        </Popconfirm>
                        <Button type="primary" danger className="ml-2">
                            <Link to={`/admin/category/${id}/update`}>Edit</Link>
                        </Button>

                    </>
                );
            },
        }

    ];
    const xoa = (id: any) => {
        removeProduct(id)
            .unwrap()
            .then(() => {
                messageApi.open({
                    type: 'success',
                    content: 'Xóa danh mục thành công'
                });
                setTimeout(() => {
                    window.location.href = 'http://localhost:5173/admin/category/list'
                  }, 2000);
            }).catch((error) => {
                messageApi.error('Đã xảy ra lỗi khi xóa danh mục');
            });
    };
    const xoaHangLoat = async () => {
        if (selectedCategory.length === 0) {
            messageApi.error('Vui lòng chọn ít nhất một danh mục để xóa hàng loạt.');
            return;
        }

        const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa các danh mục đã chọn không?');

        if (!confirmDelete) {
            return;
        }

        try {
            // Lặp qua danh sách các danh mục đã chọn và xóa chúng
            for (const id of selectedCategory) {
                await removeProduct(id);
            }

            setSelectedCategory([]);

            messageApi.success('Xóa danh mục thành công');
            setTimeout(() => {
                window.location.href = 'http://localhost:5173/admin/category/list'
              }, 2000);
        } catch (error) {
            console.error('Lỗi xóa danh mục hàng loạt: ', error);
            messageApi.success('Lỗi xóa danh mục hàng loạt');
        }
    };
    return (
        <div>
            {contextHolder}
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-2xl">Quản lý Category</h2>
                    <Button type="primary" danger>
                        <Link to="/admin/category/add">Thêm Category</Link>
                    </Button>
                </div>

                <Input
                    className='ml-30'
                    placeholder="Tìm kiếm theo tên"
                    onChange={handleSearch}
                    value={TimKiemValue}
                    style={{ marginBottom: '10px', width: '200px' }}
                />
                <Button className='bg-red-500 text-white ml-4' type="danger" onClick={xoaHangLoat}>
                    Xóa danh mục hàng loạt
                </Button>
                <Table dataSource={filteredData} columns={columns} pagination={{ pageSize: 7 }} />
            </div>
        </div>
    );
}

export default CategoryList