import React from 'react';
import Footer from './Footer';
import { getByText } from '@testing-library/react';
import { render } from '@testing-library/react';

test('testing the Footer', () => {
  const myName: string = 'foo';
  const { getByText } = render(
    <Footer/>
  );
  expect(getByText('Pokédex Mission')).toBeTruthy();
});
