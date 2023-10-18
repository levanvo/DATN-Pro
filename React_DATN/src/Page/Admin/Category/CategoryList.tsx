import React from 'react'
import { useGetAllCategoryQuery, useRemoveCategoryMutation } from '../../../Services/Api_Category';
import { ICategory } from '../../../Models/interfaces';
import { Link, useNavigate } from "react-router-dom";
import { Button, Table, Popconfirm } from "antd";

const CategoryList = () => {
    const { data, error, isLoading } = useGetAllCategoryQuery();
    const [removeProduct] = useRemoveCategoryMutation();
    const navigate = useNavigate();
    if (error) return <div>Error.....</div>;
    if (isLoading) return <div>Loading....</div>;

    const dataSource = data?.data.map(({ _id, name, imgUrl }: ICategory) => {
        return {
            key: _id,
            name,
            imgUrl
        };
    });
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
                return (
                    <>
                        <Popconfirm
                            placement="topLeft"
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
        },
    ];
    const xoa = (id: any) => {
        if (true) {
            removeProduct(id);
            alert('xóa thành công')
           return navigate("/admin/category/list")
        } else {
            alert('xóa thất bại')
        }
        
    };
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl">Quản lý Category</h2>
                <Button type="primary" danger>
                    <Link to="/admin/category/add">Thêm Category</Link>
                </Button>
            </div>

            <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 7 }} />
        </div>
    );
}

export default CategoryList