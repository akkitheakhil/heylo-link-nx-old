import { render } from '@testing-library/react';

import HeyloSnackbar from './heylo-snackbar';

describe('HeyloSnackbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloSnackbar />);
    expect(baseElement).toBeTruthy();
  });
});
