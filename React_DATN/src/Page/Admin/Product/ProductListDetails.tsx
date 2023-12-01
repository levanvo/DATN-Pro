import { Table, Tag } from 'antd';
import React from 'react';
import { useGetOneProductQuery } from '../../../Services/Api_Product';
import { useParams } from 'react-router-dom';

const ProductListDetails = () => {
  const { id } = useParams();
  const { data: productDataOne, isLoading: isLoadingProduct }: any = useGetOneProductQuery(id || "");

  const flattenedData = productDataOne?.variants?.map((variant:any) => {
    console.log("Variant Object:", variant);
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
    };
  });

  // Define columns for the product details
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
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      align: 'center',
    },
    {
      title: 'Color',
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
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
    },
  ];

  return (
    <div>
      {isLoadingProduct ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={columns}
          dataSource={flattenedData} 
          pagination={false}
        />
      )}
    </div>
  );
};

export default ProductListDetails;
