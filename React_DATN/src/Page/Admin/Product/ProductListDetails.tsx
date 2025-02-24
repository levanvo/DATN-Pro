import React from 'react';
import { Table, Tag, Button, Popconfirm, message } from 'antd';
import { useGetOneProductQuery, useDeleteVariantMutation } from '../../../Services/Api_Product';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { QuestionCircleOutlined, DeleteFilled } from '@ant-design/icons';
import Loading from '../../../Component/Loading';

const ProductListDetails = () => {
  const [removeVariant] = useDeleteVariantMutation()
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage()
  const { data: productDataOne, isLoading: isLoadingProduct }: any = useGetOneProductQuery(id || "");
  const flattenedData = productDataOne?.variants?.map((variant: any) => {
    return {
      key: variant._id,
      name: productDataOne.name,
      imgUrl: variant.imgUrl[0], // Assuming imgUrl is an array and you want the first element
      size: variant?.size_id?.name,
      color: {
        name: variant.color_id?.name || 'N/A',
        unicode: variant.color_id?.unicode || 'N/A',
      },
      quantity: variant.quantity || 0,
      sell_quantity: variant.sell_quantity || 0,
      inventory: variant.inventory || 0,
    };
  });

  const columns: any[] = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Hình ảnh',
      dataIndex: "imgUrl",
      key: "imgUrl",
      render: (imgUrl: string) => (
        imgUrl ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={imgUrl} style={{ width: 100 }} alt="Product" />
          </div>
        ) : null
      ),
      align: 'center',
    },
    {
      title: 'Kích thước',
      dataIndex: 'size',
      key: 'size',
      align: 'center',
    },
    {
      title: 'Màu sắc',
      dataIndex: 'color',
      key: 'color',
      align: 'center',

      render: (color: { name: string, unicode: string }) => (
        <span>
          {color ? (
            <Tag color={color.unicode} key={color.unicode}>
              {color.name}
            </Tag>
          ) : "Không xác định"}
        </span>
      ),
    },
    {
      title: 'Nhập hàng',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
    {
      title: 'Đã bán',
      dataIndex: 'sell_quantity',
      key: 'sell_quantity',
      align: 'center',
    },
    {
      title: 'Còn lại',
      dataIndex: 'inventory',
      key: 'inventory',
      align: 'center',
    },
  ];

  return (
    <div>
      {isLoadingProduct ? (
        <Loading />
      ) : (
        <div>
          <div className="flex justify-between">
            <Button className='setSize-1' type="primary" style={{ background: "blue" }}>
              <Link to={"/admin/product/" + id + "/variants"}>Thêm mới biến thể </Link>
            </Button>
            <p className=' '>Sản phẩm: <span className='font-bold'>{productDataOne.name}</span></p>
          </div>
          <Table
            style={{ marginTop: 30 }}
            columns={columns}
            dataSource={flattenedData}
            pagination={false}
          />
        </div>
      )}
    </div>
  );
};

export default ProductListDetails;
