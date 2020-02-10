const express = require("express");
const router = express.Router();
const axios = require("axios");

const home = require("../controllers/home");
const endpoints = require("../controllers/endpoints");

module.exports = app => {
  router.get("/endpoints", endpoints.extensions);
  router.get("/", home.extensions);

  app.use(router);
};
