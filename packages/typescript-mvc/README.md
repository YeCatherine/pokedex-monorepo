# Table of Contents:

- [Introduction](./docs/01-introduction.md)
- [Solution Description](./docs/02-solution-description.md)
- [Task](./docs/03-task.md)

---

## Running the application

```
nvm use
yarn install
yarn run start
```

It will launch the app in the 3030 port

## Testing
```
nvm use
yarn test
```
It will launch Jest Unit Testing with reporting and Cypress E2E testing with lighthouse checking and visual regression testing.

`yarn run test:open` to run cypress in visual mode. Keep in mind that redita display will have issues with twice screenshot size.

## Documentation
```
nvm use
yarn docs
```
It will add auto generated md files to "/docs/generated" folder

## Building the application

```
nvm use
yarn build
npx serve dist
```

---

Add git message template
`git config commit.template ./gitmessage`

to add default git commit message template in case if project has connection to
Jira - it should have Jira ticket number inside commit to create jira cross
reporting (should be also enabled on Jira side)

## to run cypress

- `yarn run test` - in desktop mode
- `yarn run test:open` in terminal view

## to run documentation

- `yarn docs` it will generate the docs to docs/generated folder

---

## Technologies & Approaches:

- [x] Webpack
- [x] Webpack Bundle Size
- [x] SCSS
- [x] CI/CD:
  - [x] Eslint, Stylelint, Prettier, Husky precommit
  - [x] git message
  - [x] GitHub issues templates and workflows action "Build to GitHub pages"
- [x] Stylelint, scss support
- [x] tests
- [x] Cypress
- [x] TypeScript
- [x] Browsers list with browser support: latest 2 versions of Chrome, Firefox,
      Safari, Edge, Opera.
- [x] MVC on JS classes

## Site Score:

![lighthouse-score](./docs/assets/lighthouse-score.png)

## What was made and why?

### MVC

- Solution was Implemented based on Model View Controller (MVC) design pattern,
- and specifies that an application consist of the data model, presentation of information,
- and controller.

### TS

- Solution was implemented using TypeScript that is an enterprise standard for corporate development
- and allows to identify any typecast-related errors as well as improves general performance
- in code with fairly complex types.

### Webpack as bundler

- Webpack with several plugins:
  - HtmlWebpackPlugin - to create index.html in dist folder.
  - CopyPlugin - to copy json file from public folder to dist.
  - BundleAnalyzerPlugin to have possibility to analyze bundles

### Other features

- Aliases to improve the code usability
- SCSS support
- Tests (like src/core/model/ModelBase.test.ts), Cypress
- Eslint, Stylelint, Prettier, Husky precommit to have the code of better quality
- simple CI-CD (GitHub action and Husky fixer)
- tsdoc

### MVC description:

- Model consists of the next pillars: interface, base abstract class,
- and implementation that supports the JSON file.
- Model Base class with key functionality covered by Jest tests with coverage report
- Model contains implementation of "addAppToHosts" and "removeAppFromHosts"
- View - responsible for preparation of the application to display content. Generate structure with 2 ways:
- helper function that generate Dom elements
- simple template engines.
- Controller - contains main logic that unite Model and view and bind event listeners to event binders.

## To be determined

- What is the source of truth -- UI mockups or business requirements?
  - According to the task the number of hosts should be 25,
  - but it conflicts with the UI (5 apps per card that has more UI/UX sense).
- Opacity 62% for apdex rating in the cards conflicts with the accessibility requirements and reduces
- the accessibility score
