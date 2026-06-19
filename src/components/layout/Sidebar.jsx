import { NavLink } from 'react-router-dom';
import { navigation } from '../../config/navigation';

const Sidebar = () => {
  return (
    <>
      <aside className="hidden lg:flex w-72 h-screen fixed left-0 top-0 bg-zinc-900">
        <nav className="flex flex-col gap-3 p-6">
          <h1 className="text-2xl font-bold text-white">InsightBoard</h1>
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
