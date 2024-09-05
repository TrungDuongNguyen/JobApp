import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import CandlestickChart from '../components/CandlestickChart';

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
