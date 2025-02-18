'use client';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import Animation from '../../public/TitleAnime.json';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-rose-100">
      <div className="text-center">
        <h1 className="font-daruma text-6xl">エラーがおきました</h1>
        <Link
          href="/"
          className="block mt-8 text-xl font-semibold text-rose-600 hover:text-rose-400"
        >
          タスクページに戻る
        </Link>
        <div className="w-[20%] mx-auto mt-10">
          <Lottie animationData={Animation} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
