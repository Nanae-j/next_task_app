'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`flex items-center px-3 py-6 hover:bg-amber-200 font-medium leading-3.5 ${
        pathname === link ? 'bg-amber-200 border-amber-400 border-r-4' : ''
      }`}
    >
      <div className="mr-4">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};

export default NavItem;
