import { render } from '@testing-library/react';

import HeyloHref from './heylo-href';

describe('HeyloHref', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloHref href='#' text='' />);
    expect(baseElement).toBeTruthy();
  });
});
