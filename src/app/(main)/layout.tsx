type Props = Readonly<{
  children: React.ReactNode;
}>;

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <div className="bg-indigo-300">サイドメニュー</div>
      <main className="bg-red-300 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
