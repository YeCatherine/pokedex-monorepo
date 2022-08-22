import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Find element by text', () => {
  it('Check for component "Captured"', () => {
    render(<Layout ><h1>Layout Text</h1></Layout>);
    const linkElement = screen.getByText(/Captured/i);
    expect(linkElement).toBeInTheDocument();
  });
});
