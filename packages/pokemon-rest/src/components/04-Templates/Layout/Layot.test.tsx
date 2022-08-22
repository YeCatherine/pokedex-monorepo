import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Find element by text', () => {
  it('Check base Layout functionality', () => {
    render(<Layout><h1>Layout Text</h1></Layout>);
    const linkElement = screen.getByText(/Layout Text/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('Check sitebar Layout functionality', () => {
    render(<Layout sidebar={<h2>Sidebar exists</h2>}><h1>Layout Text</h1></Layout>);
    const linkElement = screen.getByText(/Sidebar exists/i);
    expect(linkElement).toBeInTheDocument();
  });
});
