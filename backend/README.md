# Vue.js web application served by Express.js on Node.js

# Install

```bash 
# Install dependencies to .pnp/cache using Yarn PnP.
yarn install
# Configure Yarn PnP.
export NODE_OPTIONS="--require ./.pnp.js" 
# Deploy Vue.js web app.
rm -rf ./app/views/*
cp ../vue-starter/build/* ./app/views
# Run Express web server.
yarn run serve
```
Now open the Vue.js web app `http://localhost:8000` hosted ob this Express server.
Try to reach the API on `http://localhost:8000/api`.

# Bookmarks

- https://www.bezkoder.com/node-express-sequelize-postgresql/
