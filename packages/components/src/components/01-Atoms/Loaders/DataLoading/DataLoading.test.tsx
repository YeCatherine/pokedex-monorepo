import React from 'react';
import { render } from '@testing-library/react';
import { DataLoading } from './DataLoading';

describe('Check that component loaded properly', () => {
  test('Component Rendered "DataLoading"', () => {
    const { container } = render(<DataLoading/>);
    const component = container.querySelector('[aria-label="Data loading"]');
    expect(component).toBeInTheDocument();
  });
});
