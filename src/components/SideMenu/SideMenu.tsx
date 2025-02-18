'use client';

import dynamic from 'next/dynamic';
import NavList from './NavList/NavList';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import TitleAnime from '../../../public/TitleAnime.json';

const SideMenu = () => {
  return (
    <div className="w-56 py-8 bg-yellow-200 flex-col flex justify-between">
      <div>
        <h1 className="font-daruma text-5xl mb-15 px-3">タスクアプリ</h1>
        <NavList />
      </div>

      <div>
        <Lottie animationData={TitleAnime} />
      </div>
    </div>
  );
};

export default SideMenu;
