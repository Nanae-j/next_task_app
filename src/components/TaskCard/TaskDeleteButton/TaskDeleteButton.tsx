'use client';

import { FaTrashAlt } from 'react-icons/fa';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteTask, FormState } from '@/actions/task';
import { useEffect } from 'react';

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const initialState: FormState = { error: '' };
  const deleteTaskWithId = deleteTask.bind(null, id);

  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

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
        className="hover:text-red-600 text-lg cursor-pointer disabled:bg-gray-400"
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
