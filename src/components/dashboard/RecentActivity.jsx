import { activityData } from '../../data/activityData';

const RecentActivity = () => {
  return (
    <>
      <div className='text-zinc-300 flex flex-col gap-2 py-8'>
        {activityData.map((item) => (
          <div key={item.id} className='flex justify-between px-8'>
            <p>{item.action}</p>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentActivity;
