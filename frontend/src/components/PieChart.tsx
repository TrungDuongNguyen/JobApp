// src/components/PieChart.tsx
"use client";

import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const PieChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pie-chart-data/');
        setChartData({
          series: response.data.data, 
          options: {
            chart: {
              type: 'pie',
            },
            labels: response.data.labels, 
          },
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {chartData && <ReactApexChart options={chartData.options} series={chartData.series} type="pie" height={350} />}
    </div>
  );
};

export default PieChart;
