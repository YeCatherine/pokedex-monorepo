import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Check that component loaded properly', () => {
  test('Check that component "Layout" work as expected', () => {
    render(
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    );
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
});
