import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppHeader from './AppHeader';

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/AppHeader',
  component: AppHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AppHeader>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppHeader> = () => <AppHeader />;

export const Default = Template.bind({});
