import TaskCard from '@/components/TaskCard/TaskCard';
import Link from 'next/link';
import { MdAddTask } from 'react-icons/md';

const MainPage = () => {
  return (
    <div className="p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">全てのタスク</h2>
        <Link
          href="/new"
          className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-amber-600 hover:bg-amber-500"
        >
          <MdAddTask className="size-5" />
          <div>タスクを追加</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
};

export default MainPage;
