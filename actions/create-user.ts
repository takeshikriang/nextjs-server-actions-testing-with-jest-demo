'use server';

export async function createUser(formData: FormData) {
  const username = formData.get('username');
  console.log({ username });

  return {
    message: 'User has been created successfully'
  };
}
