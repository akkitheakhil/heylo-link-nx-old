import { render } from '@testing-library/react';

import HeyloScreenLoader from './heylo-screen-loader';

describe('HeyloScreenLoader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloScreenLoader />);
    expect(baseElement).toBeTruthy();
  });
});
