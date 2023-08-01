const session = require("express-session");
const flash = require("express-flash");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize } = require("../models");

module.exports = (app) => {
  app.use(
    session({
      store: new SequelizeStore({
        db: sequelize,
      }),
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      name: "session", // Por defecto la cookie se llama "connect.id"
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // Por defecto es null (la cookie no expira). Valor en milisegundos.
        secure: false, // La opción `true` requiere HTTPS.
        httpOnly: true,
      },
    })
  );
  app.use(flash());
};
