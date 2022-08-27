import React from 'react';
import { render } from '@testing-library/react';
import { DEFAULT_SEARCH_PARAMS } from '../../../../constants';
import Checkboxes from './Checkboxes';

describe('Check that component loaded properly', () => {
  test('Component Rendered "AppHeader"', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Checkboxes state={DEFAULT_SEARCH_PARAMS.statuses}
                  handleChange={onChange}/>
    );
    const component = container.querySelector('#status-checkboxes');
    expect(component).toBeInTheDocument();
  });
});
