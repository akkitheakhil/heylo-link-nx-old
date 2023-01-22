import { render } from '@testing-library/react';

import HeyloInput from './heylo-input';

describe('HeyloInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloInput />);
    expect(baseElement).toBeTruthy();
  });
});
