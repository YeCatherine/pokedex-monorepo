import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Checkboxes from './Checkboxes';

export default {
  title: 'Organisms/Form/Checkboxes',
  component: Checkboxes
} as ComponentMeta<typeof Checkboxes>;

const Template: ComponentStory<typeof Checkboxes> = ({
  state,
  handleChange
}) => (
  <Checkboxes state={state} handleChange={handleChange}/>
);

export const Default = Template.bind({});

Default.args = {
  state: {
    active: true,
    paused: false
  },
  handleChange: () => {
    console.log('handleChange');
  }
};
