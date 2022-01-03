# vue-starter

## Features
- Vue.js 3
- HMR (hot module replacement) in dev mode via vue-cli-service based on webpack dev server
- Vue SFC (single file component)
- Babel
- ESLint
- Production mode buildung

## Default configuration
- `src/main.js` is the entry file for the dev server.
- `http://localhost:9000` is the web app started by `yarn server`.
- `http://localhost:8000` is expected to be the API backend base URL.

## Project setup
```bash
yarn install
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

