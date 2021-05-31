require("dotenv").config();
const express = require("express");
const path = require('path')

//DB Config
require("./config/db.config");

const app = express();

// Middleware Setup
require("./config/middleware.config")(app);
require("./config/cors.config")(app);

//Prefijos
const index = require("./routes/index.routes");
app.use("/api", index);

//Catch 404
app.use((req, res, next) => {
  return res.status(404).json({ message: 'Not found' });
});

module.exports = app;
