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

app.use("/", index);

module.exports = app;
