import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { updateUser } from 'actions';
import { MyClientComponent } from 'components/my-client-component';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormState: jest.fn().mockImplementation((formAction, formState) => {
    return [formState, formAction];
  })
}));

jest.mock('actions', () => ({
  updateUser: jest.fn()
}));

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('MyClientComponent', () => {
  it('calls updateUser action when form is submitted', async () => {
    render(<MyClientComponent />);

    const user = userEvent.setup();
    await user.type(screen.getByRole('textbox'), 'newusername');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('newusername');
    });

    expect(updateUser).toHaveBeenCalledTimes(1); // <-- Failed: not called T_T
  });
});
