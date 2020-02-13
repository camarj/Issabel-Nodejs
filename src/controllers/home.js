const axios = require("axios");

const instance = axios.create({
  baseURL: "https://test1.gosmartpbx.com/pbxapi",
  headers: {
    authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODE1NTkzODgsImV4cCI6MTU4MTU2Mjk4OCwiZGF0YSI6eyJuYW1lIjoiYWRtaW4ifX0.DIMbQaSCe9b_KimpyQZVR90eOXl4hOwrDWC87WHg6Rs"
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

try {
  ctrl.crearExtension = async (req, res) => {
    const body = req.body;
    const newExtension = {
      tech: body.tipo,
      name: body.nombre,
      extension: body.extension,
      secret: body.password,
      dial: body.tipo + "/" + body.extension
    };
    await instance.post("/extensions", newExtension);
    res.redirect("/");
  };
} catch {
  return res.status(500).json({
    ok: false,
    mensaje: "Error a crear extension",
    errors: err
  });
}

module.exports = ctrl;
