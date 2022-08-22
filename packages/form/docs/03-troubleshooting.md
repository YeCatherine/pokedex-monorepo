# Trouble Shooting section

---

## Table of Contents:

- [Task](./01-task.md)
- [Introduction](./01-introduction.md)
- [Solution Description](./02-solution-description.md)
- [Trouble Shooting (Current)](./03-troubleshooting.md)

---

## Motivation

The goal of this section is to remove possible issues that could be faced by developers.

### Husky and Source Tree pre-commit issues

[Link to solution](https://stackoverflow.com/a/69441725)

Brief description:

- step 1.
  `nano ~/.bashrc`
  or
  `nano ~/.zshrc`

add in th end

```
echo "export PATH="$(dirname $(which node)):$PATH"" > ~/.huskyrc
```

- step 2.
  create `~/.huskyrc`
  This loads nvm.sh and sets the correct PATH before running hook

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### Error with port | Some error occurred Error: listen EADDRINUSE: address already in use 127.0.0.1:4002

Just run command to kill port.
`npx kill-port 3002`
`npx kill-port 4002`
