import { statsData } from '../../data/statsData';
import StatsCard from './StatsCard';

const StatsGrid = () => {
  return (
    <>
      <div className="grid-cols-1 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {statsData.map((stats) => (
          <StatsCard
            key={stats.id}
            title={stats.title}
            value={stats.value}
            change={stats.change}
            icon={stats.icon}
          />
        ))}
      </div>
    </>
  );
};

export default StatsGrid;
