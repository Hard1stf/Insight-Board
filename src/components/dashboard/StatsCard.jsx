const StatsCard = ({ title, value, change, icon: Icon }) => {
  return (
    <>
      <div className="rounded-xl border p-6 bg-zinc-900 border-zinc-800">
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-400">{title}</span>
          <Icon size={20} className="text-zinc-500" />
        </div>
        <div className="mt-4">
          <p className="text-white text-3xl font-bold">{value}</p>
          <span className="text-green-500 font-medium text-sm">{change}</span>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
