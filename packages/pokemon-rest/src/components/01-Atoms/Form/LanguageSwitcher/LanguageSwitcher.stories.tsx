import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LanguageSwitcher from './LanguageSwitcher';

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Pokedex/Atoms',
  component: LanguageSwitcher
} as ComponentMeta<typeof LanguageSwitcher>;

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LanguageSwitcher> = () => (
  <LanguageSwitcher/>
);

export const Default = Template.bind({});
