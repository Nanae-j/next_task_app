import { Task } from '@/app/api/tasks/route';

interface TaskResponse {
  tasks: Task[];
}

const getTasks = async (): Promise<TaskResponse> => {
  const response = await fetch('http://localhost:3000/api/tasks', {
    method: 'GET',
    cache: 'no-store',
  });
  return await response.json();
};

const TaskPage = async () => {
  const { tasks } = await getTasks();
  return (
    <div>
      <div>タスクページ</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
