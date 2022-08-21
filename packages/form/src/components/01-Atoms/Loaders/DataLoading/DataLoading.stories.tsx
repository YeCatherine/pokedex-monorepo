import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataLoading from './DataLoading';

/**
 * Story for DataLoading component.
 */
export default {
  title: 'Atom/Loading/DataLoading',
  component: DataLoading,
} as ComponentMeta<typeof DataLoading>;

const Template: ComponentStory<typeof DataLoading> = () => <DataLoading />;

export const Default = Template.bind({});
