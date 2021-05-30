require("dotenv").config();
const express = require("express");

//DB Config
require("./config/db.config");

const app = express();

// Middleware Setup
require("./config/middleware.config")(app);
require("./config/cors.config")(app);

const index = require("./routes/index");
app.use("/", index);

module.exports = app;
