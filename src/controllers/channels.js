const AmiClient = require("asterisk-ami-client");
let client = new AmiClient();

client.connect("admin", "vgetpa10", {
  host: "test1.gosmartpbx.com",
  port: 5038
});

const ctrl = {};

ctrl.channels = async (req, res) => {
  try {
    await client.on("event", event => console.log(event));
    await client.action({
      Action: "CoreShowChannels"
    });
  } catch {
    await client.on("internalError", error => console.log(error));
  }
};

module.exports = ctrl;
