# Solution Description

---

## Table of Contents:

- [Introduction](./01-introduction.md)
- [Solution Description (Current)](./02-solution-description.md)
- [Trouble Shooting](./03-troubleshooting.md)

---

- Current solution uses custom hook `useDebounce` - to decrease number of server
  calls. it could be easily changed to lodash debounce "import debounce from '
  lodash.debounce'"
  but there are no reason keep in mind that this could be easily change in case
  if project will need to have lodash later

- `useCallback` - Hook to prevent our function from being recreated each time
  the value of our input field changes.

```
current-project
├── README.md (Table of contents with links to other documents)
├── package.json
├── package-lock.json
├── .gitignore
├── config
│   ├── webpack.config.js
│   ├── ...
│   └── Other folder and files
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.tsx
    ├── App.test.tsx
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── serviceWorker.ts
    └── setupTests.ts
```

### table was changed to Data Grid https://mui.com/x/react-data-grid/layout/#main-content

Justification:

- Build in pagination
- Build in limiting or elements items
- Build in Sorting
- Improved User Experience

## Husky

Husky is a EngX standard that comes together with prettier and eslint
integration. It was set up for "program_list_website" section only. later it
should be discussed separate or general styling rules for both projects and
discuss possible monorepo solutions like lerna or npm/yarn workspaces to work
together. Mac & Sourcetree could have issue . Please take a look into
troubleshooting section.

### Icon - clear all

Justification:

- Improvement UI.
- Improved User Experience

### Icon - Sync

- To Display that data is loading
- Improve User Experience

### Atomic Design

Proposed approach - Atomic. Benefits:

- Re-usability and possibility of composition of the components
- Simplified styleguide creation
- Clear Layout structure
- Consistent code
- Transition from Pixel perfect to Component Driven Design
- Quicker prototyping
- Fast components restructuring (easy to change anything)
- Modular and clear file structure.

[Link]([https://atomicdesign.bradfrost.com/)

##
