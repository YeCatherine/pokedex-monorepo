# Introduction

## Table of Contents:

- [Introduction (current)](./01-introduction.md)
- [Solution Description](./02-solution-description.md)

---

## Running the application

```
nvm use
yarn install
yarn run start
```

It will launch the app in the 3030 port

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
