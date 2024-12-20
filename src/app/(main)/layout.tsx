import SideMenu from '@/components/SideMenu/SideMenu';

type Props = Readonly<{
  children: React.ReactNode;
}>;

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
