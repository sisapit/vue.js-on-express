const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
const BASEURL = "http://localhost:" + PORT;
const VUEPATH = __dirname + '/app/views/';

// Allow access from Vue.js frontend server running on port 9000.
var corsOptions = {
  origin: "http://localhost:8888"
};

// use Vue.js web application files as static files
app.use(express.static(VUEPATH));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Vue.js web app route
app.get("/", (req, res) => {
  console.log("API-I-GET, " + req.url);
  res.sendFile(VUEPATH + "index.html");
});

app.get("/api", (req, res) => {
  console.log("API-I-GET, " + req.url);
  res.json({ data: null, jsonapi: {version: "1.0"}, links: {self: BASEURL + req.url, jsonapi: "https://jsonapi.org/format/1.0/"} });
});

app.get("/api/message", (req, res) => {
  console.log("API-I-GET, " + req.url);
  res.json({ data: {message: `Hi, this is the API running on port ${PORT}!` }, links: {self: BASEURL + req.url}});
});

app.get("/api/*", (req, res) => {
  console.log("API-E-GET, " + req.url);
  res.status(404);
  res.json({ 
    errors: [{
      status: 404, 
      title: "Not found", 
      detail: "No handler function found for route path.", 
      code: "API-E-NOTFOUND", 
      source: {parameter: req.url}}], 
    links: {
      self: BASEURL + req.url,
      jsonapi: "https://jsonapi.org/examples/#error-objects"
    }});
});


// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

