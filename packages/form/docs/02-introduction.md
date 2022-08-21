## Running the application

---

## Table of Contents:

- [Task](01-task.md)
- [Introduction (Current)](02-introduction.md)
- [Solution Description](03-solution-description.md)
- [Trouble Shooting](04-troubleshooting.md)

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
