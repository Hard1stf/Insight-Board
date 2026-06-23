import RecentActivity from '../components/dashboard/RecentActivity';
import RevenueChart from '../components/dashboard/RevenueChart';
import StatsGrid from '../components/dashboard/StatsGrid';
import DashboardLayout from '../components/layout/DashboardLayout';

const DashboardPage = () => {
  return (
    <>
      <DashboardLayout>
        <StatsGrid />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <RecentActivity />
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
