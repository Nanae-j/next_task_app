import NewsTaskForm from '@/components/NewTaskForm/NewsTaskForm';

const NewTaskPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h2 className="text-center text-2xl font-bold">タスクを新しく作成</h2>
      <NewsTaskForm />
    </div>
  );
};

export default NewTaskPage;
