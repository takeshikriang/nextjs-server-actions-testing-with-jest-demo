'use client';

import { useFormState } from 'react-dom';

import { updateUser } from 'actions';

export function MyClientComponent() {
  const [formState, formAction] = useFormState(updateUser, {
    message: ''
  });

  return (
    <div className='space-y-2'>
      <h2 className='text-lg font-semibold'>Client component</h2>
      <form action={formAction}>
        <div className='space-x-4'>
          <input
            type='text'
            name='username'
            placeholder='username'
            className='py-2 px-4 border rounded'
          />
          <button type='submit' className='py-2 px-4 border rounded'>
            Update
          </button>
        </div>
      </form>

      <pre className='!mt-8 p-4 bg-slate-50 rounded'>
        <code>{JSON.stringify(formState, null, 2)}</code>
      </pre>
    </div>
  );
}
