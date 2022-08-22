
// import { addParameters, configure } from '@storybook/react'
// import { themes } from '@storybook/theming'
// //
// addParameters({
//   options: {
//     theme: themes.dark
//   }
// })
// //
// const comps = require.context('@monorepo/components/src', true, /.stories.tsx$/);
// const comps = require.context('@monorepo/components/src', true, /.stories.tsx$/)
// const form = require.context('@monorepo/form/src', true,
//   /.stories.tsx$/)
// const pokedex = require.context('@monorepo/pokemon-rest/src', true,
//   /.stories.tsx$/)
// console.log('form', form)
// console.log('pokedex', pokedex)
// configure(() => {
//   comps.keys().forEach(filename => comps(filename))
// }, module)

// export const parameters = {
//   a11y: {
//     config: {
//       rules: [
//         {
//           // This tells Axe to run the 'autocomplete-valid' rule on
// selectors
//           // that match '*:not([autocomplete="nope"])' (all elements except
// [autocomplete="nope"]). // This is the safest way of ignoring a violation
// across all stories, // as Axe will only ignore very specific elements and
// keep reporting // violations on other elements of this rule. id:
// 'autocomplete-valid', selector: '*:not([autocomplete="nope"])', }, { // To
// disable a rule across all stories, set `enabled` to `false`. // Use with
// caution: all violations of this rule will be ignored! id:
// 'autocomplete-valid', enabled: false, }, ], }, }, };

module.exports = {
  core: {
    // builder: '@storybook/builder-webpack5'
    builder: 'webpack5'
  },
  framework: '@storybook/react',
  stories: [
    // '../src/**/*.stories.mdx',
    '../../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-material-ui',
    '@storybook/addon-a11y',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less']
        }
      }
    }
  ],
  // webpackFinal: config => {
  //   const {
  //     module: {
  //       rules: [, , , , , { oneOf }]
  //     }
  //   } = config
  //   const babelLoader = oneOf.find(({ test }) => new RegExp(test).test('.ts'))
  //   babelLoader.include = [/components\/(.*)\/src/, /.storybook/]
  //   babelLoader.options.sourceType = 'unambiguous'
  //   return config
  // }
}
