const cors = require("cors");

module.exports = (app) => {
  app.use(
    cors({
      credentials: true,
      origin: [process.env.PUBLIC_DOMAIN],
    })
  );
};


// Config, solo estos dominios de oirign puede hacerme peticiones