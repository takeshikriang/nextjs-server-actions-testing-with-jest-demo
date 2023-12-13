import '@testing-library/jest-dom';


beforeEach(() => {
  /**
   * To suppress "Error: Not implemented: HTMLFormElement.prototype.requestSubmit"
   * Thanks: https://github.com/jsdom/jsdom/issues/1937#issuecomment-810349592
   */
  window._virtualConsole.emit = jest.fn();

  /**
   * To suppress "Warning: Invalid value for prop `action` on <form> tag..."
   * Thanks: https://github.com/vercel/next.js/issues/54757#issuecomment-1772930441
   */
  const originalWarn = console.error;
  console.error = msg =>
    !msg.toString().includes('Invalid value for prop %s on <%s> tag') &&
    originalWarn(msg);

  jest.clearAllMocks();
});
