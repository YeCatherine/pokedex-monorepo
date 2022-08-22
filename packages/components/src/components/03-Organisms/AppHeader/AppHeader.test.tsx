import React from 'react';
import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

describe('Check that component loaded properly', () => {
  test('Component Rendered "AppHeader"', () => {
    render(<AppHeader />);
    const linkElement = screen.getByText(/Triple/i);
    expect(linkElement).toBeInTheDocument();
  });
});
