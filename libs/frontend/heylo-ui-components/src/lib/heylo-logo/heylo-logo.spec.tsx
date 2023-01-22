import { render } from '@testing-library/react';

import HeyloLogo from './heylo-logo';

describe('HeyloLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloLogo />);
    expect(baseElement).toBeTruthy();
  });
});
