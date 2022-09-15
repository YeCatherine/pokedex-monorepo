//.storybook/preview.js

// import { muiTheme } from 'storybook-addon-material-ui'

// export const decorators = [
//   muiTheme()
// ];

export const parameters = {
  a11y: {
    config: {
      rules: [
        {
          // This tells Axe to run the 'autocomplete-valid' rule on selectors
          // that match '*:not([autocomplete="nope"])' (all elements except
          // [autocomplete="nope"]). This is the safest way of ignoring a
          // violation across all stories, as Axe will only ignore very
          // specific elements and keep reporting violations on other elements
          // of this rule.
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // To disable a rule across all stories, set `enabled` to `false`.
          // Use with caution: all violations of this rule will be ignored!
          id: 'autocomplete-valid',
          enabled: false,
        },
      ],
    },
  },
};
