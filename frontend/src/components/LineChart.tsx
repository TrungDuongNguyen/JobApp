// src/components/LineChart.tsx
"use client";

import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/line-chart-data/');
        setChartData({
          series: [
            {
              name: 'Sales',
              data: response.data.data, 
            },
          ],
          options: {
            chart: {
              height: 350,
              type: 'line',
            },
            xaxis: {
              categories: response.data.labels, 
            },
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
      {chartData && <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />}
    </div>
  );
};

export default LineChart;
