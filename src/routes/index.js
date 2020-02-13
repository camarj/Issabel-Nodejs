const express = require("express");
const router = express.Router();
const axios = require("axios");

const home = require("../controllers/home");

module.exports = app => {
  router.post("/extension", home.crearExtension);
  router.get("/", home.extensions);

  app.use(router);
};
