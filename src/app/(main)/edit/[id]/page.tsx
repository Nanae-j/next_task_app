import EditTaskForm from '@/components/EditTaskForm/EditTaskForm';

interface Params {
  params: { id: string };
}

const EditTaskPage = ({ params }: Params) => {
  // const id = params.id;

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h2 className="text-center text-2xl font-bold">タスクを編集</h2>
      <EditTaskForm />
    </div>
  );
};

export default EditTaskPage;
