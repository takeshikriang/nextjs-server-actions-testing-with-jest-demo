import { createUser } from 'actions';

export function MyServerComponent() {
  return (
    <div className='space-y-2'>
      <h2 className='text-lg font-semibold'>Server component</h2>
      <form action={createUser}>
        <div className='space-x-4'>
          <input
            type='text'
            name='username'
            placeholder='username'
            className='py-2 px-4 border rounded'
          />
          <button type='submit' className='py-2 px-4 border rounded'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
