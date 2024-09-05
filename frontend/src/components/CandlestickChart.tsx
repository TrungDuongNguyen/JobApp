"use client";
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const CandlestickChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/candlestick-data/');
        setChartData({
          series: [
            {
              name: 'Candlestick Data',
              data: response.data.data, // Ensure the data is correctly passed
            },
          ],
          options: {
            chart: {
              type: 'candlestick',
              height: 350,
            },
            xaxis: {
              type: 'datetime', // Ensures that 'x' is treated as a date
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

  // Ensure the chart is only rendered when data is available
  if (!chartData) return null;

  return (
    <div>
      {chartData && <ReactApexChart options={chartData.options} series={chartData.series} type="candlestick" height={350} />}
    </div>
  );
};

export default CandlestickChart;
