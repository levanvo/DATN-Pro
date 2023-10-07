// import React from 'react'
// import { Button, Image, Popconfirm, Skeleton, Space, Table, Tag, message } from 'antd';
// import type { ColumnsType } from 'antd/es/table';
// import { useGetProductsQuery, useRemoveProductMutation } from '../../../Api/product';
// import { IProduct } from '../../../interfaces/product';
// import { useState } from "react";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { Link } from 'react-router-dom';
// // import { IColor } from '../../../Interface/color';
// interface DataType {
//     key: string;
//     name: string;
//     imgUrl: string;

// }
// type Props = {}

// const ProductsAdmin = (props: Props) => {

//     const { data: dataSource, isLoading: productLoading } = useGetProductsQuery()
//     // const { data: dataColors, isLoading: colorLoading } = useGetProductsQuery()
//     const [removeProduct, { isLoading: removeLoading }] = useRemoveProductMutation()
//     const [mesageApi, contextHolder] = message.useMessage()
//     const [removeLoadingMap, setRemoveLoadingMap] = useState<Record<number | string, boolean>>({});
//     const confirm = (id: string) => {
//         setRemoveLoadingMap((prevMap) => ({ ...prevMap, [id]: true }));

//         removeProduct(id).unwrap().then(() => {
//             mesageApi.open({
//                 type: "success",
//                 content: "Đã xóa thành công"
//             })
//         })
//         setRemoveLoadingMap((prevMap) => ({ ...prevMap, [id]: false }));
//     }
//     const columns: ColumnsType<DataType> = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//             render: (text: IProduct) => <a>{text}</a>,
//         },
//         {
//             title: 'Price',
//             dataIndex: 'price',
//             key: 'price',
//         },
//         {
//             title: 'Original Price',
//             dataIndex: 'original_price',
//             key: 'original_price',
//         },
//         {
//             title: 'Description',
//             dataIndex: 'description',
//             key: 'description',
//         },
//         {
//             title: 'Inventory Number',
//             dataIndex: 'inventory_number',
//             key: 'inventory_number',
//         },
//         {
//             title: 'Size ',
//             dataIndex: 'size',
//             key: 'size',
//         },
//         {
//             title: 'Color',
//             dataIndex: 'color',
//             key: 'color',
//             // render: (color) => {
//             //     const colors = dataColor.find((item) => item.id = color.id)
//             //     return colors ? colors : ""
//             // }
//         },
//         {
//             title: 'Image',
//             dataIndex: 'image',
//             key: 'image',
//             render: (text) => <Image
//                 width={50}
//                 src={text}
//             />,
//         },

//         {
//             title: 'Action',
//             key: 'action',
//             render: ({ key: id }) => (
//                 <Space size="middle">
//                     <Popconfirm
//                         placement="top"
//                         title={'Xóa sản phẩm'}
//                         description={"Có chắc muốn xóa"}
//                         onConfirm={() => confirm(id)}
//                         okText="Yes"
//                         cancelText="No"
//                     >
//                         <Button danger type="primary"> {removeLoadingMap[id] && removeLoading ? (
//                             <AiOutlineLoading3Quarters className="animate-spin" />
//                         ) : (
//                             "Xóa"
//                         )}</Button>
//                     </Popconfirm>

//                     <Button type="primary" className="bg-blue-500"><Link to={`/admin/products/${id}/update`}>Sửa</Link></Button>
//                 </Space>
//             ),
//         },
//     ];
//     const data = dataSource?.map((item: IProduct) => ({
//         key: item.id,
//         name: item.name,
//         price: item.price,
//         image: item?.imgUrl,
//         original_price: item.original_price,
//         description: item.description,
//         inventory_number: item.inventory_number,
//         color: item?.color,
//         size: item?.size,
//     }))


//     return (
//         <div>
//             {contextHolder}
//             <Button className="bg-blue-500 mb-5" type="primary"><Link to="/admin/products/add">Thêm sản phẩm </Link></Button>
//             {productLoading ? <Skeleton /> : <Table className="" columns={columns} dataSource={data} />}
//         </div>
//     )
// }

// export default ProductsAdmin  