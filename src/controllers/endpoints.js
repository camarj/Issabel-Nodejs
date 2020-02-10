const axios = require("axios");

const instance = axios.create({
  baseURL: "https://test1.gosmartpbx.com/pbxapi",
  headers: {
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODExOTg4MTUsImV4cCI6MTU4MTIwMjQxNSwiZGF0YSI6eyJuYW1lIjoiYWRtaW4ifX0.RDKhpn-obfQ2alxLb8mwBip2oJ1tEw7DBkOyN6fL7xA"
  }
});
const ctrl = {};

ctrl.extensions = async (req, res) => {
  const extens = await instance.get("/extensions");
  const exts = extens.data;
  res.json(exts);
};

module.exports = ctrl;
