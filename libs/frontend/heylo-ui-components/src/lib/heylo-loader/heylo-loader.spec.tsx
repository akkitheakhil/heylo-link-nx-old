import { render } from '@testing-library/react';

import HeyloLoader from './heylo-loader';

describe('HeyloLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloLoader />);
    expect(baseElement).toBeTruthy();
  });
});
