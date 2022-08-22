import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

// const comps = require.context('@monorepo/components/src', true, /.stories.tsx$/);
const comps = require.context('@monorepo/components-typescript/src', true, /.stories.tsx$/);

configure(() => {
  comps.keys().forEach(filename => comps(filename));
}, module);
