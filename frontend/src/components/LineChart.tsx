"use client";
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Sales',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      title: {
        text: 'Line Chart',
        align: 'left',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
