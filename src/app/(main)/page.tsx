import { MdAddTask } from 'react-icons/md';
import Link from 'next/link';
import TaskCard from '@/components/TaskCard/TaskCard';
import { TaskDocument } from '@/models/task';

const getAllTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks`, {
    // タスク情報は更新頻度高いのでキャッシュを使用しない
    cache: 'no-store',
  });

  // 接続が失敗した時の処理
  if (response.status !== 200) {
    throw new Error();
  }

  // responseをjson形式で解析
  // 処理に時間がかかる可能性があるのでawait使用
  const data = await response.json();

  // 戻り値は値なので型アサーション
  return data.tasks as TaskDocument[];
};

export default async function MainPage() {
  const allTasks = await getAllTasks();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold flex items-center">All Tasks</h2>
        <Link
          href="/new"
          className="flex items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          <MdAddTask className="size-5" />
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
