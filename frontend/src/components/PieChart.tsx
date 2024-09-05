"use client";
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [chartData] = useState({
    series: [44, 55, 41],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C'],
      title: {
        text: 'Pie Chart',
        align: 'left',
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default PieChart;
