## Running the application

---

## Table of Contents:
- [Introduction (Current)](./01-introduction.md)
- [Solution Description](./02-solution-description.md)
- [Trouble Shooting](./03-troubleshooting.md)

---

```
nvm use
yarn install
yarn run start
```

It will launch the app in the 3002 port, and a server in the 4002 port.

---

Add git message template
`git config commit.template ./gitmessage`

to add default git commit message template
in case if project has connection to Jira - it should have Jira ticket number
inside commit to create jira cross reporting (should be also enabled on Jira side)

## to run cypress

- `yarn run cy:open` - in desktop mode
- `yarn run cy` in terminal view

## to run documentation

- `yarn documentation` it will generate the docs to docs/generated folder
