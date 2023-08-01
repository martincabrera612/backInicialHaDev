const webRoutes = require("./web");
const adminRoutes = require("./admin");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

module.exports = (app) => {
  // http://expressjs.com/en/api.html#res.locals
  app.use(function (req, res, next) {
    // Make `user` available in templates
    res.locals.user = req.user;
    next();
  });

  app.use(webRoutes);
  app.use("/admin", ensureAuthenticated, adminRoutes);
};
