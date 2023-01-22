import { render } from '@testing-library/react';

import HeyloButton from './heylo-button';

describe('HeyloButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloButton />);
    expect(baseElement).toBeTruthy();
  });
});
