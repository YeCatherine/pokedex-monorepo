import React from 'react';
import { render } from '@testing-library/react';
import ClearButton from './ClearButton';

test('Component Rendered "Clear Button"', () => {
  const { container } = render(<ClearButton onClick={() => {}} />);
  const button = container.querySelector('#clear-button');
  expect(button).toBeInTheDocument();
});
