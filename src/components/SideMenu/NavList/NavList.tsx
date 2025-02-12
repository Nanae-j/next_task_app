import { FaRegCheckSquare, FaRegClock, FaTasks } from 'react-icons/fa';
import NavItem from './NavItem/NavItem';

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    { id: 1, label: '全てのタスク', link: '/', icon: <FaTasks size={30} /> },
    {
      id: 2,
      label: '完了したタスク',
      link: '/completed',
      icon: <FaRegCheckSquare size={30} />,
    },
    {
      id: 3,
      label: '期限切れタスク',
      link: '/expired',
      icon: <FaRegClock size={30} />,
    },
  ];

  return (
    <div>
      {navList.map((item) => (
        <NavItem
          key={item.id}
          link={item.link}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
