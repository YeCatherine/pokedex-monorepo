import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SynchronizationIcon from './SynchronizationIcon';

export default {
  title: 'Atom/Loading/SynchronizationIcon',
  component: SynchronizationIcon,
} as ComponentMeta<typeof SynchronizationIcon>;

const Template: ComponentStory<typeof SynchronizationIcon> = ({ loading }) => (
  <SynchronizationIcon loading={loading} />
);

export const Default = Template.bind({});

Default.args = {
  loading: true,
};
