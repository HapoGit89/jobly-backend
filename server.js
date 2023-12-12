"use strict";

const app = require("./app");
const { PORT } = require("./config");


app.listen(PORT, function () {
  app
  console.log(`Started on http://localhost:${PORT}`);
});
