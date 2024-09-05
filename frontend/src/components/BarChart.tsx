// src/components/BarChart.tsx
"use client";

import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const BarChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/bar-chart-data/');
        setChartData({
          series: [
            {
              name: 'Products',
              data: response.data.data, // Assuming your API returns [100, 150, 200]
            },
          ],
          options: {
            chart: {
              height: 350,
              type: 'bar',
            },
            xaxis: {
              categories: response.data.labels, // Assuming API returns ["Product A", "Product B", "Product C"]
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
      {chartData && <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />}
    </div>
  );
};

export default BarChart;
