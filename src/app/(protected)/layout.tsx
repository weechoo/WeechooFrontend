const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
