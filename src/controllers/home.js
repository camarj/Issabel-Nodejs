const axios = require("axios");

const instance = axios.create({
  baseURL: "https://test1.gosmartpbx.com/pbxapi",
  headers: {
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODEzNjk2ODQsImV4cCI6MTU4MTM3MzI4NCwiZGF0YSI6eyJuYW1lIjoiYWRtaW4ifX0.0XP3VZ-rDgy8oJOe9732jaxcHaOrN4S4IPFxaU9z7dg"
  }
});

const ctrl = {};

try {
  ctrl.extensions = async (req, res) => {
    const extens = await instance.get("/extensions");
    const exts = extens.data.results;
    res.render("index", { exts });
    console.log(extens.data.results);
  };
} catch {}

module.exports = ctrl;
