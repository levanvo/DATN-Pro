import { useGetAllProductQuery } from '../../../Services/Api_Product';
import { IProduct } from '../../../Models/interfaces';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Loading from '../../../Component/Loading';

const Top10Product = () => {
  const { data: productData,isLoading }: any = useGetAllProductQuery();

  const sortedProducts = productData
    ?.slice()
    .filter((product: IProduct) => !product.isDeleted && (product.sell_quantity || 0) > 0)
    .sort((a: any, b: any) => (b.sell_quantity || 0) - (a.sell_quantity || 0))
    .slice(0, 10);

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Top 10 Sản Phẩm Bán Chạy',
    },
    xAxis: {
      categories: sortedProducts?.map((item: any) => item.name),
    },
    yAxis: {
      title: {
        text: 'Số lượng đã bán',
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}', // Hiển thị giá trị của cột
          style: {
            color: 'black', // Màu sắc của chữ
          },
          connectorColor: 'black', // Màu của đường nối từ chữ đến cột
        },
      },
    },
    series: [
      {
        name: 'Sản phẩm',
        data: sortedProducts?.map((item: any) => item.sell_quantity),
        colorByPoint: true,
      },
    ],
  };

  return (
    <div>
      {isLoading ? <Loading /> : <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
};

export default Top10Product;
