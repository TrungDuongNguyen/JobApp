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
    // Fetch data from the Django API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/line-chart-data/');
        setChartData({
          series: [
            {
              name: 'Sales',
              data: response.data.data, // Assuming your API returns an array like [10, 20, 30, 40]
            },
          ],
          options: {
            chart: {
              height: 350,
              type: 'line',
            },
            xaxis: {
              categories: response.data.labels, // Assuming API returns ["Jan", "Feb", "Mar", "Apr"]
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
