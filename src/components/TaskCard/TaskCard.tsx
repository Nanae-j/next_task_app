import TaskEditButton from './TaskEditButton/TaskEditButton';
import TaskDeleteButton from './TaskDeleteButton/TaskDeleteButton';

const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h3 className="text-lg font-semibold">タイトル</h3>
        <p className="mt-1 text-sm line-clamp-3">タスクの説明</p>
      </header>
      <div>
        <p className="text-sm">2024-12-31</p>
        <div className="flex justify-between items-center">
          <p
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm 
              ${true ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {true ? 'Completed' : 'InCompleted'}
          </p>
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
