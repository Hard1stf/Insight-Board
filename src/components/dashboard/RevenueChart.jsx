import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { revenueData } from '../../data/revenueData';

const RevenueChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300} className="px-2 py-8">
        <LineChart data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
            <Tooltip />
          <Line dataKey="revenue" type="monotone" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueChart;
