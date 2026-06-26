import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../config/navigation';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="text-orange-600" />
        </button>
        {isOpen && (
          <div className="p-6 fixed inset-0 h-screen w-64 bg-black/80">
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
            <div className="flex gap-4 flex-col text-zinc-400">
          <h1 className="text-2xl font-bold text-white">InsightBoard</h1>
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `flex items-center gap-4 ${
                            isActive
                            ? "text-cyan-400"
                            : "text-zinc-400 hover:text-white"
                        }`}
                        >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileSidebar;
