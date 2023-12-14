import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import data from 'highcharts/modules/data';
import drilldown from 'highcharts/modules/drilldown';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import accessibility from 'highcharts/modules/accessibility';

// Kích hoạt các module Highcharts
data(Highcharts);
drilldown(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
accessibility(Highcharts);

const Chart = () => {
    useEffect(() => {
        const options = {
          // Các tùy chọn của biểu đồ ở đây...
          chart: {
            type: 'column',
            renderTo: 'container', // ID của container
          },
          title: {
            text: 'Chart showing browser market shares. Clicking on individual columns brings up more detailed data. This chart makes use of the drilldown feature in Highcharts to easily switch between datasets.',
          },
          // Các tùy chọn khác của biểu đồ...
        };
    
        // Khởi tạo biểu đồ Highcharts
        Highcharts.chart(options);
    
      }, []); // Ch
  return (
    <figure className="highcharts-figure">
      <div id="container"></div>
      <p className="highcharts-description">
        Chart showing browser market shares. Clicking on individual columns
        brings up more detailed data. This chart makes use of the drilldown
        feature in Highcharts to easily switch between datasets.
      </p>
    </figure>
  );
};

export default Chart;
