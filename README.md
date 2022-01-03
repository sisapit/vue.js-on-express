
# Vue.js on Express Starter Setup

## Frontend dev mode

```bash
cd frontend
yarn serve
```

Access frontend on `http://localhost:8888/`.

## Production mode

```bash
cd frontend
# Build frontend into backend's app/views directory.
yarn build
cd ../backend
# Serve frontend and API backend on port 8000.
yarn serve
```

Access frontend on `http://localhost:8000/`.
Access API on `http://localhost:8000/api/`.

# Bookmarks

https://www.bezkoder.com/serve-vue-app-express/
https://vuejs.org/v2/guide/components.html
https://vuejs.org/v2/guide/single-file-components.html
