import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { revenueData } from '../../mock/revenueData';

const RevenueChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300} className="px-2 py-8">
        <LineChart data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line strokeWidth={3} dot={false} stroke='#06b6d4' dataKey="revenue" type="monotone" />
          <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueChart;
