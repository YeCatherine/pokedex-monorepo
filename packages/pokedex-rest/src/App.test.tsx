import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Check that App rendered', () => {
  test('Component Rendered', () => {
    const wrapper = render(<App />);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
  });
});
