import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Check that App rendered', () => {
  test('Component Rendered', () => {
    const wrapper = render(<App />);
    const linkElement = screen.getByText(/Triple/i);
    expect(linkElement).toBeInTheDocument();

    // const SearchElement = screen.getByPlaceholderText('/Search By Name/i');
    // expect(SearchElement).toBeInTheDocument();
    // const linkElement2 = screen.findByLabelText(/Search By Name/i);
    // expect(linkElement2).not.toBeEmpty()
  });
});
