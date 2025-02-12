import TaskCard from '@/components/TaskCard/TaskCard';

const CompletedTaskPage = () => {
  return (
    <div className="p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">完了したタスク</h2>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
};

export default CompletedTaskPage;
