import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Find element by text', () => {
  it('Check for component "Captured"', () => {
    render(
      <Sidebar>
        <h1>Hello World</h1>
      </Sidebar>
    );
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
});
