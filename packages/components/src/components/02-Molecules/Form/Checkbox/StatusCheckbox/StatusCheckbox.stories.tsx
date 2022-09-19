// @ts-nocheck
import React from 'react';
import { ComponentStory } from '@storybook/react';

import StatusCheckbox from './StatusCheckbox';

const Template: ComponentStory<typeof StatusCheckbox> = ({ name, value, handleChange }) => (
  <StatusCheckbox name={name} value={value} handleChange={handleChange} />
);

export const Default = Template.bind({});

Default.args = {
  name: 'Active',
  value: true,
  handleChange: () => {
    console.log('onChange');
  }
};
