// 親コンポーネントからタスクのIDを受け取り、server Actionsでタスクを削除

'use client';

import { FaTrashAlt } from 'react-icons/fa';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteTask } from '@/actions/task';
import { useEffect } from 'react';

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialSate: FormState = { error: '' };
  const [state, formAction] = useFormState(deleteTaskWithId, initialSate);

  useEffect(() => {
    if (state && state.error !== '') {
      alert(state.error);
    }
  }, [state]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
