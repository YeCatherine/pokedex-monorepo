import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProgramSearch from './ProgramSearch';

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/ProductSearch',
  component: ProgramSearch
} as ComponentMeta<typeof ProgramSearch>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgramSearch> = () => (
  <ProgramSearch formState={{}} setFormState={() => {}} />
);

export const Default = Template.bind({});
