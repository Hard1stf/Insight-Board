import MobileSidebar from './MobileSidebar';

const Header = () => {
  return (
    <>
      <div className="bg-zinc-700 text-zinc-400 p-3 flex items-center justify-between gap-4">
        <MobileSidebar />
        <h1>Page Title</h1>
        <div className="flex items-center gap-4">
          <span>Span</span>
          <span>Bell</span>
          <span>Avatar</span>
        </div>
      </div>
    </>
  );
};

export default Header;
