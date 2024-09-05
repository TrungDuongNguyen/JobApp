"use client"; // Ensures this component runs on the client side

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CandlestickChart = () => {
  const [chartData] = useState({
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'Candlestick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default CandlestickChart;
