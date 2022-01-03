# vue-starter

## Features
- Vue.js 3
- Vue.js debugging of Vue components in VS Code (within `<script>` and `<template>` section)
- Vue.js debugging in Firefox (tab "Debugger", section "Webpack/src" within `<script>` and `<template>` section)
- HMR (hot module replacement) in dev mode via vue-cli-service based on webpack dev server
- Vue SFC (single file component)
- Babel
- ESLint
- Production mode buildung

## Default configuration
- `src/main.js` is the entry file for the dev server.
- `http://localhost:8888` is the web app started by `yarn server`.
- `http://localhost:8000` is expected to be the API backend base URL.

## Debugging with Firefox
1. Install VS Code extension 'Debugger for Firefox'.
1. Launch `serve` script. Ignore the Firefox window that gets automatically opened by the script.
1. Open "Run and Debug" view in VS Code. 
1. Select "Vue.js: Firefox" configuration.
1. Press F5 oder click an "Start debugging". This step opens a remotely controlled Firefox window (address bar is marked red).
1. Set breakpoint in VS Code.

## Vue.js debugging in Firefox
1. Install "Vue.js devtools" Firefox extension.
1. Launch `serve` script. The script automatically opens my Vue.js web app in a new Firefox browser tab.
1. Open "Web Developer Tools" in Firefox. 
1. Switch to panel "Vue" and examine the Vue.js components and their data elements.

Hint: Doesn't work with remotely controlled Firefox window!
Hint: Do you see the "Vue" icon on the Firefox toolbar? Is it green?
Hint: Install "Vue.js devtools" extension beta xpi for Vue.jw 3 support!

## Project setup
```bash
# Install dependencies to .pnp/cache using Yarn PnP.
yarn install
# Configure Yarn PnP.
export NODE_OPTIONS="--require ./.pnp.js" 
```

### Compiles and hot-reloads for development
```bash
yarn serve
```

### Compiles and minifies for production
```bash
yarn build
```

### Lints and fixes files
```bash
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Initial creation
```bash
yarn add global @vue/cli
export PATH=$PATH:`yarn global bin`
vue create vue-starter
```

