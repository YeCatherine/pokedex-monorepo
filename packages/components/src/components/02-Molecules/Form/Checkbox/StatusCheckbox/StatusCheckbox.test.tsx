/**
 * Check that status checkbox is working as expected.
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import StatusCheckbox from './StatusCheckbox';

describe('Basic testing', () => {
  test('Component Rendered "StatusCheckbox"', () => {
    const onChange = jest.fn();
    const testValue = false;
    const { getByLabelText } = render(
      <StatusCheckbox name="test checkbox" value={testValue}
                      handleChange={onChange}/>
    );
    const component = getByLabelText('Test Checkbox');
    // check that component exists on the page.
    expect(component).toBeInTheDocument();
    // Check that Label in "title case"
    fireEvent.click(component);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
