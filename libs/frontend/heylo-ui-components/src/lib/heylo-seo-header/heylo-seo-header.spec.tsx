import { render } from '@testing-library/react';

import HeyloSEOHeader from './heylo-seo-header';

describe('SEOHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeyloSEOHeader title="" description="" />);
    expect(baseElement).toBeTruthy();
  });
});
