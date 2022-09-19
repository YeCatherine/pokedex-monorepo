# How to Start

---

```
nvm use
yarn install
yarn run start
```

It will launch the app in the 3002 port, and a server in the 4002 port.

---

Add git message template `git config commit.template ./gitmessage`

to add default git commit message template in case if project has connection to Jira - it should have Jira ticket number inside commit to create jira cross reporting (should be also enabled on Jira side)

## to run cypress

- `yarn run cy:open` - in desktop mode
- `yarn run cy` in terminal view

## to run documentation

- `yarn documentation` it will generate the docs to docs/generated folder

## Technologies

- [ ] General:
  - [x] added to yarn
  - [x] TypeScript : Typescript: move jsconfig to tsconfig
  - [x] Add modules aliases
  - [x] Documentation:
    - [x] ADd documents folder
    - [x] Doc - how to start
    - [x] Doc - how it works with architectural diagram
    - [x] add structure description readme
    - [x] Added troubleshooting doc
    - [x] Add TypeDoc
- [x] Testing:
  - [x] Storybook:
  - [x] Cypress
    - [x] lighthouse and a11y review
    - [x] Visual Regression Testing
    - [x] unit tests
- [x] DevOps and EngExcellence:
  - [x] DotFiles:
    - [x] add .nvmrc with version
    - [x] Add .npmrc
  - [x] Linters:
    - [x] Move linter configs to separate files
    - [x] Add Eslint, Prettier
    - [x] Add Husky
  - [x] Git Commit template
  - [x] Git PR template
  - [x] Git auto PR deployment
- [ ] Proposals and recommendations for future
  - [ ] Add Progressive Web Application support (Workbox)
  - [ ] Change JSON-SERVER to Mirage.js with content generator
  - [ ] `yarn run exect`.Refactor start script . move to web pack (as development standard)
  - [ ] export vscode configs extensions and settings
