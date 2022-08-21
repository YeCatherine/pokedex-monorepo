import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgramsTable from './ProgramsTable';

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/ProgramTable',
  component: ProgramsTable,
} as ComponentMeta<typeof ProgramsTable>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProgramsTable> = () => <ProgramsTable />;

export const Default = Template.bind({});
