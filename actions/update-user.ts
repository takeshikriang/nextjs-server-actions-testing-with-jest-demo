'use server';

interface FormState {
  message: string;
}

export async function updateUser(_fromState: FormState, formData: FormData) {
  const username = formData.get('username');
  console.log({ username });

  return {
    message: `Username has been updated to ${username} successfully`
  };
}
