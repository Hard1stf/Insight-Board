import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-72">
        <Header />

        <main className='p-6'>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
