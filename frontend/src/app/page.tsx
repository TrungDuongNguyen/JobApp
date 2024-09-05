"use client";

import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('../components/LineChart'), { ssr: false });
const BarChart = dynamic(() => import('../components/BarChart'), { ssr: false });
const PieChart = dynamic(() => import('../components/PieChart'), { ssr: false });
const CandlestickChart = dynamic(() => import('../components/CandlestickChart'), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <h1>Chart Examples</h1>
      <LineChart />
      <BarChart />
      <PieChart />
      <CandlestickChart />
    </div>
  );
};

export default HomePage;