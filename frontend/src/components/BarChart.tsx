"use client";
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'Bar Chart',
        align: 'left',
      },
      xaxis: {
        categories: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
