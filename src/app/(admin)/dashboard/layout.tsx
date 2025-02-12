const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-yellow-300 p-4">
      <div>管理者レイアウト</div>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
