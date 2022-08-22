import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ClearButton from './ClearButton';

export default {
  title: 'Atom/Button/ClearButton',
  component: ClearButton
} as ComponentMeta<typeof ClearButton>;

const Template: ComponentStory<typeof ClearButton> = ({ onClick }) => (
  <ClearButton onClick={onClick}/>
);

export const Default = Template.bind({});

Default.args = {
  onClick: () => {
    console.log('click');
  }
};
