import TaskDeleteButton from './TaskDeleteButton/TaskDeleteButton';
import TaskEditButton from './TaskEditButton/TaskEditButton';

const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h3 className="text-lg font-semibold">タイトル</h3>
        <div className="mt-1 text-sm line-clamp-3">タスクの説明</div>
      </header>
      <div>
        <time className="text-sm">2025-02-12</time>
        <div className="flex justify-between items-center">
          <div
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm ${
              true ? 'bg-blue-500' : 'bg-pink-600'
            }`}
          >
            {true ? 'Completed' : 'Incomplete'}
          </div>
          <div className="flex gap-4">
            <TaskEditButton id="1" />
            <TaskDeleteButton id="1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
