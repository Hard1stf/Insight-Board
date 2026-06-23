const StatsCard = ({ title, value, change }) => {
  return (
    <>
      <div className="rounded-xl border p-6 text-zinc-300">
        <h3>{title}</h3>
        <p>{value}</p>
        <span>{change}</span>
      </div>
    </>
  );
};

export default StatsCard;
