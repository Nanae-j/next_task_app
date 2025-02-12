'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createTask } from '@/actions/sampleActions';

const ServerActionsPage = () => {
  const taskId = 1;
  const createTaskWithTaskId = createTask.bind(null, taskId);

  const initialState = { error: '' };
  const [state, formAction] = useFormState(createTaskWithTaskId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="bg-gray-400 ml-2 px-2 disabled:bg-gray-100"
        disabled={pending}
      >
        送信
      </button>
    );
  };

  return (
    <div>
      <form action={formAction}>
        <label htmlFor="name">名前:</label>
        <input type="text" id="name" name="name" className="bg-gray-200" />
        <SubmitButton />
        <p>{state.error}</p>
      </form>
    </div>
  );
};

export default ServerActionsPage;
