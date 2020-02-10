const axios = require("axios");

const instance = axios.create({
  baseURL: "https://test1.gosmartpbx.com/pbxapi",
  headers: {
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODExMTk1OTcsImV4cCI6MTU4MTEyMzE5NywiZGF0YSI6eyJuYW1lIjoiYWRtaW4ifX0.GWtoAfkOz-uQqyFuQQlKl0yPRY8wXhHt1IeZMkeLI80"
  }
});

instance
  .get("/extensions")
  .then(resp => {
    console.log(resp.data);
  })
  .catch(err => {
    console.log("Error!!!", err);
  });
