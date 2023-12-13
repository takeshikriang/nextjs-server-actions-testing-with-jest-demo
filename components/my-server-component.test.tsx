import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createUser } from 'actions';
import { MyServerComponent } from 'components/my-server-component';

jest.mock('actions', () => ({
  createUser: jest.fn()
}));

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('MyServerComponent', () => {
  it('calls createUser action when form is submitted', async () => {
    render(<MyServerComponent />);

    const user = userEvent.setup();
    await user.type(screen.getByRole('textbox'), 'newusername');
    await user.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('newusername');
    });

    expect(createUser).toHaveBeenCalledTimes(1); // <-- Failed: not called T_T
  });
});
