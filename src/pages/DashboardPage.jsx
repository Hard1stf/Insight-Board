import RecentActivity from '../components/dashboard/RecentActivity';
import RevenueChart from '../components/dashboard/RevenueChart';
import StatsGrid from '../components/dashboard/StatsGrid';
import DashboardLayout from '../components/layout/DashboardLayout';

const DashboardPage = () => {
  return (
    <>
      <DashboardLayout>
        <StatsGrid />
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className='text-white'>Revenue Overview</h2>
              <RevenueChart />
            </div>
          </div>
          <RecentActivity />
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
